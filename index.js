const display = document.getElementById("display");
var num1 = '';
var num2 = '';
var operator = '';

function opt(key, element) {
    operator = key;
    num2 = num1; 
    num1 = '';
}

function pressNum(num) {
    num1 += num.textContent; // Use textContent to get the button content
    display.innerHTML = num1;
}

function clearBtn(ele) {
    num1 = '';
    num2 = '';
    operator = '';
    display.innerHTML = "0"; // Set the display to "0" as a string
}

function calculate() {
    var a = parseFloat(num1);
    var b = parseFloat(num2);
    var res = 0;

    switch (operator) {
        case '/':
            res = a / b;
            break;

        case '*':
            res = a * b;
            break;

        case '-':
            res = a - b;
            break;

        case '+':
            res = a + b;
            break;
    }

    num1 = res.toString();
    operator = '';
    display.innerHTML = res;
}
