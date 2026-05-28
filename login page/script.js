const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    const message = document.getElementById("message");

    if(email === ""){
        message.innerText = "Email is required";
        return;
    }

    if(!email.includes("@")){
        message.innerText = "Enter valid email";
        return;
    }

    if(password === ""){
        message.innerText = "Password is required";
        return;
    }

    if(password.length < 6){
        message.innerText = "Password must be 6 characters";
        return;
    }

    message.style.color = "green";
    message.innerText = "Login Successful";

});