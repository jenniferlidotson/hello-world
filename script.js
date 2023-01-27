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

    function  manyPicture() {
        let number = prompt("Pick a magic number between 1 to 3");
        while (number < 1 || number >3) {
            number = prompt("Pick a magic number between 1 to 3");
        
        }
        
        for (let i = 0; i < number; i++ ){
        document.write("<img src='SUPlogo.png' width ='100px'>")
        
        }
    }
    manyPicture();