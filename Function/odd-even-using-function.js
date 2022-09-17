function checkOddEven(number) {
    if (number % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
const number = 11;
const getOddEven = checkOddEven(number);
console.log(getOddEven);