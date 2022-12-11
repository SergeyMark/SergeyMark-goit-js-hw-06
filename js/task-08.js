const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const{elements:{email, password}} = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("oops need to write in the form");
    } else{
        // console.log(`Email: ${email.value}, Password: ${password.value}`);

        const dataOutput = {
            email: email.value,
            password: password.value,
        }
    }
    event.currentTarget.reset();
}
