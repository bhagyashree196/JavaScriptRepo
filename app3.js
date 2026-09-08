for(let i = 1 ; i <= 5 ; i++){
    console.log(i);
}

console.log("backwords");

for(let j = 10 ; j >= 1 ; j--){
    console.log(j);
}

console.log("Odd numbers");
for(let odd = 1 ; odd <= 15 ; odd += 2){
    console.log(odd);
}

console.log("backwords");
for(let oddR = 19 ; oddR >= 1 ; oddR -= 2){
    console.log(oddR);
}

console.log("Even numbers");
for(let even = 2 ; even <= 10 ; even += 2){
    console.log(even);
}

console.log("backwords");
for(let even = 10 ; even >= 1 ; even -= 2){
    console.log(even);
}

//Multiplication table 
console.log("Multiplication table : ")
let n = prompt("Enter a number :");
n = parseInt(n);

for(let i = n ; i <= n * 10 ; i += n){
    console.log(i);
}

// nested loop 

for(let i = 1 ; i <= 3 ; i++){
    console.log(`outer loop ${i}`);
    for(let j = 1 ; j <= 3 ; j++){
        console.log(j);
    }
}

//while loop 

let i = 1;
console.log("While loop");
while(i <= 5){
    console.log(i);
    i++;
}

console.log("While loop reverse");

i = 5;
while(i >= 0){
    console.log(i);
    i--;
}

//break keyword

i = 1;
console.log("break keyowrd");
while(i<=5){
    if(i == 3){
        break;
    }
    console.log(i);
    i++;
}
console.log("break keyword used");

// for loop with array

let fruits = ["Mango","Apple","Orange","Banana","Litchi"];

for(let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
}

let student = [[101,"Bhagyashree"],[102,"Nikita"],[103,"Shreya"],[104,"Janhavi"],[105,"Shravani"]];
for(let i = 0 ; i < student.length ; i++){
    console.log(`Student info ${i+1}`);
    for(let j = 0 ; j < student[i].length ; j++){
        console.log(student[i][j]);
    }
}

// for of loop 
console.log("for of loop")
for(fruit of fruits){
    console.log(fruit);
}

//nested for of loop

for(stud of student){
    // console.log(stud);
    for(one of stud){
        console.log(one);
    }
}


arr=[1,2,3,4,5,6,2,3];
let num=2;

for(let i = 0 ; i <arr.length ; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
console.log(arr);

let no = 2152;

let copy = no;
let count = 0;
while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);


let number = 0;
let fact = 1;

for(let i = 1 ; i <= number ; i++){
    fact = fact * i;
}
console.log(`Factorial of ${number} is ${fact}`);

let numArr = [34,45,67,12,89];
let large = numArr[0];

for(let i = 0 ; i < numArr.length ; i++){
    if(large < numArr[i]){
        large = numArr[i];
    }
}
console.log("large number from array is ", large);
