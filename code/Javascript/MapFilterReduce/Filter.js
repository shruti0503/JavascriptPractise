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

 let filteredUsers=[];
 for(let i=0;i<users.length;i++){
    if(users[i].age > 90 && users[i].occupation==='programmer'){
        filteredUsers=[...filteredUsers, users[i]];
    }
 }

 console.log(filteredUsers)
