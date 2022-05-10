//let displayValue = 0;
const buttonsArray = ['+','-','*','/'];
let previousOperand = "";
let currentOperand = "";
let operator = "";

function clear(){
    disp.textContent = "";
    previousOperand = "";
    currentOperand = "";
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
    if(b == 0)
    {
        return "Division by zero. =(";
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
        break;

    }
    if(result != "")
    {
        console.log(result);
        disp.textContent = result;
        previousOperand = result;
        currentOperand = "";
        operator = "";
        return result;
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
        disp.textContent += btn.textContent;
        previousOperand = Number(disp.textContent);
        console.log(previousOperand);
    }
    else 
    {
        disp.textContent = disp.textContent.replace(operator,"");
        disp.textContent += btn.textContent;
        currentOperand = Number(disp.textContent); 
        console.log(currentOperand);        
    }
}));

opeButtons.forEach( btn => btn.addEventListener('click',() => {
    disp.textContent = btn.textContent;
    operator = btn.textContent;
    console.log(operator);
}));


aclButton.addEventListener('click', () =>  clear() );

equButton.addEventListener('click', () => {
    if(currentOperand && previousOperand)
    {
        evaluate(operator,previousOperand,currentOperand); 
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

