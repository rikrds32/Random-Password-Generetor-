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

  // While loop to make sure user selects correct password length.
  while(passwordLength < 8 || passwordLength > 128){
    alert("Invalid password length.");
    passwordLength = prompt("Please select a password length between 8 and 128 characters.");
  }
  // Confirm variables declared to store user selection on character types.
  var uppercaseConfirm = confirm("Would you like to include uppercase letters?");
  var lowercaseConfirm = confirm("Would you like to include lowercase letters?");
  var numbersConfirm = confirm("Would you like to include numbers?");
  var symbolsConfirm = confirm("Would you like to include symbols?");
  // While loop to make sure user selects at least one character type.
  while(!uppercaseConfirm && !lowercaseConfirm && !numbersConfirm && !symbolsConfirm){
    alert("Please select at least one character type.");
    uppercaseConfirm = confirm("Would you like to include uppercase letters?");
    lowercaseConfirm = confirm("Would you like to include lowercase letters?");
    numbersConfirm = confirm("Would you like to include numbers?");
    symbolsConfirm = confirm("Would you like to include symbols?");
  }
  // If statement to generate random password when user selects all four character types.
  if(uppercaseConfirm && lowercaseConfirm && numbersConfirm && symbolsConfirm){
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += alphabetUppercase[Math.floor(Math.random() * alphabetUppercase.length)];
    // For loop to generate password with all four character types.
    for (var i = 3; i < passwordLength; i++) {
      password += alphabetLowercase[Math.floor(Math.random() * alphabetLowercase.length)];
    }

    return password; 

  } 
  // Else if statement to generate random password when user selects lowercase, numbers, and symbols.
  else if(lowercaseConfirm && numbersConfirm && symbolsConfirm){
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    // For loop to generate random password when user selects lowercase, numbers, and symbols.
    for (var i = 2; i < passwordLength; i++) {
      password += alphabetLowercase[Math.floor(Math.random() * alphabetLowercase.length)];
    }

    return password; 

  } 
  // Else if statement to generate random password when user selects numbers and symbols.
  else if(numbersConfirm && symbolsConfirm){
    password += symbols[Math.floor(Math.random() * symbols.length)];
    // For loop to generate random password when user selects numbers and symbols.
    for (var i = 1; i < passwordLength; i++) {
      password += numbers[Math.floor(Math.random() * (numbers.length - 1))];
    }

    return password; 

  } 
  // Else statement when user only selects symbols.
  else {

    // For loop to generate random password when user selects symbols.
    for (var i = 0; i < passwordLength; i++) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }

    return password; 

  } 

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);