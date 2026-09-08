let todo = [];

let req = prompt("please enter your request");

while(true){

    if(req == "quit"){
        console.log("quiting app..");
        break;
    }

    if(req == "list"){
        console.log("***** TASK *****");
        for(let i = 0 ; i <todo.length ; i++){
            console.log(i,todo[i]);
        }
        console.log("=================");

    }else if(req == "add"){

        let task = prompt("Enter a task to add :");
        todo.push(task);
        console.log("task added successfully");

    }else if(req == "delete"){

        let idx = prompt("Enter a task index to delete :");
        todo.splice(idx,1);
        console.log("task deleted successfully");
    }else{
        
        console.log("wrong request..");
    }

    req = prompt("please enter your request");    
}