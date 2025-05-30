const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const operators = document.querySelectorAll(".operator");

const  values = {
    number1: "",
    operator: "",
    number2: "",
    switch: true
}


function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
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

function operate(opString, num1, num2) {
    // since opString is a string it must use the window object to refer to the actual function
    let op = window[opString]
 
    return op(num1, num2);
}

function clear() {
    display.textContent = 0;
    values.number1 = "";
    values.operator = "";
    values.number2 = "";
}


function equals(opString, num1, num2) {
    if (num1 === "" || num2 === "") {
        display.textContent = "Error";
    } else {
        let result = operate(opString, num1, num2)
        //round to 2 decimal places
        result = Math.round(result * 100) / 100;

        if (result === Infinity) {
            result = "cant divide by zero";
        }

        display.textContent = result;
        values.number1 = result;
        values.number2 = "";
    }
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

function toggle() {
    if (values.switch) {
        values.switch = false;
    } else {
        values.switch = true;
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
        if (values.number2 === "") {
            display.textContent = element.textContent;
        } else {
            populateDisplay(element.textContent);
        }
        if (values.switch) {
            values.number1 += element.textContent;
            display.textContent = values.number1
        } else {
            values.number2 += element.textContent;
            display.textContent = values.number2;
        }
    })
});



operators.forEach(element => {
    element.addEventListener("click", (e) => {
        let temp = values.operator;
        if (element.id !== "equals") {
            values.operator = element.id
        }
        if (element.id === "clear") {
            clear();
        } else {
            if (temp.length === 0) {
                console.log(values.operator);
                // populateDisplay(` ${element.textContent} `);
                toggle();
            }
           
            if (element.id === "equals") {
                equals(values.operator, values.number1, values.number2);
            }
        }
        
    })
});