const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (numbers) {
  return numbers.reduce((total, next) => total + next, 0)
};

const multiply = function (numbers) {
  return numbers.reduce((total, next) => total * next)
};

const power = function (base, exp) {
  return base ** exp

};

const factorial = function (num) {
  let ans = 1
  for (let i = 2; i <= num; i++)
    ans *= i
  return ans
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
