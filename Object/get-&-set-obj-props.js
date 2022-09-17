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

// When I know the specific property name, use dot notation to get property value. 

const emailAddress = user.email;
// console.log(emailAddress);

// Alternative
// When I know the specific property name, use dot notation to get property value. 

const phoneNumber = user["phone"];
// console.log(phoneNumber);

const userName = 'username';
const userValue = user[userName];
// console.log(userName, userValue);



let properties = Object.keys(user);
// console.log(properties);
let propertiesValues = Object.values(user);
// console.log(propertiesValues);



// Set property Values

user.address = 'kazi@gamil.com';
// console.log(user);

user['id'] = 2;
// console.log(user);

user[userName] = 'Akib';
console.log(user);