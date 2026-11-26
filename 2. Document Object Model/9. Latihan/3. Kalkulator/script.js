// const numbers = document.querySelectorAll(".number");
// const display = document.querySelector("#display");
// let currentNumber = "";
// const tambah = document.querySelector(".tambah");
// const hasil = document.querySelector(".hasil");

// let firstNumber = "";
// let operator = "";
// let secondNumber = "";

// numbers.forEach(function (number) {
//   number.addEventListener("click", function () {
//     currentNumber += number.textContent;
//     // display.append(currentNumber);
//     display.textContent = currentNumber;
//   });
// });

// tambah.addEventListener("click", function () {
//   // 1, menyimpan nilai fistnumber
//   firstNumber = currentNumber;
//   //   2.menyimpan operator
//   operator = tambah.textContent;
//   //   3. mengosongkan currentNumber
//   currentNumber = "";
//   //   4.memunculkan operator didisplay
//   display.textContent = operator;
// });

// hasil.addEventListener("click", function () {
//   secondNumber = currentNumber;
//   const result = Number(firstNumber) + Number(secondNumber);
//   display.textContent = result;
// });

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const hasil = document.querySelector(".hasil");
let currentNumber = "";

let firstNumber = "";
let operator = "";
let secondNumber = "";
let resetScreen = false;

numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    if (resetScreen) {
      currentNumber = "";
      resetScreen = false;
    }

    if ((currentNumber, length < 12)) {
      currentNumber += number.textContent;
      display.textContent = currentNumber;
    }
  });
});

operators.forEach(function (op) {
  op.addEventListener("click", function () {
    firstNumber = currentNumber;
    operator = op.dataset.operator;
    currentNumber = "";
    resetScreen = false;
    display.textContent = op.textContent;
  });
});

hasil.addEventListener("click", function () {
  secondNumber = currentNumber;
  const a = Number(firstNumber);
  const b = Number(secondNumber);
  let result;

  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    result = a / b;
  }
  resetScreen = true;
  display.textContent = result;
});
