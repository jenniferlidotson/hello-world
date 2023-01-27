console.log("hello-world")

function userGreeting() {
    userName = prompt("Aloha! What's your first name?");
    console.log(userName);
    document.write("Aloha " + userName+"! ");
    return userName;
}

userGreeting();

alert("You must love Stand Up Paddle Boarding to view this website");

function loveConfirm() {
    let love = prompt("Do you love Stand Up Paddle Boarding? yes or no.");

    if (love) {
        while (love.toLowerCase() !== "yes") {
            loveConfirm();
            console.log(love);
            return love;
        }
    } else { 
        loveConfirm();
    }
}
    loveConfirm();

function manyPicture() {
    let number = prompt("Pick a magic number between 1 to 3");

    if (number == 1) {
        document.write("<img src='SUPlogo.png' width = '100px'></img>");
        console.log(number);

    } else if (number == 2) {
        document.write("<img src='SUPlogo.png' width = '100px'></img>");
        document.write("<img src='SUPlogo.png' width = '100px'></img>");
        console.log(number);

    } else if (number == 3) {
        document.write("<img src='SUPlogo.png' width = '100px'></img>");
        document.write("<img src='SUPlogo.png' width = '100px'></img>");
        document.write("<img src='SUPlogo.png' width = '100px'></img>");
        console.log(number);

    } else { 
        manyPicture();
        console.log(number);
    }
   
}
manyPicture();
