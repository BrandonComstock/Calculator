const numbers = document.querySelector("#numbers");

for (let i = 0; i <= 9; i++) {
    const number = document.createElement("button");
    number.textContent = i;
    number.id = i;
    number.classList = "number";
    numbers.appendChild(number);
}





let number1 = 0;
let operator = "";
let number2 = 0;

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