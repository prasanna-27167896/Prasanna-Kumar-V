class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  calculate(op) {
    switch (op.toLowerCase()) {
      case "addition":
        return this.a + this.b;
      case "subtraction":
        return this.a - this.b;
      case "multiplication":
        return this.a * this.b;
      case "division":
        if (this.b === 0) return "Error: Division by zero!";
        return this.a / this.b;
      default:
        return "Invalid operator";
    }
  }
}

let a = +prompt("Enter the first number:");
let b = +prompt("Enter the second number:");
let op = prompt("Enter the operation (addition, subtraction, multiplication, division):");

const calc = new Calculator(a, b);
let res = calc.calculate(op);

console.log("The result is:", res);
