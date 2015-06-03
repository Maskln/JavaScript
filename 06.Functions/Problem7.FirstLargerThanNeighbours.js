//Problem 7. First larger than neighbours
//Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there�s no such element.
//    Use the function from the previous exercise.

var numbers = [1, 1, 1, 1, 5, 6, 7, 8, 8, 2, 12];

isBiggerThanNeighbours(numbers);

function isBiggerThanNeighbours(numbers){
    numbers = numbers || [];

    var len = numbers.length,
        position;

    for (position = 0; position < len; position += 1) {

        if (!(position)) {
            if (numbers[position] > numbers[position + 1]) {
                return console.log('The position of element is: ' + position);
            }
        } else if (position === (len - 1)) {
            if (numbers[position] > numbers[position - 1]) {
                return console.log('The position of element is: ' + position);
            } else {
                return console.log(-1);
            }
        } else {
            if ((numbers[position] > numbers[position - 1]) && (numbers[position] > numbers[position + 1])) {
                return console.log('The position of element is: ' + position);
            }
        }
    }
}


