// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Password button functionality 
document.getElementById("generate").addEventListener("click", function () {

  // Setting password length variable prompt
  var pwdLength = prompt("Choose password length (must be between 8 and 128 characters).");

  // Setting lower/upper character, number, and special character variables
  var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
  var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var num = '0123456789';
  var sym = '!@#$%^&*=-_';

  // Setting generated password variable to the html id password-text
  var generatedPassword = document.getElementById("password");

  // Setting empty string password variable
  var password = "";

  //If password is less than 8 or more than 128 user will get an invalid length alert
  if (pwdLength >= 8 && pwdLength <= 128) {
      var characters = "";

      // Created a password requirements object to hold all of the user confirm prompts
      // The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
      // A confirm box is often used if you want the user to verify or accept something.
      var pwdRequirements = {
          pwdSpecialChar: confirm("Would you like a special character?"),
          pwdNumeric: confirm("Would you like a numeric character?"),
          pwdLowerCase: confirm("Would you like a lowercase character?"),
          pwdUpperCase: confirm("Would you like a uppercase character?"),
      }

      // Ternary operator used to capture if user prompts are equal to true, if true add the possible characters to the characters variable
      // The Ternary operator assigns a value to a variable based on a condition.
      // shortcut for the if statement
      // condition ? exprIfTrue : exprIfFalse
      pwdRequirements.pwdSpecialChar == true ? characters += sym : '';
      pwdRequirements.pwdNumeric == true ? characters += num : '';
      pwdRequirements.pwdLowerCase == true ? characters += lowerChar : '';
      pwdRequirements.pwdUpperCase == true ? characters += upperChar : '';


      // Password function takes the length and characters
      function password(length, newCharacters) {
          var pwd = '';
          for (var i = 0; i < length; i++) {
              pwd += newCharacters.charAt(Math.floor(Math.random() * newCharacters.length));
          }
          return pwd;
      }

      generatedPassword.innerHTML = password(pwdLength, characters);

  }
  else{
    alert("Your password does not meet the length requirements!")
  }


});