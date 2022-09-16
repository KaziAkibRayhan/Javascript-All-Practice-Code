let myBooksPrice = [70, 78, 90, 45, 23, 66, 77, 222, 201, 199];
for (let i = 0; i < myBooksPrice.length; i++) {
    let price = myBooksPrice[i];
    if (price >= 200) {
        continue;
    }
    console.log(price);
}