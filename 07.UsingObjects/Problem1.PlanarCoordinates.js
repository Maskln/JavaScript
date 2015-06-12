//Problem 1. Planar coordinates
//
//Write functions for working with shapes in standard Planar coordinate system.
//    Points are represented by coordinates P(X, Y)
//Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
//Calculate the distance between two points.
//    Check if three segment lines can form a triangle.

var pointOne = generatePoint(1, 1),
    pointTwo = generatePoint(2, 3),
    pointThree = generatePoint(3, 3),
    pointFour = generatePoint(4, 6),
    pointFive = generatePoint(5, 5),
    pointSix = generatePoint(6, 6),
    lineOne = generateLine(pointOne, pointTwo),
    lineTwo = generateLine(pointThree, pointFour),
    lineThree = generateLine(pointFive, pointSix);


function generatePoint(valueX, valueY) {
    return {
    x: valueX,
    y: valueY,
    toString: function (){
        return 'P(' + this.x + ', ' + this.y + ')';
        }
    };
}

function generateLine(firstPoint, secondPoint){
    return{
        pointOne: firstPoint,
        pointTwo: secondPoint,
        lenght: lineDistance(firstPoint, secondPoint),
        toString: function(){
            return 'L(' + this.pointOne.toString() + ', ' + this.pointTwo.toString() + ')';
        }
    };
}

function lineDistance(point1, point2) //Calculate distance between two points;
{
    var xs = 0,
        ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt( xs + ys );
}

function canFormATriangle(firstLine, secondLine, thirdLine){
    if(firstLine + secondLine > thirdLine && firstLine + thirdLine > secondLine && secondLine + thirdLine > firstLine){
        return true;
    }else {
        return false;
    }
}

console.log("Point: " +  pointOne.toString());                                                                     //Prints a point;
console.log();
console.log("Line: " +  lineOne.toString());                                                                      //Prints a line;
console.log();
console.log('lineOne.lenght = ' + lineOne.lenght);                                                                 //Prints a lenght;
console.log('lineTwo.lenght = ' + lineTwo.lenght);                                                                 //Prints a lenght;
console.log('lineThree.lenght = ' + lineThree.lenght);                                                                 //Prints a lenght;
console.log('------------------------------------- ');
console.log('Can form a Triangle? ' + canFormATriangle(lineOne.lenght, lineTwo.lenght, lineThree.lenght));        //Prints Can form a Triangle;


