"use strict";

const rateBtn = document.querySelectorAll(".rating-box");
const submitButton = document.querySelector(".submit");
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".thanks-page");
const ratingTxt = document.querySelector(".rating-text");

rateBtn.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("active")) {
      box.classList.remove("active");
    } else {
      rateBtn.forEach((otherBox) => {
        otherBox.classList.remove("active");
        box.classList.add("active");
      });
    }
  });
});

submitButton.addEventListener("click", () => {
  let selectedValue = null;
  rateBtn.forEach((box) => {
    if (box.classList.contains("active")) {
      selectedValue = box.dataset.value;
    }
  });
  if (selectedValue !== null) {
    firstPage.classList.add("hidden");
    secondPage.classList.remove("hidden");
    ratingTxt.textContent = `You selected ${selectedValue} out of 5`;
  } else {
    submitButton.classList.add("shake");
  }
});
