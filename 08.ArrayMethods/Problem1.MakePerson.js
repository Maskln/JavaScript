//Write a function for creating persons.
//    Each person must have firstname, lastname, age and gender (true is female, false is male)
//Generate an array with ten person with different names, ages and genders

function makePerson(firtName, lastName, age, gender){
    return {
        fistname: firtName,
        lastname: lastName,
        age: age,
        isFemale: gender
    };
}


var people = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(function(_, i){
    return makePerson('Pesho' + i, 'Petrov' + i, 14 + i, !(i % 2));
       });

console.log(people);

