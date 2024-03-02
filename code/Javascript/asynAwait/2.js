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
// first -> 'hello world' is printed 