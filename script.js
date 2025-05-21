const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const operators = document.querySelectorAll(".operator");


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

function equals() {
    
}




function getResult() {
    
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

operators.forEach(element => {
    element.addEventListener("click", (e) => {
        const operation = this[element.id];
        operation();
    })
});