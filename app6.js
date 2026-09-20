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