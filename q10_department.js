var deps = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];
t
for (var i = 0; i < deps.length; i++) {
    var name = deps[i][0];
    var score = deps[i][1];
    var grade = "";


    if (score >= 90) {
        grade = "Excellent";
    } else if (score >= 75) {
        grade = "Good";
    } else if (score >= 60) {
        grade = "Average";
    } else {
        grade = "Needs Improvement";
    }

    console.log(name, grade);
}
