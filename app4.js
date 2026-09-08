//Object Literals 

const student = {
    name : ["Bhagyashree","Ramnath","Sable"],
    age : 20,
    Marks : 93.94
};

console.log(student);

//Twitter post object 

const post = {
    userName : "@bhagyashree",
    content : "this is my #first Post",
    likes : 200,
    repost : 7,
    tags : ["@kartik","@Sable"]
};

console.log(post);

//get values 

console.log(post['userName']);
console.log(post['content']);
console.log(post.likes);
console.log(post.tags);
console.log(post.tags[0]);

let prop = "repost";

console.log(post[prop]);

//we can make number and reserved words as key and use it but it treated as string key 

const obj ={
    1 : "one",
    true : "TRUE",
    null : "NULL"
};

console.log(obj.null);
console.log(obj.true);
console.log(obj[1]);

//Add and update value 

console.log(student);

student.City = "pune";

student.Marks = "A+";

console.log(student);

// delete the key and value 

delete student.age;

console.log(student);

// object of object 

const classInfo = {
    bhagyashree :{
        grade : "A+",
        city : "pune"
    },

    kartik : {
        grade : "O",
        city : "Kopergaon"
    },
    vishal :{
        grade : "A",
        city : "Waluj"
    }
};

console.log(classInfo);
console.log(classInfo.bhagyashree);
console.log(classInfo.kartik.city);
classInfo.kartik.city = "Mumbai";
console.log(classInfo);

// Array of objects 

const studInfo = [
    {
        name : "Bhagyashree",
        marks : 93.94
    },
    {
        name : "Kartik",
        marks : 90
    },
    {
        name : "Vishal",
        marks : 89
    }
];

console.log(studInfo);
console.log(studInfo[0]);
console.log(studInfo[1]);
console.log(studInfo[2]);
console.log(studInfo[0].name);
studInfo[2].marks = 91;
console.log(studInfo);

//Math Object 

console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(5));
console.log(Math.abs(-6));

console.log(Math.pow(2,4));

console.log(Math.floor(5.999));  // nearest small integer value
console.log(Math.floor(-5.999));

console.log(Math.ceil(5.0001)); // nearest large integer value  
console.log(Math.ceil(-5.789));

console.log(Math.random());  // random value between 0 to 1 but not 1 because it is exclusive and other values are inclusive


// genrate random number between 1 to 10 , 1to 100 and 1 to 5

let random = Math.floor( Math.random() * 10 ) + 1;

console.log(random);

random = Math.floor( Math.random() * 100) + 1;

console.log(random);

random = Math.floor( Math.random() * 5) + 1;

console.log(random);

random = Math.floor( Math.random() * 5) + 21;

console.log(random);

//dice roll

console.log("Dice and roll 1 to 6");
random = Math.floor(Math.random() * 6) + 1;

console.log(random);


//car object

console.log("Car object");

const car ={
    name : "BMW",
    model : "M5",
    color : "Black"
};

console.log(car);
console.log(car.name);
console.log(car["color"]);

// Object question

const person ={
    name : "Kartik",
    city : "Mumbai"
};

console.log(person);

person["city"] = "New York";
console.log(person);

person.country = "United States";

console.log(person);