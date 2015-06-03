//Problem 2. Reverse number
//Write a function that reverses the digits of given decimal number.

var number = 123.45;


console.log('-----------------------------------------');
console.log('The reversed Number of ' + number + ' is ' + reverseNumber(number));
console.log('-----------------------------------------');

function reverseNumber(number){
    number = number || 0;

    var reversedNumb = [],
        numbToString = number.toString(),
         len = numbToString.length,
         i;

    for (i = 1; i <= len; i+=1){
        reversedNumb[i - 1] = numbToString[len - i];
    }

    return reversedNumb.join('')
}

