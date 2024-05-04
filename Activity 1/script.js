function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var display = document.getElementById('display').value;
    try {
        var result = eval(display);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function changeSign() {
    var display = document.getElementById('display');
    if (display.value !== '') {
        display.value = parseFloat(display.value) * -1;
    }
}

function calculatePercentage() {
    var display = document.getElementById('display');
    if (display.value !== '') {
        display.value = parseFloat(display.value) / 100;
    }
}

function addDecimal() {
    var display = document.getElementById('display');
    if (display.value.indexOf('.') === -1) {
        display.value += '.';
    }
}
