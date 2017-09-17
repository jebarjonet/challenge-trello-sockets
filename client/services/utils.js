/**
 * Move item to destination list at specified index
 * @param lists
 * @param fromListId
 * @param itemId
 * @param toListId
 * @param toIndex
 */
export const moveListItem = (lists, {fromListId, itemId, toListId, toIndex}) => {
    const fromListIndex = lists.findIndex(list => list.get('id') === fromListId)
    const fromIndex = lists.getIn([fromListIndex, 'items']).findIndex(item => item.get('id') === itemId)
    const toListIndex = lists.findIndex(list => list.get('id') === toListId)

    const item = lists.getIn([fromListIndex, 'items', fromIndex])
    return lists
        .updateIn([fromListIndex, 'items'], items => items.splice(fromIndex, 1))
        .updateIn([toListIndex, 'items'], items => items.splice(toIndex, 0, item))
}
