// ASYNC KEYWORD
// USED BEFORE A FUNCTION , TO CREATE A ASYNC FUNCTION
// async function always returns a promise, even if I return a simple string from below function, async keyword will return a promise
// example
async function getData(){
    return "Namaste Javascript"
}
const dataPromise= getData()
console.log(dataPromise) // logs a promise 
// <fulfilled> : namaste kavascript
// how to extract data from the above promise ? 
// ---> ONE WAY USING .then()
dataPromise.then(res => console.log(res))


// another example where async function is returning a promise

const p= new Promise((resolve, reject)=>{
    resolve('Promise resolved value!')
})

async function getData(){
    return p;

}
// similarly 
// console.log(dataPromise) promise <fulfilled>

// HOW WE CAN USE AWAIT ALONG WITH ASYNC FUNCTION
// COMBO IS USED TO HANDLE PROMISES

// BUT HOW WE CAN HNADLE PROMISES EARLIER AND WHY WE EVEN NEED ASYNC/AWAIT 

const q=new Promise((resolve, reject)=>{
    resolve('promise resolved value!')
})
function getData(){
    p.then(res=> console.log(res))
}

getData(); // promise resolved value


//using async await 
async function handlePromise(){
    const val=await p;
        console.log(val);
    
}

handlePromise() // promise resolved value
// awairt keyword that can only be used inside async function
await function(){} // syntax error 
