// login.js
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");

  loginBtn.addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData && email === storedData.email && password === storedData.password) {
      localStorage.setItem("loggedIn", "true"); 
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Wrong email or password.");``
    }
  });
});
