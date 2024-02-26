function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsInput = document.querySelector(".controls-input");
const createBtn = document.querySelector(".create-btn");
const destroyBtn = document.querySelector(".destroy-btn");
const boxes = document.querySelector("#boxes");

function createBoxes() {
  destroyBoxes();
  const inputNumber = Number(controlsInput.value);

  if (inputNumber > 0 && inputNumber <= 100) {
    for (let i = 0; i < inputNumber; i++) {
      const newDiv = document.createElement("div");
      newDiv.style.width = 30 + i * 10 + "px";
      newDiv.style.height = 30 + i * 10 + "px";
      newDiv.style.backgroundColor = getRandomHexColor();
      boxes.append(newDiv);
    }
  }
  controlsInput.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
