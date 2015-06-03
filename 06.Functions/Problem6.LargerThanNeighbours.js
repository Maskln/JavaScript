//Problem 6. Larger than neighbours
//Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).

var numbers = [3, 2, 3, 1, 5, 6, 7, 87, 98, 2, 12],
    position = 2;

isBiggerThanNeighbours(position, numbers);


function isBiggerThanNeighbours(position, numbers){
    var len = numbers.length,
        isBigger = false;

   if(!(position)){
      if(numbers[position] > numbers[position + 1]){
          isBigger = true;
      }else{
          isBigger;
      }
   }else if (position === (len - 1)){
       if (numbers[position] > numbers[position - 1]){
           isBigger = true;
       }else{
           isBigger;
       }
   }else{
       if((numbers[position] > numbers[position - 1]) && (numbers[position] > numbers[position + 1])){
           isBigger = true;
       }else{
           isBigger;
       }
   }
    return console.log('The value ' + numbers[position] + " is Bigger that its two neighbours? " + isBigger);
}