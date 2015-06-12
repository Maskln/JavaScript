//Write a function that finds the youngest male person in a given array of people and prints his full name
//Use only array methods and no regular loops (for, while)
//    Use Array#find

if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        var i, len = this.length;
        for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    }
}


var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32, isFemale: false},
    { firstname : 'Petrana', lastname: 'Mihova', age: 82, isFemale: true},
    { firstname : 'Pesho', lastname: 'Georgiev', age: 21, isFemale: false},
    { firstname : 'Trendafil', lastname: 'Haralampiev', age: 13, isFemale: false},
    { firstname : 'Spiridonka', lastname: 'Dobreva', age: 16, isFemale: true}
],
    youngestMale = people.sort(function(a, b){return a.age - b.age})
        .find(function(people){return !(people.isFemale)});

console.log('The ypungest male is: ' + youngestMale.firstname + ' ' + youngestMale.lastname);