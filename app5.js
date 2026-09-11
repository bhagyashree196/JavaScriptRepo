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


//Write a JavaScript function that returns array elements larger than a number.

let arr = [35,43,18,12,67,23,56]; 
num = 50;

function largerThanNumber(arr,no){
    let result = [];
    let count = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > no){
            result[count] = arr[i];
            count++;
        }
    }
    return result;
}

console.log("Returns array elements larger than number");
let result = largerThanNumber(arr,num);
console.log("Numbers greater than ",num ,"are ",result);

//unique characters from string 

console.log("Unique characters from string");

let str = "abcdabcdefgggh";

function uniqueChar(str){
    let characters ="";
    for(let i = 0 ; i < str.length ; i++){
        let curr = str[i];
        if(characters.indexOf(curr) == -1){
            characters += curr;
        }
    }
    return characters;
}

result = uniqueChar(str);
console.log("unique characters from string is : ",result);


//longest country name 

console.log("Display longest country name");

let country = ["Australia","Germany","United States of America"];

function longestCountryName(country){
    let ansIdx = 0;
    for(let i = 0 ; i < country.length ; i++){
        let ansLen = country[ansIdx].length; 
        if(country[i].length > ansLen){
            ansIdx = i
        }
    }
    return country[ansIdx];
}

result = longestCountryName(country);
console.log("Longest country name : ",result);


//count number of vowels 

console.log("Count the number of vowels");
str = "apnacollege";
function countVowels(str){
    let count = 0;
    for(let i = 0 ; i < str.length ; i++){
        if(
            (str[i] == 'a') || 
            (str[i] == 'e') ||
            (str[i] == 'i') ||
            (str[i] == 'o') ||
            (str[i] == 'u')
        ){
            count++;
        }
    }
    return count;
}

result = countVowels(str);
console.log("count of vowels : ",result);

//genrate random number within range 

function randomNum(start,end){
    let diff = start - end;
    let random = Math.floor(Math.random() * diff) + end;
    console.log("Random number : ",random);
}
randomNum(200,500);