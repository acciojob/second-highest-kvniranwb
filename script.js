function secondHighest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) return -Infinity;

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let val of arr) {
        const num = Number(val);
        if (Number.isNaN(num)) continue;

        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }

    return secondMax;
}

// 👇 THIS PART IS WHAT YOU ARE MISSING
window.onload = function () {
    const arr = [];

    for (let i = 0; i < 6; i++) {
        arr.push(Number(prompt("Enter number")));
    }

    alert(secondHighest(arr));
};