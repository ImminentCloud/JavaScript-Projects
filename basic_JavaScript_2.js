function additionFunction() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 =" + addition;
}

function subtractionFunction() {
    var subtract = 5 - 2;
    document.getElementById("Subtraction_math").innerHTML = "5 - 2 =" + subtract;
}

function multiplyFunction() {
    var multiply = 6 * 4;
    document.getElementById("multiply").innerHTML = "6 * 4 =" + multiply;
}

function divideFunction() {
    var divide = 92 / 2;
    document.getElementById("divide").innerHTML = "92 / 2 =" + divide;
}

function modulusFunction() {
    var modulus = 91 % 10;
    document.getElementById("modulus").innerHTML = "When you divide 91 by 10 you have a remainder of " + modulus;
}

function unaryFunction() {
    var x = 9;
    document.getElementById("oneNumber").innerHTML = -x;
}
 
var z = 5 , y = 8.5;
z++;
y--;
document.write(z);
document.write("<br />");
document.write(y);

window.alert(Math.random() * 100);

window.alert(Math.pow(6, y));