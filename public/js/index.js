// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

//password hide code
function togglePassword() {
  const password = document.getElementById("password");
  const icon = document.getElementById("eyeIcon");

  if (password.type === "password") {
    password.type = "text";
    icon.classList.remove("bi-eye");
    icon.classList.add("bi-eye-slash");
  } else {
    password.type = "password";
    icon.classList.remove("bi-eye-slash");
    icon.classList.add("bi-eye");
  }
}

// alert automatically desappear

setInterval(() => {
  const alert = document.getElementById("autoAlert");
  if (alert) {
    const bsAlert = new bootstrap.Alert(alert);
    bsAlert.close();
  }
}, 4000);

//scroll filter
function scrollFilters(value) {
  document
    .getElementById("filtersScroll")
    .scrollBy({ left: value, behavior: "smooth" });
}

//tax show listing page
let taxSwitch = document.getElementById("switchCheckReverse");
taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }
});
