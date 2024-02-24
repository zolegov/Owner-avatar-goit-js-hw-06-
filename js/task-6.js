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
  let widthDiv = 20;
  let heightDiv = 20;
   
  if (controlsInput.value > 0 && controlsInput.value <= 100) {
    for (let i = 0; i < controlsInput.value; i++) {
      const newDiv = document.createElement("div");
      newDiv.style.width = widthDiv + 10 + "px";
      widthDiv +=10;
      newDiv.style.height = heightDiv + 10 + "px";
      heightDiv += 10;
      newDiv.style.backgroundColor = getRandomHexColor();
      boxes.append(newDiv);
    }
    const firstChild = boxes.firstChild;
    firstChild.classList.add("wh");
  }
  controlsInput.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
