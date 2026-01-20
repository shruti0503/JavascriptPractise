const arr=[5,1,3,2,6];
function double(x){
    return x*2;
}
const doubleArr=arr.map(double);
console.log(doubleArr);

//filter
const arr1=[]

//reduce: Takes all the values of array and gives a single ouput of it. 
// It reduces the array to give a single output.
// sum of array non functional programming way
const array=[5,1,3,2,6]
function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return 
}
//using reduce3
const sumOfElememnt= arr.reduce(function(accumulator, current){
    accumulator=accumulator+current;
    return accumulator;
},0)
console.log(sumOfElememnt)

//find max inside array :using reduce
const output=arr.reduce((max, current)=>{
    if(current>max){
        max=current;
    }
    return max;
},0);
console.log(ouptut);

// TRICKY MAP
const users=[
    {fname:"alo", lastName:"raj", age:"34"},
    {fname:"alo", lastName:"raj", age:"34"},
    {fname:"alo", lastName:"raj", age:"34"},
]
// get array of full name
const fullNameArr=users.map((user)=>user.firstName+ " " + user.lastName);
console.log(fullNameArr);

// get count/report of how many unique people with unique age are there 
const report=users.reduce((acc, curr)=>{
    if(acc[curr.age]){
        acc[curr.age]=++[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
},{})

//firdt name of all the people whole age is less than 30
const ouptut=users.filter((user)=>user.age<30).map(user=>user.firstName);
console.log(output);
const newOutput=users.reduce((acc,curr)=>{
    if(curr.age<30){
        acc.push(curr.firstName)
    }
    return acc;
},[])





