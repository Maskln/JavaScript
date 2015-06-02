//Problem 4. Maximal increasing sequence
//Write a script that finds the maximal increasing sequence in an array.

var arr = [3, 2, 3, 4, 2, 2, 4],
    maxSeq = 0,
    currentSeq = 0,
    result = [],
    seqIndex,
    len = arr.length,
    i;

for (i = 1; i < len; i+=1){
    if(arr[i] > arr[i -1]){
        currentSeq+=1;
        if(currentSeq > maxSeq){
            maxSeq = currentSeq;
            seqIndex = i;
        }
    }else{
        currentSeq = 1;
    }
}
result = arr.splice(seqIndex - maxSeq + 1, maxSeq).join(', ');

console.log(result);