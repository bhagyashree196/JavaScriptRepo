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