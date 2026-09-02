//trim() method of string - removes the extra whitespaces form start and end of string

let msg = "        Hello    ";
console.log(msg);
console.log(msg.trim());

//toLowerCase() and toUpperCase() method make the string in complete lowercase and uppercase respectively

let string = "Hello WOrld";

console.log(string.toLowerCase());
console.log(string.toUpperCase());


//indexOf(arguments) - this method returns the index of the substring and character passed to it and returns -1 if not found and it returns index of first occurence

let str1 = "ILoveCoding";

console.log(str1.indexOf("Love")); // 1

console.log(str1.indexOf("z")); // -1

console.log(str1.indexOf("o")); // 1

//Method Chaining 

let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

//slice() - returns the part of string as a new string

console.log(str1.slice(1,5)); //Love

console.log(str1.slice(5)); //Coding

console.log(str1.slice(-4)); //ding  it treat -ve value as string_length - (-ve number)

//replace() - search the sub-string in string and replace it with the value passed as an argument and returns new string

console.log(str1.replace("Love","Do")); //IDoCoding

console.log(str1.replace("o","x")); //ILxveCoding

//repeat() - It repeats the string number of times value passed in the argument 

let fruit = "Mango";

console.log(fruit.repeat(3)); //MangoMangoMango


//practice Qs


msg = "help!";

newMsg = msg.trim().toUpperCase();
console.log(newMsg);

let name = "ApnaCollege";

console.log(name.slice(4,9)); //Colle

console.log(name.indexOf("na")); //2

console.log(name.replace("Apna","Our")); //OurCollege

console.log(name.slice(4).replace("l","t"));


//Array 

let marks = [56,67,89,90];

console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

let mixArr = ["Bhagyashree" , 93.94 , 53];

console.log(mixArr);

//empty array

empArr = [];

//array without name 

console.log([1,2,3,4].length);

console.log(mixArr[0].length); //give length of index 0 string 

console.log(mixArr[0][0]); //give character of index 0 and position 0 

console.log(mixArr[0][1]);

// change value in array 

console.log(marks);

marks[0] = 99;

console.log(marks);

marks[8] = 50;

console.log(marks);

console.log(marks.length);

cars =["bmw","audi","maruti"]
console.log(cars);
console.log(cars.push("Toyota"));

console.log(cars);

console.log(cars.pop());

console.log(cars);

console.log(cars.unshift("Toyota"));

console.log(cars);

console.log(cars.shift());

console.log(cars);

// change below array to - july june march august

let months =["january","july","march","august"];

console.log(months);
console.log(months.shift());
console.log(months.shift());
console.log(months.unshift("june"));
console.log(months.unshift("july"));
console.log(months);

//indexOf() return the index of element and -1 if not present 

console.log(cars);
console.log(cars.indexOf("bmw"));
console.log(cars.indexOf("BMW"));
console.log(cars.indexOf("toyota"));

console.log(cars.includes("bmw"));
console.log(cars.includes("toyota"));

// reverse() method in array  changes are stored in original array

console.log(cars);
console.log(cars.reverse());
console.log("After reverse : ",cars);

//slice() - copies the protion of array 

console.log(cars.slice());
console.log(cars.slice(1));
console.log(cars.slice(1,3));
console.log(cars.slice(-2));

// splice() - replace ,delete and used to add elements in from starting index splice(Start , deletecount, item0,...,itemN); it make changes in original array


console.log(cars.push("Porsche"));
console.log(cars.push("ferrari"));
console.log(cars);

console.log(cars.splice(4));
console.log(cars);
console.log(cars.splice(0,1));
console.log(cars);
console.log(cars.splice(1,0,"Honda","TVS"));
console.log(cars);


