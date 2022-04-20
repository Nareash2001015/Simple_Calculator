var back = document.getElementsByClassName("one")[0];
var clear = document.getElementsByClassName("two")[0];
var percent = document.getElementsByClassName("three")[0];
var division = document.getElementsByClassName("four")[0];

var seven = document.getElementsByClassName("one")[1];
var eight = document.getElementsByClassName("two")[1];
var nine = document.getElementsByClassName("three")[1];
var multiplication = document.getElementsByClassName("four")[1];

var four = document.getElementsByClassName("one")[2];
var five = document.getElementsByClassName("two")[2];
var six = document.getElementsByClassName("three")[2];
var substract = document.getElementsByClassName("four")[2];

var one = document.getElementsByClassName("one")[3];
var two = document.getElementsByClassName("two")[3];
var three = document.getElementsByClassName("three")[3];
var add = document.getElementsByClassName("four")[3];

var zero = document.getElementsByClassName("two")[4];
var equal = document.getElementsByClassName("four")[4];
var space = document.getElementsByClassName("one")[4]

var textPad = document.getElementsByTagName("input")[0];

function textPadAdd1(){ textPad.value = textPad.value + '1'; }
function textPadAdd2(){ textPad.value = textPad.value + '2'; }
function textPadAdd3(){ textPad.value = textPad.value + '3'; }
function textPadAdd4(){ textPad.value = textPad.value + '4'; }
function textPadAdd5(){ textPad.value = textPad.value + '5'; }
function textPadAdd6(){ textPad.value = textPad.value + '6'; }
function textPadAdd7(){ textPad.value = textPad.value + '7'; }
function textPadAdd8(){ textPad.value = textPad.value + '8'; }
function textPadAdd9(){ textPad.value = textPad.value + '9'; }
function textPadAdd0(){ textPad.value = textPad.value + '0'; }

function textPadAddDiv(){ textPad.value = textPad.value + '/'; }
function textPadAddMul(){ textPad.value = textPad.value + '*'; }
function textPadAddPer(){ textPad.value = textPad.value + '%'; }
function textPadAddSub(){ textPad.value = textPad.value + '-'; }
function textPadAddAdd(){ textPad.value = textPad.value + '+'; }
function textPadAddSpace(){ textPad.value = textPad.value + ' '; }

function isOperator(toCheck) {
    switch (toCheck) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return true;
        default:
            return false;
    }
}

function compute(a, operator, b) {
    return operator(a,b); 
}

function symbolToOperator(symbol) {
    switch (symbol) {
        case '+': return plus;
        case '-': return minus;
        case '*': return multiply;
        case '/': return divide;
        case '%': return modulo;
    }
}

function plus(a,b) { return a + b; } 
function minus(a,b) { return a - b; }
function multiply(a,b) { return a * b; }
function divide(a,b) { return a / b; }
function modulo(a,b) { return a % b; }

function doCalculate(e)
{
    if(e.key == 'Enter')
    {
        var expression = textPad.value;
        var infix = expression.split(' ');
        var count = 1;
        var op1, op2, oper, result;
        infix.forEach( function(current) 
        {
            if (isOperator(current)) 
            {
                oper = current;
            }
            else if(count == 1){
                op1 = current;
            }   
            else if(count == 3)
            {
                op2 = current;
                count = 1;
                result = compute(op1, symbolToOperator(oper), op2);
                op1 = result;
            }
            count ++;
        });
        textPad.value = result;   
    }
}

clear.addEventListener("click", function(){textPad.value = "";}, false);
back.addEventListener("click", function(){textPad.value = textPad.value.slice(0, textPad.value.length-1)}, false);

one.addEventListener("click", textPadAdd1, false);
two.addEventListener("click", textPadAdd2, false);
three.addEventListener("click", textPadAdd3, false);
four.addEventListener("click", textPadAdd4, false);
five.addEventListener("click", textPadAdd5, false);
six.addEventListener("click", textPadAdd6, false);
seven.addEventListener("click", textPadAdd7, false);
eight.addEventListener("click", textPadAdd8, false);
nine.addEventListener("click", textPadAdd9, false);
zero.addEventListener("click", textPadAdd0, false);

division.addEventListener("click", textPadAddDiv, false);
multiplication.addEventListener("click", textPadAddMul, false);
percent.addEventListener("click", textPadAddPer, false);
substract.addEventListener("click", textPadAddSub, false);
add.addEventListener("click", textPadAddAdd, false);
space.addEventListener("click", textPadAddSpace, false);

equal.addEventListener("click", doCalculate, false);
textPad.addEventListener("keypress", doCalculate, false);
 