//singin.js
document.addEventListener("DOMContentLoaded", function () {
  const signupBtn = document.getElementById("signup-btn");

  signupBtn.addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email && password) {
      const userData = {
        email,
        password,
        rentals: []
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Account created!");
      window.location.href = "login.html";
    } else {
      alert("Please fill in both fields.");
    }
  });
});
