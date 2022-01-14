/* This file is to prevent having two numbers in the same box */

const codes = document.querySelectorAll(".code");

/* Line 7 makes sure the focus stays on the first element when opening the page */

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx + 1].focus();
    }
  });
});
