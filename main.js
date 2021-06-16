"use strict";
// Nav Toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    // console.log("na");
    nav.classList.toggle("nav--visible");
  });
});

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  // console.log("clicked Toggle");
  // nav.classList.toggle("nav--toggled");
});

// navLink.addEventListener("click", () => {
//   nav.classList.toggle("nav--visible");
//   console.log("clicked");
// });

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
