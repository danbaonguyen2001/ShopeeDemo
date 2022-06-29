//get modal  element
//var modal = document.getElementById("modal");
const clickLogin = document.querySelector(".js-btn-login");
const clickRegister = document.querySelector(".js-btn-register");
const clickCloseLogin = document.querySelector(".js-close-modal-login");
const clickCloseRegister = document.querySelector(".js-close-modal-register");

const modalLogin = document.querySelector(".modal__login");
const modalRegister = document.querySelector(".modal__register");

//get close modal element
var closeModal = document.getElementById("close-modal");

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
  alert("Close Login");
  modalLogin.classList.remove("open");
}

clickCloseRegister.addEventListener("click", closeModalRegister);
function closeModalRegister() {
  alert("Close Register");
  modalRegister.classList.remove("open");
}
