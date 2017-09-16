/**
 * Move element in Immutable List from start index to end index
 * @param list
 * @param startIndex
 * @param endIndex
 * @returns {List}
 */
export const moveElement = (list, startIndex, endIndex) => {
    const item = list.get(startIndex)
    return list.delete(startIndex).insert(endIndex, item)
}