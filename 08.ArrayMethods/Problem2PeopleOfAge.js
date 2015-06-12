//Write a function that checks if an array of person contains only people of age (with age 18 or greater)
//Use only array methods and no regular loops (for, while)

var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Pesho', lastname: 'Georgiev', age: 21},
    { firstname : 'Trendafil', lastname: 'Haralampiev', age: 43},
    { firstname : 'Spiridon', lastname: 'Dobrev', age: 78}
];

console.log('Greater or with age 18? ' + people.every(function(_, index){
    return people[index]['age'] >= 18;

}));
