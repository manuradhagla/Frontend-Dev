// Q3. Monthly Expense Tracker
// Instructions followed: use an array for 5 categories, add 10% tax using assignment operators, use toFixed(2).

const categories = ["Shooping", "travel", "hostel", "bills", "Food"];

const expenses = [5500, 1200, 10000, 2800, 1800];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total = total + expenses[i];
}

let average = total / expenses.length;

let finalAmount = total + (total * 0.10);


console.log("Total: ₹" + total);
console.log("Average: ₹" + average.toFixed(2));
console.log("Final Amount after 10% tax: ₹" + finalAmount.toFixed(2));

