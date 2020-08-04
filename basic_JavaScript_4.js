document.write(typeof "Word");
document.write(0/0);
document.write(isNaN("word"));
document.write(isNaN(5));
function infinityFunction() {
    var x = 2E310;
    document.getElementById("largeNumber").innerHTML = x;
}
document.write(10>2);
console.log(10 - 3);
document.write("10" + 5);
console.log(10 == 2 * 5);
console.log(4 == 2 - 1);
document.write(5 === "five");
document.write(2 === 2);
document.write(2 === 5);
document.write(2 === "five");
document.write(2 > 4 && 3 > 4);
document.write(5 > 3 && 7 > 2);
document.write(5 > 9 || 9 > 4);
document.write(5 > 8 || 2 > 6);

function notFunction() {
    document.getElementById("not").innerHTML = !(5 > 10);
}