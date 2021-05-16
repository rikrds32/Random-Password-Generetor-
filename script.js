// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for password content
var alphabetLowercase = "abcdefghijklmnopqrstuvwxyz";
var alphabetUppercase  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password using selections made by user with prompts and confirms. Return password to write
// password function.
function generatePassword() {

  // Prompt user for password length.
  var passwordLength = prompt("Please select a password length between 8 and 128 characters.");

  // Variable declared to store password that's generated.
  var password = "";

}