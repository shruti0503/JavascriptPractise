// Both `map()` and `reduce()` are array methods in JavaScript, but they serve different purposes and have different behaviors:

// 1. **map() Method**:
//    - The `map()` method creates a new array by applying a function to each element of the original array.
//    - It iterates over each element of the array and calls a provided function on each element.
//    - The return value of the provided function for each element is stored in the new array.
//    - The original array remains unchanged.
//    - The `map()` method returns a new array with the same length as the original array.
//    - Use `map()` when you want to transform each element of an array into something else, preserving the original array's length and order.

// Example:

// ```javascript
// const numbers = [1, 2, 3, 4];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8]
// ```

// 2. **reduce() Method**:
//    - The `reduce()` method reduces the elements of an array to a single value.
//    - It executes a provided function for each element of the array, resulting in a single output value.
//    - The `reduce()` method takes an accumulator (initial value or the result of the previous iteration) and the current value as parameters.
//    - The return value of each iteration becomes the accumulator for the next iteration.
//    - The `reduce()` method can be used for various purposes such as summing up elements, finding the maximum/minimum value, flattening arrays, etc.
//    - The original array can be transformed or used in different ways.
//    - Use `reduce()` when you want to perform an operation that accumulates a single result from the elements of an array.

// Example:

// ```javascript
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 10 (1 + 2 + 3 + 4)
// ```

// In summary, `map()` is used for transforming each element of an array into something else, while `reduce()` is used for reducing an array to a single value, such as summing up the elements or finding the maximum/minimum value.