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


