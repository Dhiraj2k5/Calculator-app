let firstNum = '';
let selectedOperator = '';
let secondNum = '';
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('equals');
const clear = document.getElementById('clear');
const out = document.getElementById('display');
numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        out.textContent += btn.textContent;
    });
});
operators.forEach(btn => {
    btn.addEventListener('click', () => {
        firstNum = out.textContent;
        selectedOperator = btn.textContent;
        out.textContent = '';
    })
})
equal.addEventListener( 'click', () =>{
    secondNum = out.textContent;
    out.textContent = eval(firstNum + selectedOperator + secondNum);
})
clear.addEventListener( 'click', () => {
    out.textContent = '';
    firstNum = '';
    selectedOperator = '';
    secondNum = '';

})