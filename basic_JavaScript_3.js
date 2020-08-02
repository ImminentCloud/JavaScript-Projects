function myDictionary() {
    var student = {
        name: "Jordan",
        age: 14,
        gender: "Male",
        gpa: 3.5,
        age: 12
    };
    delete student.gender;
    document.getElementById("Dictionary").innerHTML = student.gender;
}