const userInput = document.querySelector('#input-number'); //透過 const 可以宣告常數
const addBtn = document.querySelector('#btn-add'); //querySelector:根據傳入的值來對應到指定的元素
const subtract = document.querySelector('#btn-subtract'); //querySelector:屬於CSS選擇器，屬於靜態結果
const multiply = document.querySelector('#btn-multiply'); //Selector:選擇器
const divide = document.querySelector('#btn-divide'); //html裡的id要加 # 來表示

const currentResultOutput = document.querySelector('#current-result');
const currentCalculationOutput = document.querySelector('#current-calculation');

//console.log('userInput', userInput);
//console.log('addBtn', addBtn);
//console.log('subtract', subtract );
//console.log('multiply', multiply);
//console.log('divide', divide);

//console.log('currentResultOutput', currentResultOutput);
//console.log('currentCalculationOutput', currentCalculationOutput);

const defaultResult = 0; //const宣告常數，在被宣告時就務必要指定給值，不然會產生錯誤。
let currentResult = defaultResult; //let宣告變數

//顯示使用者輸入的數字
function getUserInput() {
    return parseInt(userInput.value); // parseInt:字串轉換成數字
} //一個函數可以有返回值，使用 return 關鍵字來返回值


//顯示operand1 + operand2 and Result

function outputResult(result, text) { //小括號裡面指定這個函式的參數
    currentResultOutput.textContent = result; 
    currentCalculationOutput.textContent = text;
} //一個 function 也可以沒有返回值，省略 return ，預設會返回 undefined

// operand1 + operand2  
function add() {
    const operand1 = currentResult; // currentResult :最初定義常數值為0, ...
    const operand2 = getUserInput(); // getUserInput() :輸入的數字
    currentResult = operand1 + operand2;
    console.log(`${operand1} + ${operand2} = ${currentResult}` ); //使用反引號(``)和${}，可以將變數包在整句字串內。
    const calcText = `${operand1} + ${operand2}`; //顯示於Result:
    outputResult(currentResult, calcText); //呼叫函式
}

// operand1 - operand2  
function sub() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 - operand2;
    console.log(`${operand1} - ${operand2} = ${currentResult}` );
    const calcText = `${operand1} - ${operand2}`;
    outputResult(currentResult, calcText);
}

// operand1 * operand2
function mult() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 * operand2;
    console.log(`${operand1} * ${operand2} = ${currentResult}` );
    const calcText = `${operand1} * ${operand2}`;
    outputResult(currentResult, calcText);
}

// operand1 / operand2
function divi() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 / operand2;
    console.log(`${operand1} / ${operand2} = ${currentResult}` );
    const calcText = `${operand1} / ${operand2}`;
    outputResult(currentResult, calcText);
}

addBtn.addEventListener('click', add); //當使用者點擊+時，執行add函式
subtract.addEventListener('click', sub); //當使用者點擊-時，執行sub函式
multiply.addEventListener('click', mult); //當使用者點擊*時，執行mult函式
divide.addEventListener('click', divi); //當使用者點擊/時，執行divi函式

