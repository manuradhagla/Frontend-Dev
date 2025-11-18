var bonus = 5000;
var employeeIsPermanent = false;

function calculateSalary() {
  var baseSalary = 40000;
  var localIsPermanent = true;
  var totalSalary = baseSalary + (localIsPermanent ? bonus : 0);

  console.log("Inside function -> Permanent?", localIsPermanent);
  console.log("Inside function -> Total Salary: ₹" + totalSalary);
}

console.log("Global -> Permanent?", employeeIsPermanent);

calculateSalary();

console.log("Global after function -> Permanent?", employeeIsPermanent);
