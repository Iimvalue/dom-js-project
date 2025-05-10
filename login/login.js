let accountName = document.getElementById("account-name");
let loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", () => {
  localStorage.setItem("account-name", accountName.value);
});

// document.getElementById("loginForm").addEventListener("submit",() =>{

//   // يشغّل تحقق HTML5 المدمج
//   if (this.checkValidity()) {
//     // إذا النجاح → إعادة توجيه
//     window.location.href = "../index.html";
//   } else {
//     // إذا هناك أخطاء، يظهر رسائل الخطأ المُخصصة
//     this.reportValidity();
//   }
// });

// localStorage.setItem
