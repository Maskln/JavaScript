//Write a function that calculates the average age of all females, extracted from an array of persons
//Use Array#filter
//Use only array methods and no regular loops (for, while)


var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32, isFemale: false},
    { firstname : 'Petrana', lastname: 'Mihova', age: 82, isFemale: true},
    { firstname : 'Pesho', lastname: 'Georgiev', age: 21, isFemale: false},
    { firstname : 'Trendafil', lastname: 'Haralampiev', age: 43, isFemale: false},
    { firstname : 'Spiridonka', lastname: 'Dobreva', age: 16, isFemale: true}
    ],
    sum = 0,
    avg;

    females = people.filter(function(_, index){
            return !!(people[index]['isFemale']);
    });

females.forEach(function(_, index){
    return sum += females[index]['age'];
});

avg = sum /2;

console.log('The average age of females is: ' + avg);

