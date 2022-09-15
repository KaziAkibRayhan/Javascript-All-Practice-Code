let friendName = ['Alad', 'Kolad', 'Dalad', 'Falad', 'Jalad'];

// Array element
const elementOfArray = friendName.length;
console.log("element", elementOfArray);

// Change element by indexOf()
let baladIndex = friendName.indexOf('Kolad');
friendName[baladIndex] = 'Lolad';
console.log(friendName);

// Add last Element array

friendName.push('Alal Mia');
console.log(friendName);
friendName.push('Jamal Mia');
console.log(friendName);

// Remove Last Element array

friendName.pop();
console.log(friendName);

// Add First element array

friendName.unshift("Codur Uddin");
friendName.unshift("Kodor Uddin");
console.log(friendName);

// Remove First Element Array

friendName.shift();
console.log(friendName);
