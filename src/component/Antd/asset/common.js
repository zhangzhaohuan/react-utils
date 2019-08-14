
/**
 * 数组差集
 * @param arr1
 * @param arr2
 */
export const subSet = (arr1, arr2) => {
    var set1 = new Set(arr1);
    var set2 = new Set(arr2);

    var subset = [];

    for (let item of set1) {
        if (!set2.has(item)) {
            subset.push(item);
        }
    }

    return subset;
}
/**
 * 数组差集
 * @param arr1
 * @param arr2
 */
export const removeArr = (arr1, val) => {
    var index = arr1.indexOf(val);
    if (index > -1) {
        arr1.splice(index, 1);
    }
    return arr1
}


