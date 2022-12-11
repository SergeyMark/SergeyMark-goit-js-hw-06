const validInput = document.querySelector('#validation-input');
const dataInput = Number(validInput.dataset.length);

validInput.addEventListener('blur', validInputFn);

function validInputFn(event){
    const numberValid = event.currentTarget.value.length;
    if (dataInput === numberValid) {
        validInput.classList.add("valid");
        validInput.classList.remove("invalid")
        console.log(validInput)
    }else{
        validInput.classList.add("invalid");
        validInput.classList.remove("valid");
        console.log(validInput)
    }
};

