//callback 
// can face callback hell , inversion control

// Function that accepts a callback
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  // Callback function
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  // Using the callback
  greet('Alice', sayGoodbye);
  




// function one(){
//     setTimeout(()=>console.log("one"),1000);
// }

// function two(){
//     setTimeout(()=>console.log("two"),2000);
// }

// function three(){
//     setTimeout(()=>console.log("three"),3000);
// }


// one();
// two();
// three();

//Using callbacks

function one(callback) {
    setTimeout(() => {
        console.log("one");
        if (callback) callback();
    }, 1000);
}

function two(callback) {
    setTimeout(() => {
        console.log("two");
        if (callback) callback();
    }, 2000);
}

function three(callback) {
    setTimeout(() => {
        console.log("three");
        if (callback) callback();
    }, 3000);
}

// Using callbacks to execute in order
one(() => {
    two(() => {
        three();
    });
});


////
function fetchData(callback) {
    console.log('Fetching data...');
    setTimeout(() => {
      const data = { id: 1, name: 'Item 1' };
      console.log('Data fetched');
      callback(data);
    }, 2000); // Simulates a 2-second delay
  }
  
  function handleData(data) {
    console.log('Handling data:', data);
  }
  
  fetchData(handleData);
  


