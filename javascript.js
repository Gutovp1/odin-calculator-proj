const buttonsArray = ['+','-','*','/'];
let equalPressed = false;
let previousOperand = "";
let currentOperand = "";
let operator = "";

function clear(){
    disp.textContent = "";
    previousOperand = "";
    currentOperand = "";
    operator = "";    
}

function add(a, b) { return a+b; }

function subtract(a, b) { return a-b; }

function multiply(a, b) { return a*b; }

function divide(a,b){
    if(b == 0)
    {
        return "";
    }
    return a/b;
}

function evaluate(ope, num1, num2){
    let result;
    result ="";
    switch (ope)
    {
        case("+"): 
            result = add(num1,num2);
        break;
        case("-"): 
            result = subtract(num1,num2);
        break;
        case("*"): 
            result = multiply(num1,num2);
        break;
        case("/"): 
            result = divide(num1,num2);
        break;
        default:
            return "";
        break;

    }
    if(typeof result == "number")
    {
        clear();
        previousOperand = result;
        return previousOperand;
    }
}

const disp = document.getElementById('display');
const numButtons = document.querySelectorAll('.numBtn');
const opeButtons = document.querySelectorAll('.opeBtn');
const equButton = document.querySelector('.equBtn');
const aclButton = document.querySelector('.aclBtn');


numButtons.forEach( btn => btn.addEventListener('click',() => {
    if(operator == "")
    {
        if (equalPressed)
        {
            disp.textContent = btn.textContent;
            equalPressed = false;
        }
        else
        {
            disp.textContent += btn.textContent;
        }
        previousOperand = Number(disp.textContent);
    }
    else 
    {
        disp.textContent = "";//refresh the display to avoid putting the operator in the second operand
        disp.textContent += btn.textContent;
        currentOperand = Number(disp.textContent);    
    }
}));

opeButtons.forEach( btn => btn.addEventListener('click',() => {
    //update the display with the result every time two numbers and an operator are typed  
    if(typeof currentOperand == "number" && typeof previousOperand == "number")
    {
        previousOperand = evaluate(operator, previousOperand, currentOperand);
        operator = btn.textContent;
        disp.textContent = previousOperand;
    }
    else 
    {
        operator = btn.textContent;
        disp.textContent = operator;
    }
}));


aclButton.addEventListener('click', () =>  clear() );

equButton.addEventListener('click', () => {
    if(typeof currentOperand == "number" && typeof previousOperand == "number")
    {
        disp.textContent = evaluate(operator,previousOperand,currentOperand); 
        equalPressed = true;
    }
});


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

