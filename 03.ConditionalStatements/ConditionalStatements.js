function problem1(){
    var valueA = document.getElementById("input1").value,
        valueB = document.getElementById("input2").value,
        temp,
        result;

    valueA *= 1; // convert to number
    valueB *= 1;

    if (valueA > valueB){
        temp = valueA;
        valueA = valueB;
        valueB = temp;
    }else{
        result;
    }

    result = valueA + ' ' + valueB;

    document.getElementById('result').innerHTML = result;
    document.getElementById('result').style.color = 'red';
}
//------------------Problem2-----------------------------------

function problem2(){
    var valueA = document.getElementById('input3').value,
        valueB = document.getElementById('input4').value,
        valueC = document.getElementById('input5').value,
        result;

    valueA *= 1; //convert to number
    valueB *= 1;
    valueC *= 1;

    if (!(+valueA) || !(+valueB) || !(+valueC)){
        result = '0';
    }else if (valueA < 0 && valueB < 0 && valueC < 0){
        result = '-';
    }else if(valueA < 0 && valueB < 0 && valueC > 0){
        result = '+';
    }else if(valueA < 0 && valueB > 0 && valueC < 0){
        result = '+';
    }else if(valueA > 0 && valueB < 0 && valueC < 0){
        result = '+';
    }else if (valueA < 0 || valueB < 0 || valueC < 0){
        result = '-';
    }else{
        result = '+';
    }

    document.getElementById('result2').innerHTML = result;
    document.getElementById('result2').style.color = 'red';
}
//------------------Problem3---------------------------------

function problem3() {
    var valueA = document.getElementById('input6').value,
        valueB = document.getElementById('input7').value,
        valueC = document.getElementById('input8').value,
        result;

    valueA *= 1; //convert to number
    valueB *= 1;
    valueC *= 1;

    if(valueA > valueB){
        if(valueA > valueC){
            result = valueA;
        }else{
            result = valueC;
        }
    }else if(valueB > valueA){
        if(valueB > valueC){
            result = valueB;
        }else{
            result = valueC;
        }
    }else if(valueC > valueA){
        if(valueC > valueB){
            result = valueC;
        }else{
            result = valueB;
        }
    }else{
        result = valueA + '='+ valueB + '=' + valueC;
    }

    document.getElementById('result3').innerHTML = result;
    document.getElementById('result3').style.color = 'red';
}

//------------------Problem4-----------------------------------

function problem4() {
    var valueA = document.getElementById('input9').value,
        valueB = document.getElementById('input10').value,
        valueC = document.getElementById('input11').value,
        result,
        min,
        mid,
        max;

    valueA *= 1; //convert to number
    valueB *= 1;
    valueC *= 1;


        if (valueA > valueB && valueA > valueC) {
            max = valueA;
            if (valueB > valueC) {
                mid = valueB;
                min = valueC;
            } else {
                mid = valueC;
                min = valueB;
            }
        } else if (valueB > valueA && valueB > valueC) {
            max = valueB;

            if (valueA > valueC) {
                mid = valueA;
                min = valueC;
            } else {
                mid = valueC;
                min = valueA;
            }
        } else if (valueC > valueA && valueC > valueB) {
            max = valueC;

            if (valueA > valueB) {
                mid = valueA;
                min = valueB;
            } else {
                mid = valueB;
                min = valueA;
            }
        }


result = max + ' ' + mid + ' ' + min;


    document.getElementById('result4').innerHTML = result;
    document.getElementById('result4').style.color = 'red';
}

//------------------Problem5-----------------------------------

function problem5() {
    var valueA = document.getElementById('input12').value,
        result = '';

    valueA *= 1; //convert to number

    switch (valueA) {
        case 0: result = 'zero'; break;
        case 1: result = 'one'; break;
        case 2: result = 'two'; break;
        case 3: result = 'three'; break;
        case 4: result = 'four'; break;
        case 5: result = 'five'; break;
        case 6: result = 'six'; break;
        case 7: result = 'seven'; break;
        case 8: result = 'eight'; break;
        case 9: result = 'nine'; break;
        default: result = 'not a digit'; break;
    }

    document.getElementById('result5').innerHTML = result;
    document.getElementById('result5').style.color = 'red';
}

