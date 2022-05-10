let displayValue = 0;
const buttonsArray = ['+','-','*','/'];
let previousOperand = 0;
let currentOperand = 0;
let operator = "";

function clear(){
    disp.textContent = "";
    previousOperand = 0;
    currentOperand = 0;
    operator = "";    
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
const opeButtons = document.querySelectorAll('.opeBtn');
const equButton = document.querySelector('.equBtn');
const aclButton = document.querySelector('.aclBtn');


numButtons.forEach( btn => btn.addEventListener('click',() => {
    if(operator == "")
    {
        disp.textContent += btn.textContent;
        previousOperand = Number(disp.textContent);
        console.log(previousOperand);
    }
    else 
    {
        disp.textContent = disp.textContent.replace(operator,"");
        disp.textContent += btn.textContent;
        currentOperand = Number(disp.textContent);
         
    }
}));

opeButtons.forEach( btn => btn.addEventListener('click',() => {
    disp.textContent = btn.textContent;
    operator = btn.textContent;
}));

// equButton.addEventListener('click', () => {
//     if(currentOperand && previousOperand)
//         disp.textContent = currentOperand; 
// });

aclButton.addEventListener('click', () =>  clear() );

// window.addEventListener('keydown',(e) => {
//     if(buttonsArray.includes(e.key) || Number(e.key))
//     {
//         while (!buttonsArray.includes(e.key))
//         {
//             disp.textContent += e.key;
//             console.log(opeButtons);
//         }
//         previousOperand = Number(disp.textContent);
//         console.log(previousOperand);
//     }
// });

