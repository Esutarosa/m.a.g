/**
 * Sorts an array of items based on the provided sort descriptor.
 *
 * @param {any[]} items - The array of items to sort.
 * @param {Object} sortDescriptor - An object containing the column to sort by and the direction of the sort.
 * @param {string} sortDescriptor.column - The column to sort by.
 * @param {'ascending'|'descending'} sortDescriptor.direction - The direction of the sort.
 * @returns {any[]} - The sorted array of items.
 */
export const sortItems = (
  items: any[],
  sortDescriptor: {
    column: string,
    direction: 'ascending' | 'descending'
  }
) => {
  return items.sort((a, b) => {
    // Get the values of the column to sort by for each item
    const first = a[sortDescriptor.column];
    const second = b[sortDescriptor.column];

    // Compare the values
    let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

    // If the sort direction is descending, reverse the comparison
    if (sortDescriptor.direction === 'descending') {
      cmp *= -1;
    }

    return cmp;
  });
};