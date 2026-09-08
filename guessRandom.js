const max = prompt("Enter max limit :");

const random = Math.floor( Math.random() * max) + 1;

let guess = prompt("Guess the number : ");

while(true){

    if(guess == "quit"){
        console.log("You QUIT !!");
        break;
    }

    if(guess == random){
        console.log(`Congraculations you guess the correct the number is ${random} !!`);
        break;

    } else if(guess > random){
        guess = prompt("hint : number is smaller .Try again :");
    }else{
         guess = prompt("hint : number is greater .Try again :");
    }
}