let displayValue = 0

function clear(){
    displayValue = 0;
    return displayValue;
}

function add(a, b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

const disp = document.getElementById('display');

const numButtons = document.querySelectorAll('.numBtn');
numButtons.forEach( btn => btn.addEventListener('click',() => {
    disp.textContent = btn.textContent;
}));

// numButton.addEventListener('click',() => {
//     display.textContent = numButton.textContent;
// });
