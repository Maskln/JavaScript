function problem1() {
	
	var value = document.getElementById("input1").value,
		result = value % 2 === 0 ? 'The value is Even!' : 'The value is Odd!';
			
	document.getElementById("result").innerHTML = result;
	document.getElementById("result").style.color = "red";
}

function problem2() {
	
	var value = document.getElementById("input2").value,
		result = value % 7 === 0 && value % 5 === 0 ? 'Can divided by 7 and 5!' : 'Can not divided by 7 ang 5!';
			
	document.getElementById("result2").innerHTML = result;
	document.getElementById("result2").style.color = "red";
}

function problem3() {
	
	var width = document.getElementById("input3").value,
		height = document.getElementById("input4").value,
		result = 'The rectangle`s area is: ' + (width * height);
			
	document.getElementById("result3").innerHTML = result;
	document.getElementById("result3").style.color = "red";
}

function problem4() {
	
	var value = document.getElementById("input5").value,
		result = parseInt(value / 100) % 10 === 7 ? 'True' : 'False';
			 
	document.getElementById("result4").innerHTML = result;
	document.getElementById("result4").style.color = "red";
}

function problem5() {
	
	var value = document.getElementById("input6").value,
		position = 3,
		mask = 1 << position,
		numAndMask = value & mask,
		bit = 'The bit #3 is: ' + (numAndMask >> position),
		binnaryLooks = (+value).toString(2);

	document.getElementById("result5").innerHTML = bit;
	document.getElementById("result5").style.color = "red";
}

function problem6() {
	
	var valueX = document.getElementById("inputX").value,
		valueY = document.getElementById("inputY").value,
		radius = 5,
		result = Math.pow(valueX, 2) + Math.pow(valueY, 2) <= Math.pow(radius, 2) ? 'true' : 'false';
		

	document.getElementById("result6").innerHTML = result;
	document.getElementById("result6").style.color = "red";
}

function problem7() {

	var value = document.getElementById("input7").value,
		isPrime = true;

	for(var i = 2; i <= Math.sqrt(value); i += 1) {
        if (value % i === 0) {
            isPrime = false;
        }
    }

	document.getElementById("result7").innerHTML = isPrime;
	document.getElementById("result7").style.color = "red";
}

function problem8() {

	var valueA = document.getElementById("inputA").value,
		valueB = document.getElementById("inputB").value,
		valueH = document.getElementById("inputH").value;
		
	var area = ((valueA / 2) + (valueB / 2)) * valueH;

	document.getElementById("result8").innerHTML = area;
	document.getElementById("result8").style.color = "red";
}

function problem9() {

	var valueXX = document.getElementById("inputXX").value,
		valueYY = document.getElementById("inputYY").value,
		withinCircle = (valueXX - 1) * (valueXX - 1) + (valueYY - 1) * (valueYY - 1) <= 3 * 3,
        outsideRect = !((valueXX >= -1 && valueXX <= -1 + 6) && (valueYY <= 1 && valueYY >= 1 - 2)),
        isWithin = withinCircle && outsideRect ? 'Yes' : 'No';
        
        
	
	document.getElementById("result9").innerHTML = isWithin;
	document.getElementById("result9").style.color = "red";
}

