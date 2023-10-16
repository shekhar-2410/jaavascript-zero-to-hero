"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosed = document.querySelector(".close-modal");
const btnOpenModal = document.getElementsByClassName("show-modal");
console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
const modalClose = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnClosed.addEventListener("click", modalClose);
overlay.addEventListener("click", modalClose);
