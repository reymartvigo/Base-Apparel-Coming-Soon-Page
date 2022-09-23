let form = document.getElementById("form");
let email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var emailVal = email.value.trim();
  var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailVal === "") {
    errorFunc(email, "Please provide a valid email");
  } else if (emailVal.match(emailpattern)) {
    errorFunc(email, "Please provide a valid email");
  } else {
    successFunc(email, "");
  }
});

function errorFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  req.className = "error";
  span.className = "error-text";
  if (req !== email) {
    req.value = "";
  } else {
    req.value = "janeappleseed#@email.com";
  }
}

function successFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  req.className = "success";
  span.className = "success-text";
}
