//Problem 4. Has property
//Write a function that checks if a given object contains a given property.

var pesho = {
    name: 'Pesho',
    age: 16,
    hairColor: 'brown',
    marks: {
        Math: 3.50,
        Biology: 4.50,
        Music: 2.00
    }
    },

    hasProp = hasProperty(pesho, 'age');

console.log(hasProp);


function hasProperty(obj, property){
    if ( property in obj ){
        return true;
    }else{
        return false;
    }
}