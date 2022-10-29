const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#calculate");
const displayMessage = document.querySelector("#output");

const calculateSum = (date) => {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
};

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
    if (sumOfDate % numberToCheck == 0) {
        displayMessage.innerText = numberToCheck +' is a lucky number!!';
    }
    displayMessage.innerText = numberToCheck +' is not that lucky';
  };
  
  checkButton.addEventListener("click", () => {
    const date = dateOfBirth.value;
    const numberToCheck = luckyNumber.value;
    const sumOfDate = calculateSum(date);
    checkIsNumberLucky(sumOfDate, numberToCheck);
  });
