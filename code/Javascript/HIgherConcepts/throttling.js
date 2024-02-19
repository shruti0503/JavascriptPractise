// rate at whoch the function is invoked
 function throttle(func, delay){
    let lastCall=0;
    return function(...args){

        const now= new Data().getTime();
        if(now -lastCall >= delay){
            func(...args);
            lastCall=now;
        }

    }
 }

 const throttledScrollHandler=throttle(()=>{
    console.log("loading more content..")
 }, 100)

 window.addEventListener("Scroll", throttledScrollHandler)