const form = document.querySelector("#validation")
const show = document.querySelector("#message")
const inputP = document.querySelector("#userPass")
const confirmPass = document.querySelector("#confirmPass")
const inputU = document.querySelector("#username")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const mail = inputU.value;
  const password = inputP.value;
  const confirm = confirmPass.value;

  const minLength = /.{8,}/;
  const upperCase = /[A-Z]/;
  const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  localStorage.setItem("savedEmail", mail);
  localStorage.setItem("savedPassword", password);

  if (mail === "") {
    show.style.color = "red";
    show.textContent = "Enter your email";
  }
  else if (!email.test(mail)) {
    show.style.color = "red";
    show.textContent = "Invalid! Enter example@gmail.com";
  }
  else if (password === "") {
    show.style.color = "red";
    show.textContent = "Password must be entered..";
  }
  else if (!minLength.test(password)) {
    show.style.color = "red";
    show.textContent = "Invalid! Minimum length 8 letters";
  }
  else if (!upperCase.test(password)) {
    show.style.color = "red";
    show.textContent = "Invalid! One must be uppercase";
  }
  else if (password !== confirm) {
    show.style.color = "red";
    show.textContent = "Passwords do not match!";
  }
  else {
    show.style.color = "green";
    show.textContent = "Registered successfully";

    setTimeout(() => {
      window.location.href = "checkform23.html";
    }, 800);           //2000 bhaneko time delay garney value ho in miliseconds 1000 ms = 1s

    // Proceed with form logic
  }
})



const togglePassword = document.getElementById('togglePassword');
const toggleEye = document.getElementById('toggleEye');
const passwordField = document.getElementById('userPass');
const passwordCheck = document.getElementById('confirmPass');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordField.getAttribute('type') === 'password';
  passwordField.setAttribute('type', isPassword ? 'text' : 'password');

  // Toggle icon style
  togglePassword.innerHTML = isPassword
    ? '<i class="fa-regular fa-eye-slash"></i>'
    : '<i class="fa-regular fa-eye"></i>';
});

toggleEye.addEventListener('click', () => {
  const issPassword = passwordCheck.getAttribute('type') === 'password';
  passwordCheck.setAttribute('type', issPassword ? 'text' : 'password');

  // Toggle icon style
  toggleEye.innerHTML = issPassword
    ? '<i class="fa-regular fa-eye-slash"></i>'
    : '<i class="fa-regular fa-eye"></i>';
});
