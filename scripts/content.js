const COLOR_PICKER_ID = "myColorPicker";

function createColorPicker() {
  const inputElement = document.createElement("input");
  inputElement.type = "color";
  inputElement.style.position = "absolute";
  inputElement.id = COLOR_PICKER_ID;
  inputElement.style.display = `none`;
  inputElement.onclick = (e) => e.stopImmediatePropagation();
  return inputElement;
}

document.body.appendChild(createColorPicker());

function getColorPicker() {
  return document.getElementById(COLOR_PICKER_ID);
}

function showColorPicker(x, y) {
  const colorPicker = getColorPicker();
  colorPicker.style.display = `block`;
  colorPicker.style.left = `${x}px`;
  colorPicker.style.top = `${y}px`;
}

function hideColorPicker() {
  getColorPicker().style.display = `none`;
}

const renderColorPicker = (clickEvent) => {
  showColorPicker(clickEvent.clientX, clickEvent.clientY);
  getColorPicker().onchange = (event) => {
    clickEvent.target.style.backgroundColor = event.target.value;
    hideColorPicker();
  };
};

document.addEventListener("dblclick", (event) => {
  renderColorPicker(event);
});