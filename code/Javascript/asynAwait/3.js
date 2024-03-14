// QUESTION IS -> IS PROGRAM ACTUALLY WAITING OR WHAT IS HAPPENING BEHIND THE SCENE?

//awk that js waits for none, over here it apears that js engine is waiting but js engine is not waiting over here
// it has not occupied the call stack if that would have been the case our page mat have got frozen , 
// so js engine is not waiting .
// so if its not waiting ... what is hapeing behind the scenes
const p1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise resolved value by p1!');
    },5000)
})
const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise resolved value by p2!')

    },5000)
})

async function handlePromise(){
    console.log('Hi');
    debugger;
    const val=await p;
    console.log(val);

    const val2=await p2;
    console.log('Hello There! 2');
    debugger;
    console.log(val2);
}
handlePromise();

// when this function i executed , it will go line by line -> as JS is sync single threaded lang
//JS is synchronous single threaded language. Lets observe what is happening under call-stack. Above you can see we have set the break-points.

// call stack flow -> handlePromise() is pushed -> it will log 'hi' to console
// -> next it sees we have await where
// promise is suppose to be resolved -> So will it wait for promise to resolve and block call stack? 
//No -> thus handlePromise() execution get suspended and moved out of call stack -> 
// -> So when JS sees await keyword it suspend the execution of function till promise is resolved ->
// -> So `p` will get resolved after 5 secs so handlePromise() will be pushed to call-stack again after 5 secs. 
//-> But this time it will start executing from where it had left. 
//-> Now it will log 'Hello There!' and 'Promise resolved value!!'
// -> then it will check whether `p2` is resolved or not 
//-> It will find since `p2` will take 10 secs to resolve so the same above process will repeat
// -> execution will be suspended until promise is resolved.

// REAL WORLD EXAMPLE
async function handlePromise(){
    // fetch()=> response object whcih as body readable stream 
     // response => response.json() is also a promise  which when  resolved => value
     const data = await fetch('https://api.github.com/users/alok722');
        const res = await data.json();
        console.log(res);
};
handlePromise()

// ERROR HANDLING
//While we were using normal Promise we were using .catch to handle error, now in async-await we would be
// using try-catch block to handle error.

async function handlePromise() {
  try {
    const data = await fetch('https://api.github.com/users/alok722');
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err)
  }
};
handlePromise()

// In above whenever any error will occur the execution will move to catch block. 
//One could try above with bad url which will result in error.

// Other way of handling error:
handlePromise().catch(err => console.log(err)); // this will work as handlePromise will return error promise in case of failure.

//Async await vs Promise.then/.catch
// What one should use? 
//async-await is just a syntactic sugar around promise. 
//Behind the scene async-await is just promise. So both are same, 
//it’s just async-await is new way of writing code. 
//async-await solves few of the short-coming of Promise like Promise Chaining.
// async-await also increases the readability. So sort of it is always advisable to use async-await.


