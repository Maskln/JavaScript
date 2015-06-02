//Problem 3. Maximal sequence
//Write a script that finds the maximal sequence of equal elements in an array.

var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
    result = [],
    maxSeq = 0,
    currentSeq = 0,
    maxIndex,
    len = arr.length,
    i;

for (i = 1; i < len; i+=1){

    if (arr[i] == arr[i - 1]){
        currentSeq+=1;
        if(currentSeq > maxSeq) {
            maxSeq = currentSeq;
            maxIndex = i;
        }
    }else{
        currentSeq = 1;
    }
}

for (i = 0; i < maxSeq; i+=1){
   result[i] = arr[maxIndex];
}

console.log(result.join(', '));