function printNum(){
    for(let i = 1 ; i <= 5 ; i++){
        console.log(i);
    }
}

printNum();

function isAdult(){
    let age = 18;
    if(age < 18){
        console.log("not adult");
    }else{
        console.log("Adult");
    }
}

isAdult();

function printPoem(){
    console.log("Twinkle Twinkle ,little star");
    console.log("how I wandor what you are");
    console.log("up above the world so high");
    console.log("like a diamond in the sky !!");
}

printPoem();
console.log("Roll the dice ");
function rollDice(){
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
}

rollDice();

// function with arguments 
console.log("Function with arguments ");
function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

printInfo("Bhagyashree",20);
printInfo("Kartik");

function sum(a,b){
    console.log("Addition : ",a + b);
}

sum(23,45);
sum(1,5);

console.log("Average of 3 nummbers");

function calcAvg(a,b,c){
    let avg = (a + b + c)/3;
    console.log("Average of 3 num :",avg);
}

calcAvg(3,3,3);


console.log("print multiplication table");

function printTable(no){
    // for(let i = no ; i <= no *10 ; i += no){
    //     console.log(i);
    // }

    for(let i = 1 ; i <= 10 ; i++){
        console.log(no * i);
    }
}

printTable(4);

// return keyword - returns the value 
console.log("functions to return sum of 1 to n numbers ");

function returnSum(n){
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
        sum += i;
    }
    return sum;
}

console.log("sum to 1 to 10 number is : ",returnSum(10));
sum = returnSum(10);
console.log(sum);

console.log("concatination of all strings in array");

let strArr = ["Bhagyashree ", "Kartik ", "Ramnath "," Sominath ","Shankar ","Pramila ","Sunita "];

function concatString(arr){

    let strArr = "";
    for(let i = 0 ; i < arr.length ; i++){
        strArr = strArr + arr[i];
    }
    return strArr;
}

let res = concatString(strArr);

console.log(res);


console.log("Scope in JS")
let age = 23 ; //Global scope - access anywhere in the file

function printAge(){

    let age = 10 ; //function scope - only access inside the function

}

{
    let x = 20; // block scope - only access inside the block 
}

//Lexical scope - inner function can access the variable present in outer function but outer function can not access the inner function varaible


function OuterFunc(){
    let x = 10;
    function InnerFunc(){
        let y = 20; 
        console.log(x);
    }
    console.log(y); // wrong 
}


console.log("function expression ")

let calSum = function(a,b){
    return a + b;
}
console.log(calSum(20,20));

let hello = function(){
    console.log("hello");
}
hello();

hello = function(){
    console.log("Namste");
}
hello();

//higher order function

console.log("Higher order function ")

hello = function(){
    console.log("Hello everyone !!");
}

function multiHello(func , count){
    for(let i = 1 ; i <= count ; i++){
        func();
    }
}

multiHello(hello,5);
multiHello(function(){console.log("Namste!!!")},4);

//higher order function that returns function

function ArithmeticOperation(req){
    if(req == "add"){
        return function(a,b){
            console.log("Addition :",a+b);
        }
    }else if(req == "sub"){
        return function(a,b){
            console.log("Subtraction :",a-b);
        }
    }else if(req == "mul"){
        return function(a,b){
            console.log("Multiplication :",a*b);
        }
    }else if(req == "div"){
        return function(a,b){
            console.log("Division :",a/b);
        }
    }else{
        console.log("Invalid request.");
    }
}

let request = "add";

let choice = ArithmeticOperation(request);
choice(10,5);

//Methods - It is used to perform action on the object

const calculator = {
    num : 55,
    add : function(a,b){
        return a + b;
    },
    sub : function(a,b){
        return a - b;
    }
};

console.log(calculator.num);
console.log(calculator.add(2,3));
console.log(calculator.sub(10,5));

//shorthand to use it 

const calc = {
    add(a,b){
        return a + b;
    },
    sub(a,b){
        return a - b;
    }
}

console.log(calc.add(2,3));
console.log(calc.sub(10,5));