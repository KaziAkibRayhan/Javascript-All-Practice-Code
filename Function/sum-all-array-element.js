

function sumArrayElement(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;
    }
    return sum;
}

let numbers = [10, 20, 10, 50, 100];
const getArraySum = sumArrayElement(numbers);
console.log(getArraySum);