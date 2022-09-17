function sumArrayElement(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;
    }
    return sum;
}

function getSumOddNumber(numbers) {
    var oddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 !== 0) {
            oddNumber.push(element);
        }
    }
    return oddNumber;
}

const numbers = [11, 11, 78, 46, 34, 11];
const OddNumberSum = getSumOddNumber(numbers);
const oddNumberTotal = sumArrayElement(OddNumberSum);
console.log(oddNumberTotal);


