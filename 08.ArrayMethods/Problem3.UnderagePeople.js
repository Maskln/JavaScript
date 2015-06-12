//Write a function that prints all underaged persons of an array of person
//Use Array#filter and Array#forEach
//Use only array methods and no regular loops (for, while)

var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Pesho', lastname: 'Georgiev', age: 15},
    { firstname : 'Trendafil', lastname: 'Haralampiev', age: 43},
    { firstname : 'Spiridon', lastname: 'Dobrev', age: 17}
    ],

    underaged = people.filter(function(_, index){
        return people[index]['age'] <= 18;
        });

console.log(underaged);