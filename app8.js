console.dir(document);

console.dir(document.body.children[0]);

document.body.children[0].innerText = "Hello World";


document.getElementById("mainImg").src = "assets/creation_1.png";

console.dir(document.getElementById("description").id);

console.dir(document.getElementById("description").innerHTML);

let images = document.getElementsByClassName("oldImg");

for(let i = 0 ; i < images.length ; i++){
    images[i].src = "assets/spiderman_img.png";
    console.log(`the image of ${i} is changed.`);
}

console.dir(document.getElementsByTagName("p"));

document.getElementsByTagName("p")[1].innerText = "Bhagyashree Sable";
