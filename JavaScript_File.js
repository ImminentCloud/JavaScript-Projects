alert("Hello, World!");  //First Alert
document.write('Hello,World!');     //first document.write
var a = "This is a string";   //first variable
document.write(a);    //calling the first variable
var b = "Also a string\'s";  //using the \ for the first time
alert(b);   //calling the \ string
document.write('This is the first part' + ' and this is the second part.'); //concated string
var c = 'concatenated' + ' string';
document.write(c);
var dog1 = "Hades", dog2 = "Burt", dog3 = "Angus";  //multiple variables
var dog1 = dog1.fontcolor("red");
var dog2 = dog2.fontcolor("yellow");
var dog3 = dog3.fontcolor("blue");
document.write(dog1);
document.write(4 + 3);  //first expression
//function My_First_Function() {
//    var str = "This text is green"
//    var result = str.fontcolor(green)
//    document.getElementById(Green_Text).innerHTML = result
//}

//I just wrote down the example of the function and how to call it from the html file for future reference. :)

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function myFunction()  {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}