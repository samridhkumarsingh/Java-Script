// const form = document.getElementById("studentForm");

// form.addEventListener("submit", function(event){

//     event.preventDefault();

//     const name = document.getElementById("name").value;

//     const email = document.getElementById("email").value;

//     const password = document.getElementById("password").value;

//     const message = document.getElementById("message");

//     if(name === "" || email === "" || password === ""){
//         message.innerText = "All fields are required";
//     }
//     else{
//         message.style.color = "green";
//         message.innerText = "Form Submitted Successfully";
//     }

// });



const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    const message = document.getElementById("message");

    if(name === ""){
        message.innerText = "Name is required";
        return;
    }

    if(!email.includes("@")){
        message.innerText = "Invalid Email";
        return;
    }

    if(password.length < 6){
        message.innerText = "Password must be 6 characters";
        return;
    }

    message.style.color = "green";
    message.innerText = "Validation Successful";

});