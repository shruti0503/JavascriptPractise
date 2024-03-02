// creating our own promise 
const cart=["shoes", "kurta"];
// creating order with an api -> returns orderis => proceed to payemnt
const promise=createOrder(cart); // return order id after creatung order
// expectation-> going to return a promise

promise.then(function(orderId){
    proceedToPayment(orderId);

})
// ----> now lets see how order id is created 

// FUNCTION PART OF PROMISE
function createOrder(cart){
    // js provide s> function coinstructor -> to create promise
    // accepts call back function , with two paramters => resolve , reject
    const promise= new Promise(function(resolve, reject){
        // logic 
        // validate cart
        // insert in db and get order id

        if(!validateCart(cart)){
            // if cart not valid, reject promise
            const err= new Error('cart not valid')
            reject(err);
        }
        const orderId="123" // asumming we hgot this from db
        if(orderId){
            // success 
            resolve(orderId)
        }
    })

    return promise
}

// if the  vcart i s validated to be true , then the promise returns the valid order id

// -------------------------

const Cart=["shoes", "kruts"];
const promiseN = createOrder(cart);
// it will print Promise<pending> 
// coz-> it will take some time to resolve , but once promise is resplved ->
console.log(promiseN)
promiseN.then(function(orderId){
    proceedToPayment(orderId)
})

function createOrder(cart){
    const promise = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            // if cart not valid, reject promise
            const err= new Error('cart not valid')
            reject(err);
        }
        const orderId="123" // asumming we hgot this from db
        if(orderId){
            // success 
            resolve(orderId)
        }
    })
    return promise
}

// WHAT IS THERE WAS SOME ERROR AND WE ARE REJECTING THE PROMISE , HOW WE COULD CATCH THAT ?
// USING .catch
const promise2= createOrder(cart)
// consuming a promise and will try to catch the promise error 
promise2
.then(function(orderId){
    proceedToPaymentToPayment(orderId)
})
.catch(function(err){
    console.log(err)
})

// here we are creating promise
function createOrder(cart){
    const promise = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            // if cart not valid, reject promise
            const err= new Error('cart not valid')
            reject(err);
        }
        const orderId="123" // asumming we hgot this from db
        if(orderId){
            // success 
            resolve(orderId)
        }
    })
    return promise
}

// undestanding the concept 
// asummed that after createOrder we have to invoke proceedPayment
// in promiseChaining whatever is returned from the first , .then become data for next .then and so on..
// at any point of promise chaing , if promise is rejected , then the execiuation will fall back to .catch and others promise wont run

// code for promise chaining
createOrder(cart)
.then(function(orderId){
    console.log("ordercreated")
    return orderId
})
.then(function(orderId){
    //promise chianing
    // 'procced to payment' returns a promise too [make sure]
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    // from above , 'proceed to payemnt ' is returning a promise so we can cosume using .then
    console.log(paymentInfo);
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err)
})

// creating the promise of createOrder [same as above ] , that returns a promise

function createOrder(cart){
    const promise = new Promise(function(resolve, reject){
        // assume below 'validatecart
    })
    /// same as above rest code
}


function proceedToPayment(cart){
    return new Promise(function(resolve, reject){
        // for now
        resolve("payment successful")
    })
}


// WHAT IF WE WANT TO CONTIBUE EXECUTION EVEN IF ANY OF MY PROMISE IS FAILING HOW TO ACHIVE THIS
// -> BY REPLACING THE .catch block  AT SOME LEVEL AFTER WHICH WE ARE NOT CONCERNED WITH FAILURE
// -> THERE COULD BE MULTIPLE .catch TOO

createOrder(cart)
.then(function(orderId){
    //success
    console.log(orderId)
    return orderId
})
.catch(function(err){
    //whatever fails below it , catch wont care 
    // this block is responsible for code block above it 
    console.log(err)
})
.then(function(err){
    //promise chianing
    // make sure that proceed to payemnt returns a promise too
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    // from the above procced to payment , is retrurning a promise , we can consume it using '.then'
    console.log(paymentInfo)
})