function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15