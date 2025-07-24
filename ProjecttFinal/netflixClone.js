const click = document.querySelector("#login")
const signup = document.querySelector("#signup")

click.addEventListener("click",(e)=>{
    e.preventDefault()
   window.location.href = "checkform23.html";
})
signup.addEventListener("click",(e)=>{
    e.preventDefault()
   window.location.href = "signUpForm.html";
})