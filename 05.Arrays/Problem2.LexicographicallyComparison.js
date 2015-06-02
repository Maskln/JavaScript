//Problem 2. Lexicographically comparison
//
//Write a script that compares two char arrays lexicographically (letter by letter).

var arr1 = ['p', 'e', 's', 'h', 'o'],
    arr2 = ['g', 'o', 's', 'h', 'o'],
    arr1length = arr1.length,
    arr2length = arr2.length,
    i;

if(arr1length > arr2length){
    console.log('The first array is Longer!')
}else if (arr1length < arr2length){
    console.log('The second array is Longer!')
}else{
    for (i = 0; i < Math.min(arr1length, arr2length); i+=1){
        if(arr1[i] < arr2[i]){
            console.log(arr1[i] + ' < ' + arr2[i]);
        }else if(arr1[i] > arr2[i]){
            console.log(arr1[i] + ' > ' + arr2[i]);
        }else{
            console.log(arr1[i] + ' = ' + arr2[i]);
        }
    }
}




