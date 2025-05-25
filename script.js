const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const operators = document.querySelectorAll(".operator");

const  values = {
    number1: "",
    operator: "",
    number2: "",
}


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
    values.number1 = "";
    values.operator = "";
    values.number2 = "";
}


/* 
loop over each number
    make each time it is clicked update the display, 
    and store value in the number1 variable
loop over each operator
    make it so when one is clicked, store what is clicked as the operation
    after operator button is clicked, make number2 begin to store the value of number buttons clicked
once equals button is clicked, perform operate function on all variables and update display
*/

let numberToBeStored = values.number1;


function toggle() {
    if (numberToBeStored === values.number1) {
        numberToBeStore = values.number2;
    } else {
        numberToBeStore = values.number1;
    }
}


function populateDisplay(content) {
    if (display.textContent == 0) {
        display.textContent = "";
    }
    display.textContent += content;
}


numbers.forEach(element => {
    element.addEventListener("click", (e) => {
        populateDisplay(element.textContent);
    })
});



operators.forEach(element => {
    element.addEventListener("click", (e) => {
        if (element.id !== "equals") {
            let operation = element.id
        }
        if (element.id === "clear") {
            clear();
        } else {
            populateDisplay(` ${element.textContent} `);
            toggle();

            if (operation === "equals") {
                populateDisplay(operate(operation, values.number1, values.number2));
            }
        }
        
    })
});