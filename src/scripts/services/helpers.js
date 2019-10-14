/**
 * 
 * @param {any[]} arr - Array to check
 * @param {any|any[]} elem An item that needs to be checked or an array containing many items that need to be checked
 */
export const deepIncludes = (arr, elem) => {
    if(elem instanceof Array) {
        for(let item of elem) {
            if (arr.includes(item)) return true;
        } 
    } else {
        return arr.includes(elem);
    }

    return false;
};

/**
 * Set intersect on two arrays 
 * @param {any[]} f - first set
 * @param {any[]} s - second set
 */
export const intersect = (f, s) => f.filter(item => s.includes(item)); 

/**
* Populates a table of size rows x cols with given elements
* @param {DOMNode[]} elements - List of elements to populate the table with (length must be at least rows * cols )
* @param {number} rows - Number of rows
* @param {number} cols - Number of columns
* @param {DOMNode} table - Table element to populate
*/
export const generateTable = (elements, rows, cols, table) => {
    if(elements.length < rows * cols) throw new Error('Length of the elements array must be at least rows*cols');

    for(let i=0;i<rows;i++) {
        const row = document.createElement('tr');
        for(let j=0;j<cols;j++) {
            const col = document.createElement('td');
            col.appendChild(elements[cols*i + j]);
            row.appendChild(col);
        }
        table.appendChild(row);
    }
};
