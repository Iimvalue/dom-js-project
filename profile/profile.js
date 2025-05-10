document.getElementById("display-full-name").textContent =
  localStorage.getItem("full-name") || "الاسم الكامل";
document.getElementById("display-username").textContent =
  "@" + (localStorage.getItem("username") || "username");
document.getElementById("display-email").textContent =
  localStorage.getItem("email") || "email@example.com";
