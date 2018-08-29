//var numberCount = 0;
var number1 = '';
var res = 0;
var oper = '';

function numBut(number) {
    //japarbauda lai nebutu vairak ka vien komats
    if (number == '.' && number1.slice(-1) == '.') {
        document.getElementById('screen').innerText = number1;
    } else if (number1 == '' && number == '.') {
        number1 = 0 + '.';
        document.getElementById('screen').innerText = number1;
    } else {
        number1 += number;
        document.getElementById('screen').innerText = number1;
    }

}

function operator(MathOperator, num1, num2) {

    if (MathOperator == 'sum') {
        document.getElementById('screen').innerText = num1 + num2;
        //oper='';
    } else if (MathOperator == 'minus') {
        document.getElementById('screen').innerText = num1 - num2;
        //oper='';
    } else if (MathOperator == 'reiz') {
        document.getElementById('screen').innerText = num1*num2;
        //oper='';
    } else if (MathOperator == 'divis') {
        document.getElementById('screen').innerText = num1 / num2;
        //oper='';
    }

}

function plusBut() {
    if (oper == '') { document.getElementById('screen').innerText = number1; }
    else {
        operator(oper, res, parseFloat(number1));
        number1 = document.getElementById('screen').innerText;
    }
    res = parseFloat(number1);
    number1 = '';
    oper = 'sum';
}

function minBut() {
    if (oper == '') { document.getElementById('screen').innerText = number1; }
    else {
        operator(oper, res, parseFloat(number1));
        number1 = document.getElementById('screen').innerText;
    }
    res = parseFloat(number1);
    number1 = '';
    oper = 'minus';
}

function rBut() {
    if (oper == '') { document.getElementById('screen').innerText = number1; }
    else {
        operator(oper, res, parseFloat(number1));
        number1 = document.getElementById('screen').innerText;
    }
    res = parseFloat(number1);
    number1 = '';
    oper = 'reiz';
}

function divBut() {
    if (oper == '') { document.getElementById('screen').innerText = number1; }
    else {
        operator(oper, res, parseFloat(number1));
        number1 = document.getElementById('screen').innerText;
    }
    res = parseFloat(number1);
    number1 = '';
    oper = 'divis';
}

function eqBut() {
    operator(oper, res, parseFloat(number1));
    number1=document.getElementById('screen').innerText;
    oper = '';
    //number1 = '';
    //res = 0;
}



function delBut() {
    document.getElementById('screen').innerText = 0;
    number1 = '';
    res = 0;
    oper = '';

}