//Write a JavaScript function that reverses a string and returns it.

var str = 'sample',
    reversedStr = reverse(str);

console.log('The reversed string of ' + str + ' is ' + reversedStr);

function reverse(s){
    return s.split("").reverse().join("");
}