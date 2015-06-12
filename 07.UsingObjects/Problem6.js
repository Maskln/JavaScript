//Problem 6.
//Write a function that groups an array of people by age, first or last name.
//    The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
//Use function overloading (i.e. just one function)

var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Pesho', lastname: 'Georgiev', age: 21},
    { firstname : 'Trendafil', lastname: 'Haralampiev', age: 43},
    { firstname : 'Spiridon', lastname: 'Dobrev', age: 78}
];

function groupBy(array, key){
    if (!array[0].hasOwnProperty(key)) {
        return null;
    }
    var groupedPeople = {},
        i;

    for (i in array) {
        var groupProperty = array[i][key];

        if (!groupedPeople.hasOwnProperty(groupProperty)) {
            groupedPeople[groupProperty] = [];
        }

        groupedPeople[groupProperty].push(array[i]);
    }

    return groupedPeople;
}

console.log(groupBy(people, 'age'));


