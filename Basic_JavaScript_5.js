function rideFunction() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = Can_ride + " to ride";
}

function voteFunction() {
    var age, Can_vote;
    age = document.getElementById("age").value;
    Can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = Can_vote + " to vote";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Blazers(Name, Age, Height) {
    this.Blazers_Name = Name;
    this.Blazers_Age = Age;
    this.Blazers_Height = Height;
}

var blazers_27 = new Blazers("Jusuf", 25, "7' tall");
var blazers_o = new Blazers("Damian", 30, "6'2 tall");

function blazerFunction() {
    document.getElementById("New_This").innerHTML = blazers_27.Blazers_Name + " is " + blazers_27.Blazers_Age + " years old and is " + blazers_27.Blazers_Height;
}

function multiplyBy2Function() {
    document.getElementById("Times2").innerHTML = Times2();
    function Times2() {
        var startingNumber = 3;
        function byTwo() {startingNumber *= 2;}
        byTwo();
        return startingNumber;
    }
}