//------------------Problem6-----------------------------------

function problem6() {
    var valueA = document.getElementById('input13').value,
        valueB = document.getElementById('input14').value,
        valueC = document.getElementById('input15').value,
        result,
        d,
        x,
        x1,
        x2;

    valueA *= 1; //convert to number
    valueB *= 1;
    valueC *= 1;

    d = (valueB * valueB) - (4 * valueA * valueC);

    if(d < 0){
        result = 'no real roots'
    }else if(!(+d)) {
        x =  -(valueB)/ (2 * valueA);
        result = 'x1=x2 = ' + x;
    }else{
        x1 = (-(valueB) - Math.sqrt(d)) / (2 * valueA);
        x2 = (-(valueB) + Math.sqrt(d)) / (2 * valueA);
        result = 'x1= ' + x1 + '; ' + 'x2= ' + x2;
    }

    document.getElementById('result6').innerHTML = result;
    document.getElementById('result6').style.color = 'red';
}

//------------------Problem7-----------------------------------

function problem7() {
    var valueA = document.getElementById('input16').value,
        valueB = document.getElementById('input17').value,
        valueC = document.getElementById('input18').value,
        valueD = document.getElementById('input19').value,
        valueE = document.getElementById('input20').value,
        result,
        max;


    valueA *= 1; //convert to number
    valueB *= 1;
    valueC *= 1;
    valueD *= 1;
    valueE *= 1;

    max = valueA;

    if(valueB > max){
        max =valueB;
    }

    if(valueC > max){
        max =valueC;
    }
    if(valueD > max){
        max =valueD;
    }

    if(valueE > max){
        max =valueE;
    }

    result = max;

    document.getElementById('result7').innerHTML = result;
    document.getElementById('result7').style.color = 'red';
}

//------------------Problem8-----------------------------------

function problem8() {
    var number = document.getElementById('input21').value,
        result;

    number *= 1; //convert to number

    if (number < 0 || number >= 1000) {
        write("try another number [0-999]");
        return;
    }
    else if (number === 0) {
        result = "Zero";
    }
    else if (number < 20) {
        result = zeroTwenty(number);
        result = result.charAt(0).toUpperCase() + result.substring(1); // to make first letter uppercase.

    }
    else if (number > 19 && number < 100) {
        result = takebefore99(number);
        result = result.charAt(0).toUpperCase() + result.substring(1);

    }
    else if (number > 99 && number < 1000) {
        var hun = number.toString().substring(0, 1);
        result = hundreds(hun - 0);
        var others = number.toString().substring(1);
        if (takebefore99(others - 0) !== "") {
            result += " and " + takebefore99(others - 0);
        }


        result = result.charAt(0).toUpperCase() + result.substring(1);

    }
    function takebefore99(number) {
        if (number < 20) {
            return zeroTwenty(number);
        }
        var decimals = number.toString().substring(0, 1);
        decimals = tens(decimals - 0);
        var digit = number.toString().substring(1);
        digit = zeroTwenty(digit - 0);
        var final = decimals + " " + digit;

        return final;
    }

    function zeroTwenty(number) {
        switch (number) {
            case 0:
                return "";
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";


        }
    }

    function tens(number) {
        switch (number) {
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "forty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return "eighty";
            case 9:
                return "ninety";


        }
    }

    function hundreds(number) {
        switch (number) {
            case 1:
                return "one hundred";
            case 2:
                return "two hundred";
            case 3:
                return "three hundred";
            case 4:
                return "four hundred";
            case 5:
                return "five hundred";
            case 6:
                return "six hundred";
            case 7:
                return "seven hundred";
            case 8:
                return "eight hundred";
            case 9:
                return "nine hundred";
        }
    }

    document.getElementById('result8').innerHTML = result;
    document.getElementById('result8').style.color = 'red';
}


