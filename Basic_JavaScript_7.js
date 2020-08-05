var X = 10
function addingNumbers2() {
    console.log(X + 5);
    console.log(Y + 3);
}

function addingNumbers1() {
    var Y = 5;
    console.log(Y + 4);
}
addingNumbers2();
addingNumbers1();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greetings").innerHTML = "How are you today?";
    }
}

function nameFunction() {
    var name = "John"
    if (name == "John") {
        document.getElementById("Name").innerHTML = "Hi John";
    }
}

function Height_Function() {
    Height = document.getElementById("Height").value;
    if (Height >= 66) {
        Response = "You are taller than 65 inches.";
    }
    else {
        Response = "You are not taller than 66 inches."
    }
    document.getElementById("How_tall_are_you?").innerHTML = Response;
}

function Time_function() {
    var Time = new Date().getHours
    ();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}