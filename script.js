// Assignment Code
function generatePassword() {
  var numericalCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '{', '[', '}', ']', ';', ':', '"', ',', '.', '/', '<', '>', '?'];
  possibleCharacters = [];

var numberOfCharacters = prompt ('How many characters do you want in your password?');
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  return "please choose a valid number of characters.";
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = alert ('Please enter a valid number');
}

else {
  alert("your password will be" + numericalCharacters + "characters long.");
}

hasLowercase = confirm("Do you want lowercase characters?");
if (hasLowercase){
var turnToLowercase = alert("Your password will have lowercase characters");
} 

else{
  alert ("Your password will not have lowercase characters");
}

hasUppercase = confirm('Do you want uppercase characters?');
if (hasUppercase){
  alert ("Your password will have uppercase characters.");
}
else {
  alert("Your password will not have uppercase characters")
}

hasNumbers = confirm("Do you want to use numbers?");
if (hasNumbers) {
  alert("Your password will have numbers");
}
else {
  alert ("Your password will not have numbers");
}

hasSpecial = confirm("Do you want special characters?");
if (hasSpecial) {
  alert("Your password will have special characters");
}
  else {
    alert("Your password will not have special characters");
  }

if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial){
  return "Please select at least one character type";
};



if (hasLowercase) {
  possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
}
if (hasUppercase){
  possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
}
if (hasNumbers){
  possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
}

let finalPassword = ""
for (let i = 0; i < numberOfCharacters; i++) {
  let rng = [Math.floor(Math.random() * possibleCharacters.length)];
  finalPassword = finalPassword + possibleCharacters[rng];
}
return finalPassword;
}



var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
