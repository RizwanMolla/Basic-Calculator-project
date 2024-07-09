
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === 'Error' || display.value === 'Infinity') {
        display.value = '';
    }
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
        if (display.value === 'Infinity') {
            throw new Error('Infinity');
        }
    } catch (e) {
        display.value = 'Error';
    }
}

function convertToPercentage() {
    const display = document.getElementById('display');
    try {
        display.value = (parseFloat(display.value) / 100).toString();
    } catch (e) {
        display.value = 'Error';
    }
}