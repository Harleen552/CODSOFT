let result = document.getElementById("result");
let expression = "";

function clearResult() {
    expression = "";
    updateResult();
}

function backspace() {
    expression = expression.slice(0, -1);
    updateResult();
}

function appendToResult(value) {
    expression += value;
    updateResult();
}

function calculateResult() {
    try {
        let answer = eval(expression);
        if (isNaN(answer) || !isFinite(answer)) {
            result.textContent = "Error";
        } else {
            result.textContent = answer;
        }
    } catch (error) {
        result.textContent = "Error";
    }
}

function updateResult() {
    result.textContent = expression;
}
