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

