const name = document.body.querySelector("#name");
const dMessage = document.body.querySelector("#d");

const number = document.body.querySelector("#number");
const pMessage = document.body.querySelector("#p");

const month = document.body.querySelector("#m");
const year = document.body.querySelector("#y");

const display = document.body.querySelector(".display");
const cDisplay = document.body.querySelector(".cdisplay");

const cvc = document.body.querySelector("#g");

const submit = document.body.querySelector("#submit");

const contiune = document.body.querySelector("#det");
const complete = document.body.querySelector("#complete")

submit.addEventListener("click", () => {
    // if (name.value === ""){
    //     dMessage.textContent = `Input box cannot be empty`;
    //     dMessage.style.color = "hsl(0, 100%, 66%)";
    //     name.style.border = `1px solid hsl(0, 100%, 66%)`
    // }

    // if (number.value === ""){
    //     pMessage.textContent = `Wrong format, number only`;
    //     pMessage.style.color = "hsl(0, 100%, 66%)";
    //     number.style.border = `1px solid hsl(0, 100%, 66%)`
    // }

    // if (month.value === ""){
    //     display.textContent = `Can't be blank`;
    //     display.style.color = "hsl(0, 100%, 66%)";
    //     month.style.border = `1px solid hsl(0, 100%, 66%)`
    // }

    // if (year.value === ""){
    //     display.textContent = `Can't be blank`;
    //     display.style.color = "hsl(0, 100%, 66%)";
    //     year.style.border = `1px solid hsl(0, 100%, 66%)`
    // }
    
    // if (cvc.value === ""){
    //     cDisplay.textContent = `Can't be blank`;
    //     cDisplay.style.color = "hsl(0, 100%, 66%)";
    //     cvc.style.border = `1px solid hsl(0, 100%, 66%)`
    // }

    // else {
    //     display.textContent = ``;
    //     pMessage.textContent = ``;
    //     dMessage.textContent = ``;
    //     contiune.classList = "disp"
    //     complete.classList = ``
    // }

    contiune.classList = "disp"
    complete.classList = ``

    

})

