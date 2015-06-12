//Problem 3. Deep copy
//Write a function that makes a deep copy of an object.
//    The function should work for both primitive and reference types.

var pesho = {
    name: 'Pesho',
    age: 16,
    hairColor: 'brown',
    marks: {
        Math: 3.50,
        Biology: 4.50,
        Music: 2.00
    }
    };


function cloneIt(obj){
    if(typeof obj !== 'object'){
        return obj;
    }

    var cloning = {},
        prop;

    for (prop in obj){
        cloning[prop] = cloneIt(obj[prop]);  //using recursion;
    }

    return cloning;
}

console.log(cloneIt(pesho));