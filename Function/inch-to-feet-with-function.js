function getInchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const inch = 24;
const getFeet = getInchToFeet(inch);
console.log(getFeet);