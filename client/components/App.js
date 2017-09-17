import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import {fromJS} from 'immutable'
import {DragDropContext} from 'react-beautiful-dnd'

import socket from '../services/socket'

import {getApplicants} from '../services/data'
import * as utils from '../services/utils'

import List from './List'

import css from './App.less'

export default class App extends React.Component {
    state = {
        lists: fromJS([
            {
                id: 'contacted',
                title: 'Contacté',
                items: getApplicants(3),
            },
            {
                id: 'meet',
                title: 'A rencontrer',
                items: [],
            },
            {
                id: 'interview',
                title: 'Entretien',
                items: getApplicants(1),
            },
        ]),
    }

    componentDidMount() {
        // move applicant to another list/index (from socket)
        socket.on('move-applicant', (payload) => {
            return this.setState({
                lists: utils.moveListItem(this.state.lists, payload),
            })
        })
    }

    /**
     * Triggered when dropping dragged item
     * @param result
     */
    onDragEnd = (result) => {
        const {source, destination} = result
        const {lists} = this.state

        // dropped outside the list
        if (!destination) {
            return
        }

        // moved to another list/index
        const payload = {
            fromListId: source.droppableId,
            itemId: result.draggableId,
            toListId: destination.droppableId,
            toIndex: destination.index,
        }

        // send the move event to server
        socket.emit('move-applicant', payload)

        // immediately apply the changes on client
        return this.setState({
            lists: utils.moveListItem(lists, payload),
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
