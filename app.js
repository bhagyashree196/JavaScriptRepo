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



