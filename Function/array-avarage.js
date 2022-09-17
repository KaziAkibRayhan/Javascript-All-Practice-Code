

function makeAvg(numbers) {

    let sum = 0;
    let avg = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
        avg = sum / numbers.length;
    }
    return avg;
}

const numbers = [10, 10, 10];
const avarage = makeAvg(numbers);
console.log(parseInt(avarage.toFixed(2)));