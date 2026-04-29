const boxesRef = document.querySelectorAll(".boxes");
let index = 0


setInterval(() => {
  boxesRef.forEach(el => el.classList.remove("active"));
  boxesRef[index].classList.add("active");
  index++;
  if (index >= boxesRef.length) {
    index = 0;
  }
}, 1000);