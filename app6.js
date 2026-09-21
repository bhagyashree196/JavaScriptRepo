const student ={
    name : 'Bhagyashree',
    eng : 93,
    math : 95,
    phy : 97,

    getAvg(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got average marks = ${avg}`);
    }
}
student.getAvg();

console.log("Hello");
console.log("Hello");
try{
    console.log(a);
} catch(err){
    console.log("Error Handling : ",err);
}
console.log("hello1");
console.log("hello2");

//Arrow function

const cube = (n) =>{
    return n*n*n;
}

console.log("Cube is ",cube(3));

const printMsg = () =>{
    console.log("Hello");
}
printMsg();

//Implicit return in Arrow function 

const sum = (a,b) =>(a+b);

console.log("Sum is ",sum(5,5));

// setTimeOut() 

// console.log("Hi There !");

// setTimeout( () => {
//     console.log("Apna College");
// },4000);

// console.log("Welcome to ");

// setInterval() - It runs again after the specified Time uses clearInterval to stop it 

// let id1 = setInterval(() => {
//     console.log("Bhagyashree");
// },2000);

// setTimeout(()=>{
//     clearInterval(id1);
// },10000);

//this keyword with arrow function and normal function 

//When we call normal function using the object then "this value" will be calling object
//When we call arrow function using the object then "this value" will be parent "this value"

const stud ={
    name :"Bhagyashree",
    marks : 95,
    getName : function(){
        console.log(this); // It uses calling object scope which is stud
        console.log(this.name);
    },
    getMarks : () =>{
        console.log(this); // it uses parent w=scope which is Window 
        console.log(this.marks);
    },
    getInfo1 : function(){
        setTimeout(() =>{
            console.log(this);
        },2000);
    },
    getInfo2 : function(){
        setTimeout(function(){
            console.log(this);
        },2000)
    }

};
console.log(stud);
stud.getName();
stud.getMarks();

stud.getInfo1();
stud.getInfo2();