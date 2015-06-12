//Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
//Example:
//
//    The target sub-string is in
//
//The text is as follows: We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.
//
//The result is: 9

var text = 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.',
    target = 'in';

console.log('The result is: ' + findSubStringInText(text, target));

function findSubStringInText(text, target){
    text = text.toLowerCase();
    target = target.toLowerCase();

    var count = 0,
        index = text.indexOf(target, 0);

while (index >= 0){
    count+= 1;
    index += 1;
    index = text.toLowerCase().indexOf(target, index);
}
    return count;
}
