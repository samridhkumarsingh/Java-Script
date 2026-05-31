// const addBtn = document.getElementById("addBtn");

// addBtn.addEventListener("click", function(){

//     alert("Button Clicked");

// });

// const addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function(){
//     const task =document.getElementById("taskInput").value;
//     console.log(task);
// });


// const addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function(){
//     const task =document.getElementById("taskInput").value;
//     if(task.trim() === ""){
//     alert("Please enter a task");
//     return;
//     }
//     const li = document.createElement("li");
//     li.innerText = task;
//     document.getElementById("taskList").appendChild(li);
//     document.getElementById("taskInput").value = "";
// });


let tasks =JSON.parse(
    localStorage.getItem("tasks")
) || [];

function createTask(task){
    const li = document.createElement("li");

    li.innerText = task.text;

    // create buttons here
     const completeBtn =document.createElement("button");
    completeBtn.innerText="Complete";
    li.appendChild(completeBtn);
    completeBtn.style.background="blue";
    completeBtn.style.color = "white";
  completeBtn.addEventListener("click", function(){

    task.completed = !task.completed;

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    if(task.completed){

        li.style.textDecoration = "line-through";
        completeBtn.innerText = "Incomplete";

    }else{

        li.style.textDecoration = "none";
        completeBtn.innerText = "Complete";

    }

});
if(task.completed){

    li.style.textDecoration = "line-through";

    completeBtn.innerText = "Incomplete";

}

    const deleteBtn =document.createElement("button");
    deleteBtn.innerText = "Delete";
    li.appendChild(deleteBtn);
    deleteBtn.style.background = "red";
    deleteBtn.style.color = "white";

    deleteBtn.addEventListener("click", function(){

     tasks = tasks.filter(function(t){
        return t !== task;
    });

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
    li.remove();
    });

    document.getElementById("taskList")
    .appendChild(li);
}

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(){
    const taskInput =document.getElementById("taskInput");
    const task = taskInput.value.trim();

     if(task === ""){
        alert("Please enter a task");
        return;
    }

    // tasks.push(task);
    const newTask = {
    text: task,
    completed: false
};



tasks.push(newTask);

localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
);

createTask(newTask);
taskInput.value = "";
   
    // const li = document.createElement("li");
    // li.innerText = task;

    // const completeBtn =document.createElement("button");
    // completeBtn.innerText="Complete";
    // li.appendChild(completeBtn);
    // completeBtn.style.background="blue";
    // completeBtn.style.color = "white";
    // completeBtn.addEventListener("click",function(){
    //     if(li.style.textDecoration === "line-through")
    //     {
    //         li.style.textDecoration="none";
    //         completeBtn.innerText="Complete";
    //     }
    //     else{
    //          li.style.textDecoration="line-through";
    //          completeBtn.innerText="Incomplete";
    //     }
       
    // });


    // const deleteBtn =document.createElement("button");
    // deleteBtn.innerText = "Delete";
    // li.appendChild(deleteBtn);
    // deleteBtn.style.background = "red";
    // deleteBtn.style.color = "white";

    // deleteBtn.addEventListener("click", function(){

    //  tasks = tasks.filter(function(t){
    //     return t !== task;
    // });

    // localStorage.setItem(
    //     "tasks",
    //     JSON.stringify(tasks)
    // );
    // li.remove();
    // });
    
    document.getElementById("taskList").appendChild(li);
});

// localStorage.setItem("name", "Samridh");
// localStorage.setItem("course", "JavaScript");

function displayTasks(){

    const taskList =
    document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task){

       createTask(task);

    });

}

displayTasks();