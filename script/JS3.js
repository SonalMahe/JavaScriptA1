let username = prompt("Username");
let password = prompt("Enter password");

function IsValidPassword(username, password) {
    if (password.length < 8) //password length should be min 8 char.
    {
        console.log('password length should be min 8 characters');
        return false;
    }
    if (password.indexOf(" ") !== -1) //password can not contain spaces.
    {
        console.log('password should not contain any space');
        return false;
    }
    if (password == username) //can not contain username
    {
        console.log('password should not be same as username');
        return false;
    }
    return true;
}

console.log(IsValidPassword(username, password));