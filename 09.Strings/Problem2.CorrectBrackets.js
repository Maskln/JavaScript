//Write a JavaScript function to check if in a given expression the brackets are put correctly.

var firstExpr = '((a+b)/5-d)',
    secondExpr = ')(a+b))';

console.log('The expretion: ' + firstExpr + ' is correct? ' +  checkTheBrackets(firstExpr));
console.log('The expretion: ' + secondExpr + ' is correct? ' +  checkTheBrackets(secondExpr));


function checkTheBrackets(expr) {
    var isCorrect = true,
        count = 0,
        i,
        len = expr.length;

    if (expr[0] === ')'){
        isCorrect = false;
    }

    for(i = 0; i < len; i+=1){
        if(expr[i] === '('){
            count+=1;
        }else if(expr[i] === ')'){
            count-=1;
        }
    }

    if(!(count)){
        isCorrect = true;
    }else{
        isCorrect = false;
    }

    return isCorrect;
}

