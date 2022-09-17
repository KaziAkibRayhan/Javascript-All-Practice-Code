function factorial(number) {
    let facto = 1;
    for (let i = number; i >= 1; i--) {
        facto = facto * i;
    }
    return facto;
}

const getFactiorial = factorial(5);
console.log(getFactiorial);