/**
 * 
 * @param {any[]} arr - Array to check
 * @param {any|any[]} elem An item that needs to be checked or an array containing many items that need to be checked
 */
export let deepIncludes = (arr, elem) => {
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
export let intersect = (f, s) => f.filter(item => s.includes(item)); 