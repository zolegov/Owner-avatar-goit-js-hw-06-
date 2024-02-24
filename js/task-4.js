const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  const result = {
    email: email.trim(),
    password: password.trim(),
  };
    console.log(result);
    

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  }
  loginForm.reset();
});
