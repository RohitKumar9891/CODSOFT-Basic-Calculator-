let displayValue = "";
let memoryValue = 0;

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").innerText = displayValue;
}

function calculate() {
    try {
        let result = eval(displayValue);
        if (isNaN(result) || !isFinite(result)) {
            throw "Invalid expression";
        }
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

