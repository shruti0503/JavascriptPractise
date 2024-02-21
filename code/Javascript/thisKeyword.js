"use strict"

// this keyword works deferblty in differnet scenarios
console.log(this) 
// window object 
// global object 
// js can run indsise anywhere , and there is a js runtime env , 
// inside the brower the global obhjevt is different every where 
// in vcase of   brower the valuye of global object is global 

// depends upon where we are running that code 


// this in global scope
this
function x(){
    console.log(this)
    // again a window , but this is different
    // it is a non strict mode
    // this keyw the value depends on strict , non strict mode 
    // window-> non strict
    // undefined -> strict mode 
}
x()

// this inside a function - this substituion

// if the value is undeifned or null 
// this will be replaced with global object 
// only in on strict mode 


// this keyoerd also depends how the function is called
x();  undefined // called without any reference in strict mode 
window.x(); // returns window object  // called with refrtence even with strict mode on

// this in strict node (this substituion)
// [RUNTIME BINDING]

//-------------------------

//this IN OBJECTS METHOD
// DIFFERENCE BETWEEN FUNCTION AND A METHOD 
// FUNCTION AS A PART OF A OBJECT IS METHOD 

const obj ={
    a:10,
    x: function(){
        console.log(this)
    }
}

obj.x() ;// value becomes this whole object
// ie {a: 10 , x:f}