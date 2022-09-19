function bestFriend(friendNames) {
    let uniqueFriend = friendNames[0];
    for (let i = 0; i < friendNames.length; i++) {
        const friendName = friendNames[i];
        if (friendName.length > uniqueFriend.length) {
            uniqueFriend = friendName;
        }
    }
    return uniqueFriend;
}

const friendNames = ['Alad', 'Kolad', 'Maruf Hasan', 'alad', 'Falad', 'Jalad'];
const myBestFriend = bestFriend(friendNames);
console.log(myBestFriend);