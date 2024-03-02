// creating our own promise 
const cart=["shoes", "kurta"];
// creating order with an api -> returns orderis => proceed to payemnt
const promise=createOrder(cart); // return order id after creatung order
// expectation-> going to return a promise

promise.then(function(orderId){
    proceedToPayment(orderId);

})
// ----> now lets see how order id is created 
