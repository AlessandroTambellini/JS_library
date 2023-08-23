function strictEqual(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) return true;
    if (
        (Object.is(a, 0) && Object.is(b, -0)) ||
        (Object.is(a, -0) && Object.is(b, 0))
    ) {
        return true;
    }
    return Object.is(a, b);
}

console.log(strictEqual(NaN, NaN)); // => true
console.log(strictEqual(0, -0)); // => true
console.log(strictEqual(-0, 0)); // => true
console.log(strictEqual(34, "hiv")); // => false