// what makes async await special
const p  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise resolved value!');
    }, 3000)
})

// comparing

function getData(){
    p.then(res=> console.log(res));
    console.log('hello there!')
}

getData(); 
// first -> 'hello world' is printed  -> then after 3 seconds 'promise resolved value is printed

async function handlePromise(){
    const val=await p;
    console.log('Hello There!');
    console.log(val);
}
handlePromise() // this time 'hello there' wont be printed immediatly instead after 3 sec 'Hello There' will be printed
// basically code was waiting at 'await' line to gte the promise resolve before moving on to next line.

// above is the major difference between Promise.then/.catch vs async-await
// BRAIN STORMING MORE AROUND ASYNC AWAIT

async function handlePromise(){
    console.log('Hi');
    const val=await p;
    console.log('Hello There!');
    console.timeLog(val);


    const val2 =await p;
    console.log('Hello There! 2');
    console.log(val2);

}

handlePromise();

// in the above code , 
// hi printed instantly , -> code waits for 3 secs , -> after 3 secs both promises will be resolved so ('hello )

// CREATING ONE PROMISE AND THEN RESOLVE TWO DIFFERENT PROMISE
const p2=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise resolved value by p2!!');
    }, 2000);
})

async function handlePromise(){
    console.log('Hi');
    const val=await p;
    console.log('Hello There!');
    console.log(val);

    const val2=await p2;
    console.log('Hello There 2');
    console.log(val2);
}

handlePromise();
// hi printed instantly -> code waits for 3 secs -> 'Hello There!' -> after 3 secs -> both promises will be resolved -

//REVERSING THE ORDER OF EXECUTION
async function handlePromise(){
    console.log('Hi');
    const val=await p2;
    console.log('hello there!');
    console.log(val);

    const val2=await p;
    console.log('hello there ! 2');
    console.log(val2);
}

handlePromise();
// 

