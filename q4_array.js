function r(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var scores = Array.from({ length: 8 }, () => r(30, 100));

var highest = Math.max(...scores);
var lowest = Math.min(...scores);
var average = scores.reduce((a, b) => a + b, 0) / scores.length;
var passedCount = scores.filter(s => s >= 50).length;

console.log("Scores:", scores);
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);
console.log("Average Score:", average.toFixed(2));
console.log("Number of Students Passed:", passedCount);
