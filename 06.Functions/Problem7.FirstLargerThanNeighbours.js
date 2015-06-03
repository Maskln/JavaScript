//Problem 7. First larger than neighbours
//Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
//    Use the function from the previous exercise.

var numbers = [3, 2, 3, 1, 5, 6, 7, 87, 98, 2, 12],
    position = 2;

isBiggerThanNeighbours(position, numbers);


function isBiggerThanNeighbours(position, numbers){
    var len = numbers.length;


    if(!(position)){
        if(numbers[position] > numbers[position + 1]){
            return console.log(position);
        }else{
            return -1;
        }
    }else if (position === (len - 1)){
        if (numbers[position] > numbers[position - 1]){
            return console.log(position);
        }else{
            return -1;
        }
    }else{
        if((numbers[position] > numbers[position - 1]) && (numbers[position] > numbers[position + 1])){
            return console.log(position);
        }else{
            return -1;
        }
    }
    return console.log('The value ' + numbers[position] + " is Bigger that its two neighbours? " + isBigger);
}