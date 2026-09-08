// const favMovie = "Nagin";

// let guess = prompt("Enter my favorite movie :");

// while((guess != favMovie) && (guess != "quit")){
//     guess = prompt("Wrong guess . please enter again :");
// }

// if(guess == favMovie){
//     console.log("Congrates !!")
// }else{
//     console.log("you quit.")
// }

const favMovie = "Nagin";

let guess = prompt("Enter my favorite movie :");

while(guess != favMovie){
    if(guess == "quit"){
        console.log("you quit.")
        break;
    }
    guess = prompt("Wrong guess . please enter again :");
}

if(guess == favMovie){
    console.log("Congrates !!")
}