function getLeapYear(year) {
    if ((year % 400 == 0 || year % 100 != 0) && (year % 4 == 0)) {
        console.log("This is Leap Year", year);
    }
    else {
        console.log("This is not Leap Year", year);
    }
}

const yourYear = 2003;
const isLeapYear = getLeapYear(yourYear);
console.log(isLeapYear);