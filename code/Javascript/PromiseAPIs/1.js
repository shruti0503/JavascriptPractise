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

//The Promise.race()