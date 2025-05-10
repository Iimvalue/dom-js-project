document.getElementById("registerForm").addEventListener("submit", () => {
  const fullName = document.getElementById("full-name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("full-name", fullName);
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);


  // Simulate a mouse click:
});
