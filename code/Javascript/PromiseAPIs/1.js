// promise
// placeholder for a value thats going to be available sometime later
// the promise helps hanlde async operations. 
// js provides a helper function Promise.all(promisesArrayOrlterable) to hanlde multiple promises at once,
// in parallel, and get the results in a single aggregate way

// IN WHAT SITAUTION?
// TO MAKE A PARALLEL API CALL AND GET THE RESULT -> this is where promise.all can be utilised , 
// used to to hanlde multiple promises together

//promise.all([p1, p2, p3])=> lets assume we are making 3 api call to fetch data
// also assume p1 takes 3 seconds , p2 -> 1 second, p3-> 2 sec

// CASE 1: 
//ALL THREE SUCCESSFULL , so promise.all will takje 3 secs 
// it will wait for all of them to finish and then collect its result and give array as output

//CASE 2:
//what is any of the promise gets rejected , 
// Promise.all([p1, p2,p3])
//p2 gets rejected after 1 sec 
//promise.all will throw same error as p2
// will not waut other to become success or failure 

// moreover , p1 ansd p2 aont get cancelled , as they are already triggered , so it may 
// result in success or failure

//To conclude, the Promise.all() waits for all the input promises 
//to resolve and returns a new promise that resolves to an array containing the results of the input promises.
// If one of the input promises is rejected, the Promise.all() method immediately returns a promise that is rejected with an error of the first rejected promise.

// ***** Promise.allSettled()****
//promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves after all the input promises have settled, either resolved or rejected.
//What if any of the promise gets rejected, for eg:
// Promise.all([p1, p2, p3]). But this time, p2 get rejected after 1 sec. Thus Promise.allSettled will still wait for all promises to get settled. So After 3 secs, it will be [val1, err, val3]



//Promise.all() -> Fail Fast
// 💡Promise.allSettled() -> Will wait and provide accumulative result
// 🤯

//The Promise.race()-> accepts a list of promises as an iterable object and 
// returns a new promise that ful fills or rejects as soon as there is one promise
// that fulfills or rejects with the value or a reason from that promise

// the name of priomse.race() implies that all the promises race against each other with a single winner
// resolved or rejected

// p1 , p2 , p3 ->  three apis to fectch data 
// assume p1 -> 3 seconds , p2 -> 1 second
// p3 -> 2 seconds
// So as soon as first promise will be successful, it will give the output.


PROMISE.all()
const p1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('P1 success')

    },3000)
})

const p2= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('P2 success')

    },1000)
})

const p3= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('p3 success')

    },2000)
})

Promise.all([p1, p2, p3]).then((results)=>{
    console.log(results)
    // ['P1 Success', 'P2 Success', 'P3 Success'] -> took 3 secs
})


// case 2
Promise.all([p1,p2,p3])
.then(results=>console.log(results))
.catch(err=>console.log(err)); // throws error after 1 sec 'P2 fails'


// Promise.allSettled()
// this is safest among all Promises API
Promise.allSettled([p1, p2, p3])
  .then((results) => console.log(results))
  .catch(err => console.error(err));

// Over here, it will wait for all promises to be either settled or rejected and then return,
  /*
    [
      {status: 'fulfilled', value: 'P1 Success'},
      {status: 'fulfilled', value: 'P2 Success'},
      {status: 'rejected', reason: 'P3 Fail'}
    ]
  */

    Promise.race([p1, p2, p3])
  .then((results) => console.log(results))
  .catch(err => console.error(err));

 // It will return as soon as first promise is resolved or rejected.
 // In above example O/P: "P2 Success"

 // 📌 Second Scenario

const P1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P1 Success');
    }, 3000);
  });
  const P2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P2 Success');
    }, 5000);
  });
  const P3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('P3 Fail');
    }, 2000);
  });
  
  Promise.race([P1, P2, P3])
    .then((results) => console.log(results))
    .catch(err => console.error(err));
  
   //After 2 secs O/P: "P3 Fail"
   // Notes:

// Once promise is settled, it means -> got the result. Moreover, settled is broadly divided into two categories:
// resolve, success, fulfilled
// reject, failure, rejected
//There are 6 static methods of Promise class:

// Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.

// Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with: status: “fulfilled” or “rejected” value (if fulfilled) or reason (if rejected).
///
// Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.

// Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.

// Promise.resolve(value) – makes a resolved promise with the given value.

// Promise.reject(error) – makes a rejected promise with the given error. Of all these, Promise.all is probably the most common in practice.