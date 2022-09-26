const add = function(number1, number2) {
  return (number1+number2);
};

const subtract = function(number1, number2) {
  return (number1-number2);
};

const sum = function(array) {
	let sum = 0;
  array.forEach((item) => {
    sum += item;
  });
  return (sum);
};

const multiply = function(array) {
  // this worked but i incorrectly thought the input was a series of argument rather than a array
  //  let product = 1
  //  for (let i=0; i < arguments.length; i++) {
  //    product *= arguments[i];
  //  }
  //  return (product);

  let product = 1;
  array.forEach((item) => {
    product *= item;
  });
  return (product);
};

const power = function(base, exponent) {
	let answer = 1;
  for (let i=1; i <= exponent; i++) {
    answer *= base;
  }
  return (answer);
};

const factorial = function(number) {
	let answer = 1;
  for (let i=1; i <= number; i++) {
    answer *= i;
  }
  return (answer);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
