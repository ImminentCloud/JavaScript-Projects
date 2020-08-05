function sentenceFunction() {
    var part1 = "This will ";
    var part2 = "end up ";
    var part3 = "being a ";
    var part4 = "full sentence";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function sliceFunction() {
    var sentence = "I will use slice method on this sentence";
    var section = sentence.slice(10,16);
    document.getElementById("Slice").innerHTML = section;
}

var string = "This is a string";
document.write(string.toUpperCase());
var string_2 = "This is another string";
document.write(string_2.toLowerCase());
var search = string_2.search("another");
document.write(search);
function string_method() {
    var x = 154;
    document.getElementById("String").innerHTML = x.toString();
}

var z = 14534.453645;
document.write(z.toPrecision(7));
function fixedFunction() {
    var a = 54.68343;
    var b = a.toFixed(2);
    document.getElementById("Fixed").innerHTML = b;
}