// console.log("hello world");
let a = 10;
let b = 20;
console.log("sum is :" , a+b);

let pencilPrice = 10;
let eraserPrice = 5;

console.log("the total is : ",pencilPrice + eraserPrice ,"Rupees");

//Template literals
//use back tick
console.log(`your pay is ${pencilPrice + eraserPrice} rupees`)

//operators in JS
//Arithmetic operator + , - , * , / , %
let x = 10;
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Unary Operators 

p = 10;
console.log(p++);
console.log(++p);

console.log(p--);
console.log(--p);

//Assignment Operators

q = 10;

console.log(q);

q += 5;
console.log(q);

q -= 5;
console.log(q);

//Comparision operator < , > , <= , >= , == , !=  

let age = 18;

console.log(age >= 18); 

//Comparision for non numbers
//it compares with unicode of characters , numbers and symbol
console.log('a' < 'b');
console.log('A' > 'a');

//conditional statements
console.log("before if statement");
let Age = 12;
if (Age >= 18){
    console.log("You can vote");
    console.log("You can drive");
}else{

    console.log("you cannot drive")
}
console.log("Ater if statement");

let fName = "Bhagyashree";
if(fName == "Bhagyashree"){
    console.log(`welcome ${fName} !!`);
}

// create traffic light signal according to color give instructions 

let colr = "green";

if(colr == "red"){
    console.log("Stop the vehicle");

}else if(colr == "yellow"){
    console.log("slow down the vehicle");

}else if(colr == "green"){
    console.log("Drive the vehicle");

}

let marks =35;

if(marks >90){
    console.log("you got O");
} else if(marks >=80){
    console.log("you got A+");
} else if(marks >=70){
    console.log("you got A");
} else if(marks >=60){
    console.log("you got B+");
}else if(marks >=50){
    console.log("you got B");
}else if(marks >=40){
    console.log("you got C");
}else{
    console.log("you got F");
}


//popcorn price calculate according to size 

let size = "M";

if(size == "XL"){
    console.log("Popcorn price is 250");
} else if(size == "L"){
    console.log("Popcorn price is 200");
} else if(size == "M"){
    console.log("Popcorn price is 100");
} else if(size == "S"){
    console.log("Popcorn price is 50");
} else{
    console.log("Wrong size selected");
}

//Nested IF Statement
let score = 28;

if(score >= 40){
    console.log("Pass");
    if(score >= 80){
        console.log("Grade : O");
    }else{
        console.log("Grade : A");
    }
}else{
    console.log("better luck next time");
}

//Logical operators

let Mark = 60;

if(Mark >= 40 && Mark >= 80){
    console.log("Pass &&");
    console.log("A+");
}

if(Mark >= 40 || Mark >= 80){
    console.log("Pass ||");
    console.log("A+");
}

if(!(Mark < 33)){
    console.log("Pass")
}

//Practice Question 1

let str ="apple";

if(str[0] === 'a' && str.length > 3){
    console.log("it is good string");
}else{
    console.log("it is not good string");
}

// 0,NaN ,""(empty string) ,-0 ,null,undefined are false values

//switch statement

let day = 10;

switch(day){
    case 1 : console.log("Monday");
             break;
    case 2 : console.log("Tuesday");
             break;
    case 3 : console.log("Wednesday");
             break;
    case 4 : console.log("Thursday");
             break;
    case 5 : console.log("Friday");
             break;
    case 6 : console.log("Satursday");
             break;
    case 7 : console.log("Sunday");
             break;
    default : console.log("Invalid choice");                
}

//alert ,prompt and different types of console output like log ,error ,warn

// alert("this is an alert message");

// let FirstNm = prompt("Enter your first name :");
// console.log(`hello ${FirstNm} !!`);
// console.error(`hello ${FirstNm} !!`);
// console.warn(`hello ${FirstNm} !!`);


//Practice question day 2

let num = 100;

if(num % 10 == 0){
    console.log("good");
}else{
    console.log("bad");
}

// let Name = prompt("Enter your Name :");
// age = prompt("Enter your age :");
// alert(`${Name} is ${age} years old`);

let month = 1;

switch(month) {

    case 1 : console.log("January , February , March");
             break;
    case 2 : console.log("April , May , June");
             break;
    case 3 : console.log("July , August , September");
             break;
    case 4 : console.log("October , November , December");
             break;
    default : console.log("Invalid choice");
}


let string = "Appler";

if((string[0] === 'A' || string[0] == 'a') && (string.length > 5)){
    console.log("golden string");
} else{
    console.log("Not golden string");
}


let num1 = 10 , num2 = 20 , num3 = 30;

if(num1 > num2){
    if(num1 > num3){
        console.log(`${num1} is greater`);
    }else{
        console.log(`${num3} is greater`);
    }
}else{
    if(num2 > num3){
        console.log(`${num2} is greater`);
    }else{
        console.log(`${num3} is greater`);
    }
}

let no1 = 35 , no2 = 47852;

if((no1 % 10) === (no2 % 10)){
    console.log("both have same last digit");
}else{
    console.log("both does not have same last digit");
}




