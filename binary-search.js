function binarySearch(items, target) {
    let lower = 0;
    let higher = items.length;

    do {
        const middle = Math.floor(lower + (higher - lower) / 2);
        const value = items[middle];

        if (value === target) {
            return middle
        } else if (value > target) {
            higher = middle
        } else {
            lower = middle + 1
        }
    } while(lower < higher)

    return -1
}

export { binarySearch }