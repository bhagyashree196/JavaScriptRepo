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


