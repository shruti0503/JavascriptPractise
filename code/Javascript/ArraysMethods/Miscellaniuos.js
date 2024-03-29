// The Array.from() static method creates a new, shallow-copied Array instance

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

Array.from(arrayLike)
//arrayLike
//An iterable or array-like object to convert to an array.
Array.from(arrayLike, mapFn)

// A function to call on every element of the array. 
///If provided, every value to be added to the array is first passed through this function
//, and mapFn's return value is added to the array instead. The function is called with the following arguments:

// element
// The current element being processed in the array.

// index
// The index of the current element being processed in the array.


Array.from(arrayLike, mapFn, thisArg)
//Value to use as this when executing mapFn.


