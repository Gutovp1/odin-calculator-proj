let displayValue = 0
const buttonsArray = ['+','-','*','/'];

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

const opeButtons = document.querySelectorAll('.opeBtn');
opeButtons.forEach( btn => btn.addEventListener('click',() => {
    disp.textContent = btn.textContent;
}));

window.addEventListener('keydown',(e) => {
    //if(buttonsArray.includes(e.key))
    if(buttonsArray.includes(e.key) || Number(e.key))
        disp.textContent = e.key;
    console.log((Number(e.key)));
});

