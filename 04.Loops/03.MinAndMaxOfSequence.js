//Problem 3. Min/Max of sequence
//Write a script that finds the max and min number from a sequence of numbers.

var arr = [54, 5, 70, 525, 6, 49, 36, 59, 659],
    min = arr[0],
    max = arr[0],
    i;

for(i = 0; i < arr.length; i+=1){
    if(min > arr[i]){
        min = arr[i];
    }

    if(max < arr[i]){
        max = arr[i];
    }
}

console.log('The min number is: ' + min);
console.log('The max number is: ' + max);