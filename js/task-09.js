function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorSpan = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', ()=>{
  const color = getRandomHexColor();
  colorSpan.textContent = color;
  document.body.style.backgroundColor = color;
});