console.log("hello-world")

let userName = prompt("Aloha! What's' your first name?");
console.log(userName);
document.write("Aloha " + userName+"! ");

let userInput = prompt("Do you love the ocean? yes or no.");
console.log(userInput);
let myAnswer = "yes";

if (userInput == myAnswer) {
    document.write("We're glad you love the ocean! Join us in the water! ");

} else {
    document.write("Even if you don't love the ocean, you can learn more here. ");
}
if (confirm("Would you like to enter this website?")) {
    document.write(" Awesome!");

} else {
    document.write("No worries!");
}