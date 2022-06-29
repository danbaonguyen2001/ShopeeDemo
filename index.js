//get modal  element
//var modal = document.getElementById("modal");
const clickLogin = document.querySelector(".js-btn-login");
const clickRegister = document.querySelector(".js-btn-register");

const clickCloseLogin = document.querySelector(".js-close-modal-login");
const clickCloseRegister = document.querySelector(".js-close-modal-register");

const clickSwitchToLogin = document.querySelector(".js-btn-switch-to-login");
const clickSwitchToRegister = document.querySelector(
  ".js-btn-switch-to-register"
);

const clickOutSideModal = document.querySelector(".modal");

const modalLogin = document.querySelector(".modal__login");
const modalRegister = document.querySelector(".modal__register");
const modals = document.querySelectorAll(".modal");
const modalBody = document.querySelector(".modal__body");

//Listen for clicks
clickLogin.addEventListener("click", openLogin);
function openLogin() {
  modalLogin.classList.add("open");
}

clickRegister.addEventListener("click", openRegister);
function openRegister() {
  modalRegister.classList.add("open");
}

clickCloseLogin.addEventListener("click", closeModalLogin);
function closeModalLogin() {
  modalLogin.classList.remove("open");
}

clickCloseRegister.addEventListener("click", closeModalRegister);
function closeModalRegister() {
  modalRegister.classList.remove("open");
}

clickSwitchToLogin.addEventListener("click", switchToLogin);
function switchToLogin() {
  modalRegister.classList.remove("open");
  modalLogin.classList.add("open");
}

clickSwitchToRegister.addEventListener("click", switchToRegister);
function switchToRegister() {
  modalLogin.classList.remove("open");
  modalRegister.classList.add("open");
}

clickOutSideModal.addEventListener("click", outSideModal);
function outSideModal() {
  for (const modal of modals) {
    if (modal.classList.contains("open")) modal.classList.remove("open");
    else return;
  }
}

modalBody.addEventListener("click", (event) => {
  event.stopPropagation();
});
