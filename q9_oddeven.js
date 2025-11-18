var results = [];

for (var i = 1; i <= 30; i++) {


    if (i % 3 === 0 && i % 5 === 0) {
        results.push("FizzBuzz"); // Number is divisible by both 3 and 5
    } else if (i % 2 === 0) {
        results.push("Even"); // Number is divisible by 2
    } else {
        results.push("Odd"); // Number is not divisible by 2
    }
}


console.log(results);
