import { signin } from "./signin";


// sign up Functionality

async function signup(){

    const userdata = {
        name:document.getElementById("name").value,
        username : document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }

    const response = await fetch("https://movieto-api.vercel.app/user/signup", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(
            {
                user_name:userdata.username,
                full_name:userdata.name,
                email:userdata.email,
                password:userdata.password
            }
        )
    })
     console.log("response");
     const data = await response.json()
     console.log(data.message);
     
    if(response.status===201){
        alert(data.message)
       await signin({
                user_name:userdata.username,
                password:userdata.password
        })

        window.location.href = "./index.html"
        
    }
    else{
        alert(data.message)
    }




}


window.onload = ()=>{
    const signupBtn = document.querySelector("#signup-btn")
    signupBtn.addEventListener("click",signup)
}


