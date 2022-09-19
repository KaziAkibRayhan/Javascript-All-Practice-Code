function findArrayPositiveNuber(numbers) {
    let positiveNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number > 0) {
            positiveNumber.push(number);
        }
    }
    return positiveNumber;
}

const numbers = [20, 55, 66, 80, 89, 90, 91, -2, -1, 0, -10, 95, 103, 20, 55, 66, 33];
const positiveNumber = findArrayPositiveNuber(numbers);
console.log(positiveNumber);

