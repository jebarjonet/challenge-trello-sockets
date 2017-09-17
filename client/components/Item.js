import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import {fromJS} from 'immutable'
import {Draggable} from 'react-beautiful-dnd'

import css from './Item.less'

export default class Item extends React.Component {
    static propTypes = {
        item: ImmutablePropTypes.map.isRequired,
    }

    static defaultProps = {
        item: fromJS({}),
    }

    render() {
        const {item} = this.props

        return (
            <Draggable draggableId={item.get('id')}>
                {
                    (provided, snapshot) => {
                        return (
                            <div>
                                <div
                                    className={classNames(css.item, {
                                        [css.dragging]: snapshot.isDragging,
                                    })}
                                    style={provided.draggableStyle}
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                >
                                    {item.get('name')}
                                </div>
                                {provided.placeholder}
                            </div>
                        )
                    }
                }
            </Draggable>
        )
    }
}
