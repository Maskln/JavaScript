//Problem 5. Youngest person
//Write a function that finds the youngest person in a given array of people and prints his/hers full name
//Each person has properties firstname, lastname and age.

var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Pesho', lastname: 'Georgiev', age: 21},
    { firstname : 'Trendafil', lastname: 'Haralampiev', age: 43},
    { firstname : 'Spiridon', lastname: 'Dobrev', age: 78}
];

findYoungest(people);

function findYoungest(array){
    var temp = array[0]['age'],
        younger = {},
        len = array.length,
        i;

    for (i = 1; i < len; i+=1){

        if(temp > array[i]['age']){
            temp = array[i]['age'];
            younger = array[i];
        }
    }

    return console.log('The youngest person is ' + younger.firstname + ' ' + younger.lastname + '!');
}




