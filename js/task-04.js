const value = document.querySelector('#value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

value.addEventListener('click', ()=>{
    value.textContent = "0";
});

decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = counterValue;
    console.log(value);
}); 

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
    console.log(value);
});