//Problem 4. Lexicographically smallest
//Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.


properpyLenght(document);

properpyLenght(window);

properpyLenght(navigator);


function properpyLenght(obj){
    var prop,
        min = 'asd',
        max = 'asd';

    for(prop in obj){
        if(min > prop){
            min = prop;
        }
    }

    for(prop in obj){
        if(max < prop){
            max = prop;
        }
    }

    console.log(obj);
    console.log('The smallest property: ' + min);
    console.log('The largest property: ' + max);
}
