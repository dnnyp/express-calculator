function add(a, b){
  return a + b
}

function subtract(a, b){
  return a - b
}

function multiply(a, b){
  return a * b
}

function divide(a, b){
  return a / b
}

module.exports = (operator, num1, num2) => {
  var result;

  switch(operator){
		case "addition":
		result = add(num1, num2);
		return result;

		case "subtraction":
		result = subtract(num1, num2);
		return result;

		case "multiplication":
		result = multiply(num1, num2);
		return result;

		case "division":
		result = divide(num1, num2);
		return result;

		default:
		result = "Sorry, please enter a valid operator!"
    return result;
	}
}
