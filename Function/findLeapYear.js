
function findLeapYear(year) {
    const getLeapYear = [];
    for (let i = 0; i < year.length; i++) {
        const element = year[i];
        if ((element % 400 == 0 || element % 100 != 0) && (element % 4 == 0)) {
            getLeapYear.push(element);
        }
    }
    return getLeapYear;
}


const array = [2023, 2024, 2025, 2028, 2030];
const leapyear = findLeapYear(array);
console.log(leapyear);
