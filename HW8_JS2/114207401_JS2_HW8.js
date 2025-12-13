
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate() {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const operatorElement = document.getElementById('operator');
    const resultDisplay = document.getElementById('result-output');
    const num1 = parseFloat(num1Element.value);
    const num2 = parseFloat(num2Element.value);
    const operator = operatorElement.value;
    
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.value = "Enter valid numbers in both fields";
        return; 
    }

    if (operator === '/' && num2 === 0) {
        resultDisplay.value = "Cannot divide by zero";
        return; 
    }

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            resultDisplay.value = "Error: Invalid operation.";
            return;
    }
    
    if (!isNaN(result)) {
        resultDisplay.value = result.toFixed(2);
    } else {
        resultDisplay.value = "Error: Calculation failed.";
    }
}