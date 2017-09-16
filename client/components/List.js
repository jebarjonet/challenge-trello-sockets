import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import {fromJS} from 'immutable'
import {Droppable} from 'react-beautiful-dnd'

import Item from './Item'

import css from './List.less'

export default class List extends React.Component {
    static propTypes = {
        list: ImmutablePropTypes.map.isRequired,
    }

    static defaultProps = {
        list: fromJS({}),
    }

    render() {
        const {list} = this.props

        return (
            <div className={css.column}>
                <Droppable droppableId={list.get('id')}>
                    {
                        (provided) => {
                            return (
                                <div ref={provided.innerRef}>
                                    {list.get('title')}
                                    <div className={css.list}>
                                        {
                                            list.get('items').map((item) => {
                                                return (
                                                    <Item
                                                        key={item.get('id')}
                                                        item={item}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                    {provided.placeholder}
                                </div>
                            )
                        }
                    }
                </Droppable>
            </div>
        )
    }
}
