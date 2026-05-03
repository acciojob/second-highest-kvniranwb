function secondHighest(arr) {
    if (!arr || arr.length < 2) return -Infinity;

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }

    return secondMax;
}