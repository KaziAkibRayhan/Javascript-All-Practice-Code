let user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

let userProperties = Object.keys(user);

for (let i = 0; i < userProperties.length; i++) {
    var userProperty = userProperties[i];
    var userValue = user[userProperty];
    // console.log(userProperty, userValue);
}

for (const propertyName in user) {
    const value = user[propertyName];
    console.log(propertyName, value);
}