function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

changeColor.addEventListener('click', () => {
  color.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
});