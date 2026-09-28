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

//spread - Expands an iterable into multiple values 

console.log(...nums);
console.log(Math.min(...nums));

//spread on literals 

nums =[1,2,3,4,5,6];
newArr = [...nums];

console.log(newArr);

console.log(..."Hello");

let odd = [2,4,6,8,10];
even = [1,3,5,7,9];

nums = [...odd , ...even];
console.log(nums);

//spread on object literals 

const data = {
    email : "abc@gmail.com",
    password : "abc@123"
};

const dataCopy = {...data, id : 123};

console.log(dataCopy);

// array into objects 

const obj = {...nums};
console.log(obj);

//Rest - takes indefinte values and bundle them in array 

function sum(...args){
    return args.reduce((sum,el) => sum + el);
}
console.log(sum(1,2,3,4));

// by default arguments are stored in "arguments" collection array function does not work on this

function Print(){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
Print(1,2,3);

//Destructuring of array- stores values of array into variable

let names = ["Kartik","Vishal","Yash","Jay","Suraj"];

let [winner , runnerup ,...others] = names;
console.log(names);
console.log(winner);
console.log(runnerup);
console.log(others);

//Destructuring of object 

const student ={
    name : "Kartik",
    age : 20,
    subjects : ["Math","DBMS","Java"],
    username : "kartik@123",
    password : "1234"
};

let {username : user , password : secrete, city = "Pune"} = student;

console.log(user);
console.log(secrete);
console.log(city);

//Practice Qs

nums = [1,2,3,4,5];
const square = nums.map((num) => (num * num));
console.log(square);

sum = square.reduce((add , el) => add + el , 0);

let avg = sum / nums.length;
console.log("Average : ",avg);



//Practice Qs
res = nums.map((num) => num + 5);
console.log("Result : ",res);


//Practice Qs
strArr =["alia","bob","yash"];
res = strArr.map((str) => str.toUpperCase());
console.log("String : ", res);

//Practice Qs

const doubleAndReturnArgs = (arr,...args) =>(
    [...arr , args.map((num) => num * 2)]
);

console.log(doubleAndReturnArgs([1,2,3],4,5));
console.log(doubleAndReturnArgs([2],3,4));

//Practice Qs 

const mergeObjects =(obj1,obj2) =>{
    return {...obj1,...obj2};
};
const obj1 = {a : 10 , b : 20};
const obj2 = {c : 30 , d : 40};
console.log(mergeObjects(obj1,obj2));