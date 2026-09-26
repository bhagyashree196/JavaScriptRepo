//functions of array 

let arr = [1,2,3,4,5];

arr.forEach(function(el){
    console.log(el);
});

arr.forEach((el) =>{
    console.log(el);
});

let print = function(el){
    console.log(el);
}

arr.forEach(print);

const students =[{
    name : "Bhagyashree",
    marks : 93.94
},
{
    name : "Kartik",
    marks : 90
},
{
    name : "Vishal",
    marks : 85
}];

students.forEach((stud) =>{
    console.log(stud.name);
});

//map function return the new array as the same size of original array 

let newArr = arr.map((el) =>{
    return (el * el);
});

console.log(newArr);

// filter function is used to return the elements which satisfied the condition 

let even =arr.filter((el) =>{
    return el % 2 != 0; 
});
console.log(even);

//every function returns true if condition is true for elements in array or else false

let evenArr =[2,4,6,7,9];

console.log(evenArr.every((el) => (el % 2 == 0)));

//some function returns true if some conditions are true if all are false it returns false

console.log(evenArr.some((el) =>(el % 2 == 0)));

//reduce() - It reduce the array into single value using callback logic 

let nums = [1,2,3,4,5];
let finalResult = nums.reduce((res,el) =>{
    return res + el;
});
console.log("Reduced Array : ",finalResult);

//find Maximum in array using reduce()

nums =[2,3,1,5,12,9,7,6];

let max = nums.reduce((max,el) =>{
    if(max < el){
        return el;
    } else{
        return max;
    }
});

console.log("Maximum in array : ",max);


//Check all numbers in array are multiple of 10 or not every()

nums =[10,20,30,40];
let res = nums.every((el) =>{
    return el % 10 == 0;
});

console.log("Result : ",res);

nums = [2,3,5,9,7,6];

res = nums.reduce((min,el) =>{
    if(min > el){
        return el;
    } else {
        return min;
    }
});

console.log("Minimum is : ",res);

//default parameters 

function sum(a,b = 2){
    return a + b;
}
console.log(sum(1,3));
console.log(sum(3));
