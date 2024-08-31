import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const articleSwiper = new Swiper(".articleSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction",
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 48,
    },
  },
});

const hotsSwiper = new Swiper(".hotsSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

console.log("Hello world!");
