window.onload = ()=>{
    const signIn = document.getElementById("signin-btn")
    signIn.addEventListener("click",signin)
}



export async function signin(userdata){

    let user ;
    if(!userdata)
    {
        user= {
            user_name : document.getElementById("username").value,
            password :  document.getElementById("password").value
        }
    }

    else{
        user = userdata
    }
    console.log(user);
    const response = await fetch("https://movieto-api.vercel.app/user/login", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(
            user
        )
    })
     
    const status = response.status;
    const data = await response.json();
    
    if(status===200){
        
        const token = data.data.token;
        localStorage.setItem("Token", JSON.stringify(token))

        alert(`message: ${data.message} token: ${token}`)
    }
    else{
        alert(data.message)
    }

}