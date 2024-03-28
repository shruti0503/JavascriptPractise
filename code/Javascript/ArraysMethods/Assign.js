// In JavaScript, the `Object.assign()` method is used to copy the values of all enumerable own properties 
//from one or more source objects to a target object. It returns the modified target object.

// Here's the syntax for `Object.assign()`:

// ```javascript
// Object.assign(target, ...sources)
// ```

// - `target`: The target object to which the properties will be copied.
//This object will be modified and returned by the `assign()` method.
// - `sources`: One or more source objects from which the properties will be copied to the target object. 
//These objects will not be modified.

// Example:

// ```javascript
// const target = { a: 1, b: 2 };
// const source1 = { b: 3, c: 4 };
// const source2 = { d: 5 };

// const mergedObject = Object.assign(target, source1, source2);

// console.log(mergedObject); // Output: { a: 1, b: 3, c: 4, d: 5 }
// console.log(target); // Output: { a: 1, b: 3, c: 4, d: 5 }, target object is modified
// ```

// In this example, properties from `source1` and `source2` are copied to the `target` object. 
// If properties with the same name exist in both the target and source objects, the values from the source objects overwrite
// the values in the target object. The `Object.assign()` method modifies the `target` object directly.

// It's important to note that `Object.assign()` performs a shallow copy, meaning that it only copies the property values at the first level. 
//If the source or target objects contain nested objects or arrays, those will not be recursively copied. Instead, they will be referenced in the new object.
// If you need to perform a deep copy, you would need to implement it manually or use a library that provides deep copying functionality.