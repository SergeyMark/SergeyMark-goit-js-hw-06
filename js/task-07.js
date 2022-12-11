const inputSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

inputSize.addEventListener('input', inputSizeRage);

function inputSizeRage(event){
    let inputRage = event.currentTarget.value;
    textSize.style.fontSize = `${inputRage}px`;
}