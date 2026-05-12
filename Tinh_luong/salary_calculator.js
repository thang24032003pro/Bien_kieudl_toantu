const taxRate = 0.1; 
const baseSalary = 5000;
const overTimeHours = 10;
const bonusRate = 1.5;

let totalEarnings = baseSalary + (overTimeHours * bonusRate);
let taxAmount = totalEarnings * taxRate;
let finalSalary = totalEarnings - taxAmount;

console.log("Lương thực nhận: " + finalSalary.toFixed(2));
