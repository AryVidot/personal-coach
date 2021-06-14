"use strict";
// Nav Toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navItem = document.querySelectorAll(".nav__item");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  // nav.classList.toggle("nav--toggled");
});
navItem.addEventListener("click", () => {
  nav.classList.remove("nav--visible");
  // nav.classList.remove("nav--toggled");
});

// MODAL
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");

// const openModal = function () {
//   // console.log('Button clicked');
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener("click", openModal);
// }
// btnCloseModal.addEventListener("click", closeModal);

// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
//   // console.log('Escape key was pressed');
// });
