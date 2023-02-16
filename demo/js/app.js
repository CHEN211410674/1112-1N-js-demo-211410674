const userInput = document.querySelector('#input-number');
const addBtn = document.querySelector('#btn-add');
const subtract = document.querySelector('#btn-subtract');
const multiply = document.querySelector('#btn-multiply');
const divide = document.querySelector('#btn-divide');

const currentResultOutput = document.querySelector('#current-result');
const currentCalculationOutput = document.querySelector('#current-calculation');

//console.log('userInput', userInput);
//console.log('addBtn', addBtn);
//console.log('subtract', subtract );
//console.log('multiply', multiply);
//console.log('divide', divide);

//console.log('currentResultOutput', currentResultOutput);
//console.log('currentCalculationOutput', currentCalculationOutput);

const defaultResult = 0;
let currentResult = defaultResult;


function getUserInput() {
    return parseInt(userInput.value);
}

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

// operand1 operator operand2 0 + 5
function add() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 + operand2;
    console.log(`${operand1} + ${operand2} = ${currentResult}` );
    const calcText = `${operand1} + ${operand2}`;
    outputResult(currentResult, calcText);
}


function sub() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 - operand2;
    console.log(`${operand1} - ${operand2} = ${currentResult}` );
    const calcText = `${operand1} - ${operand2}`;
    outputResult(currentResult, calcText);
}



function mult() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 * operand2;
    console.log(`${operand1} * ${operand2} = ${currentResult}` );
    const calcText = `${operand1} * ${operand2}`;
    outputResult(currentResult, calcText);
}

function divi() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 / operand2;
    console.log(`${operand1} / ${operand2} = ${currentResult}` );
    const calcText = `${operand1} / ${operand2}`;
    outputResult(currentResult, calcText);
}




addBtn.addEventListener('click', add);
subtract.addEventListener('click', sub);
multiply.addEventListener('click', mult);
divide.addEventListener('click', divi);

