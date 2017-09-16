import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import {fromJS} from 'immutable'
import {DragDropContext} from 'react-beautiful-dnd'

import {getApplicants} from '../data'
import * as utils from '../utils'

import List from './List'

import css from './App.less'

export default class App extends React.Component {
    state = {
        lists: fromJS([
            {
                id: 'meet',
                title: 'A rencontrer',
                items: getApplicants(3),
            },
            {
                id: 'interview',
                title: 'Entretien',
                items: getApplicants(1),
            },
        ]),
    }

    onDragEnd = (result) => {
        const {source, destination} = result
        const {lists} = this.state

        // dropped outside the list
        if (!destination) {
            return
        }

        const previousListIndex = lists.findIndex(list => list.get('id') === source.droppableId)
        const previousList = lists.get(previousListIndex)

        // moved in same list
        if (source.droppableId === destination.droppableId) {
            const items = utils.moveElement(previousList.get('items'), source.index, destination.index)
            this.setState({
                lists: lists.setIn([previousListIndex, 'items'], items),
            })
        }

        // moved to different list
        const nextListIndex = lists.findIndex(list => list.get('id') === destination.droppableId)
        const movedItem = previousList.getIn(['items', source.index])
        this.setState({
            lists: lists
                .updateIn([previousListIndex, 'items'], items => items.splice(source.index, 1))
                .updateIn([nextListIndex, 'items'], items => items.splice(destination.index, 0, movedItem)),
        })
    }

    render() {
        const {lists} = this.state

        return (
            <DragDropContext
                onDragStart={this.onDragStart}
                onDragEnd={this.onDragEnd}
            >
                <div className={css.layout}>
                    {
                        lists.map((list) => {
                            return (
                                <List
                                    key={list.get('id')}
                                    list={list}
                                />
                            )
                        })
                    }
                </div>
            </DragDropContext>
        )
    }
}
