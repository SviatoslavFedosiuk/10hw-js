const count = document.querySelector(".con");
const gameBoxes = document.querySelectorAll(".game-box");

let number = 0;
let activeIndex = 0;

const intervalId = setInterval(() => {
  gameBoxes.forEach(el => el.classList.remove("is-active"));

  activeIndex = Math.floor(Math.random() * gameBoxes.length);

  gameBoxes[activeIndex].classList.add("is-active");
}, 1000);

gameBoxes.forEach(el => {
  el.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("is-active")) {
      number += 1;
      count.textContent = number;
    }
  });
});

setTimeout(() => {
  count.textContent = 0;
  number = 0;

  gameBoxes.forEach(el => el.classList.remove("is-active"));

  clearInterval(intervalId);

  console.log("stop");
}, 10000);