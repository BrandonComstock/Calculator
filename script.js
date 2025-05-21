const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const operators = document.querySelector("#operators");


let number1 = "";
let operator = "";
let number2 = "";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}   

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(op, num1, num2) {
    return op(num1, num2);
}

function clear() {
    display.textContent = 0;
    number1 = "";
    operator = "";
    number2 = "";
}


function getResult() {
    operators.forEach(element => {
        element.addEventListener("click", (e) => {

        })
    });
}

function populateDisplay(num) {
    display.textContent = num;
}

numbers.forEach(element => {
    element.addEventListener("click", (e) => {
        number1 += element.textContent;
        populateDisplay(number1)
    })
});
