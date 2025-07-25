const form = document.querySelector("#validation")
const show = document.querySelector("#message")
const inputP = document.querySelector("#userPass")
const inputU = document.querySelector("#username")

const forget = document.querySelector("#already")

forget.addEventListener("click",()=>{
  window.location.href = "signUpForm.html"
  show.textContent = "";          // 🧹 Clear any previous messages
  show.style.display = "none";
})


form.addEventListener("submit", (e) => {
  e.preventDefault()
  const mail = inputU.value;
  const password = inputP.value;
  const minLength = /.{8,}/;
  const upperCase = /[A-Z]/;
  const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

  const savedEmail = localStorage.getItem("savedEmail");
  const savedPassword = localStorage.getItem("savedPassword");

  // const correctEmail = "netflix@gmail.com"
  // const correctPassword = "Password"


  if (password === "") {
    show.style.color = "red";
    show.textContent = "Password must be entered..";
  }
  else if (mail === "") {
    show.style.color = "red";
    show.textContent = "Enter your email";
  } 
  else if (password === savedPassword && mail === savedEmail) {
    // window.open("day23SearchFetch.html", "_blank")
    window.location.href = "day23SearchFetch.html"
    // window.location.href = ("https://aarambhagg.github.io/PrimeFlix/")     //sathi ko website uslaii khusi garna laako k
  }
  else if (!minLength.test(password)) {
    show.style.color = "red";
    show.textContent = "Invalid! Minimum length 8 letters";
  } 
  else if (!upperCase.test(password)) {
    show.style.color = "red";
    show.textContent = "Invalid! One must be uppercase";
  } 
  else if (!email.test(mail)) {
    show.style.color = "red";
    show.textContent = "Invalid! Enter Example@gmail.com";
  }
  else {
  }
})



const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('userPass');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordField.getAttribute('type') === 'password';
  passwordField.setAttribute('type', isPassword ? 'text' : 'password');

  // Toggle icon style
  togglePassword.innerHTML = isPassword
    ? '<i class="fa-regular fa-eye-slash"></i>'
    : '<i class="fa-regular fa-eye"></i>';
});
