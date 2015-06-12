//Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
//Use Array#reduce
//Use only array methods and no regular loops (for, while)

var people = [
        { firstname : 'Gosho', lastname: 'Petrov', age: 32, isFemale: false},
        { firstname : 'Petrana', lastname: 'Mihova', age: 82, isFemale: true},
        { firstname : 'Pesho', lastname: 'Georgiev', age: 21, isFemale: false},
        { firstname : 'Trendafil', lastname: 'Haralampiev', age: 13, isFemale: false},
        { firstname : 'Spiridonka', lastname: 'Dobreva', age: 16, isFemale: true}
    ],

    groups = people.reduce(function (gr, people) {
    var letter = people.firstname[0];

    if (gr[letter]) {
        gr[letter].push(people);
    } else {
        gr[letter] = [people];
    }

    return gr;
}, {});

console.log(groups);