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
//case