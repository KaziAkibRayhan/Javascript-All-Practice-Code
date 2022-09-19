let arr = [20, 55, 66, 80, 89, 90, 91, 95, 103, 20, 55, 66, 33];

for (const item of arr) {
    if (item < 80) {
        continue;
    }
    console.log(item);
}