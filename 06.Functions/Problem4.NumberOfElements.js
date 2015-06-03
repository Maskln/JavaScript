//Problem 4. Number of elements
//Write a function to count the number of div elements on the web page

function countTheDivs() {
    var count = document.getElementsByTagName('div').length;

    document.getElementById("result").innerHTML = count;
    document.getElementById("result").style.color = 'red';
}

