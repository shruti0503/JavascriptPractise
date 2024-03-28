// FILTER -> METHOD CREATES A NEW ARRAY  FILED WITH ELKEMENTS THAT PASSES A TEST PROVIDED BY A FUNCTION
// DOES NOT EXECUTE THE FUNCTION FOR EMOTY ELEMENTS
// DOES  NOT CHNAGE THE ORIGINAL ARRAY

// PARAMTERS: 
// 1. function()	Required.
// A function to run for each array element.

// 2. currentValue	Required.
// The value of the current element.

// 3. index	Optional.
// The index of the current element.

// 4. arr	Optional.
// The array of the current element.

//5.  thisValue	Optional. Default undefined
// A value passed to the function as its this value.

// RETURN VALUE IS AN ARRAY THAT PASSES THE TEST AN EMEPTY ONE IS NONE PASSES

// TRADITIONALLY HOW WE USED THE FOR LOOP TO REMOVE CERTAIN ELEMENTS:
let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]

 let filteredUsers=[]; // created an empty array
 //return a new array whose age is greater than 40 and whose occupation is equal to programmer:
 for(let i=0;i<users.length;i++){
    if(users[i].age > 90 && users[i].occupation==='programmer'){
        filteredUsers=[...filteredUsers, users[i]];
    }
 }

 console.log(filteredUsers)

 // NOW USING  FILTER METHOD => myArray.filter(callbackFn)
 //you have access to each element, the index, and the original array itself:
 Array.filter((element, index, array)=> {"....."})


 let FilteredUsers=users.filter(user=>user.age>40 && user.occupation==="programmer");


 // Usecase
 // sort the filtered array in and return array of names
 let fFlteredUsers=users.filter(user=> user.age > 40 && name =="prahsnt").sort((a,b)=> a.age-b.age).map(user=>user.name);
// (a, b) => a.age - b.age: This is an arrow function used as the comparison function for sorting. 
// It takes two parameters, a and b, which represent two elements being compared. In this case, 
//it's comparing the age property of each object.
// a.age - b.age: This expression subtracts the age of object b from the age of object a. If the result is negative, 
//it means a should come before b in the sorted array. 
//If the result is positive, it means a should come after b. 
//If the result is zero, it means a and b are considered equal in terms of sorting.


// FILTERIG OBJECTS IN JAVASCRIPT
// OBJECTS ARE NOT ITERABLE , WE CANNOT USE loop method or an iteration method directly on an obejct
// to do this we can convert the object to an array using any of the object  static methods such as
// object.keys(), object.values() or object.entries()

console.log("Try programiz.pro");

obj ={new:"2", cc:"ee"}; 
let keys = Object.keys(obj) // [ 'new', 'cc' ]
let values= Object.values(obj) // [ '2', 'ee' ]
console.log(keys);
console.log(values)

// now we can use filter method on it 
let filteredKeys=keys.filter((key)=> key=="new");
let filteredValues=values.filter((val)=>val=="ee")

// imp 
console.log(typeof Object.values(obj)); // -> object 
console.log(typeof keys); // -> object 

// remember 
// arrays in javascript are specila type of objects that, the arrays inherit 
// from the 'Array' prototype but they are also objects themselves , means that the arrays have all propertirs and methods
// of regular objects 
// in addition -> special array methods and properties

const myArray = [1, 2, 3];
myArray.customProperty = 'Hello';

console.log(myArray.customProperty); // Output: Hello


// -- CONTINUING THE FILTER TOPIC 
//you can filter our object key-value pair that includes a name from a large object.
//  Then you can first get the keys, filter them, and use the reduce() method to reduce the filtered keys to an object with the filtered keys and their values:

const userDetails = {
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels",
    email: "jane.daniels@example.com",
    comapny: "Example Inc.",
    address: "1234 Example Street",
    age : 25,
    hobby: "Singing"
};
//reduce() method in JavaScript is used to reduce the elements of an array to a single value, applying a function to each element.
//the Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
//It returns the modified target object.
// Object.assign(target, ...sources)

const userNames=Object .keys(userDetails) // array of keys 
.filter((key)=> key.includes("Name")) // [firstName, lastName, userName]
.reduce((object,key)=>{  // reduces to a value by applying a function
    return Object.assign(object, { //
        [key]:userDetails[key]
    });
},{})

//Inside the reduce() callback function:

// object: This represents the accumulator, which starts as an empty object {}. 
//As the reduce() function iterates over the keys, properties are added to this object.
//key: This represents each key in the filtered array.

// console.log(userNames) // { firstName: 'Jane', lastName: 'Daniels', userName: 'jane.daniels' }

// Object.assign(object, { [key]: userDetails[key] }): 
//This line is using Object.assign() to merge a new object into the accumulator object (object).
// The new object has a single property, where the key is dynamically determined by [key], 
//and the value is userDetails[key], which retrieves the corresponding value from the userDetails object.

// The result of the reduce() operation is an object containing only the properties from userDetails whose keys contain the substring "Name".

