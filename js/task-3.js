const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const nameOutputValue = nameOutput.textContent;

nameInput.addEventListener("input", (event) => {
  if (event.target.value == "") {
    nameOutput.textContent = nameOutputValue;
  } else {
    nameOutput.textContent = event.currentTarget.value.trim();
  }
});

