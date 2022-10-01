// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberCheck;
var length;
var characterCheck;
var lowerCheck;
var upperCheck;
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var trueUpperCase = upperCase.split(',');
var specialCharacter = "!,@,#,$,%,^,&,*,(,),-,_,=,+,/,|,{,},[,]";
var trueSpecialCharacter = specialCharacter.split(",");
var number = "1,2,3,4,5,6,7,8,9,0";
var trueNumber = number.split(","); //after writing it out the first time i realized I'm lazy and this is an easier way to make arrays

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
function generatePassword(){
  choice = [];
  length = parseInt(prompt("How long do you want your password to be (Number of charactesr)")) //figure out length of password
  if (!length){
    alert("This needs a value");
  }
  else if (length < 8 || length > 128) {
    length = parseInt(prompt("You must choose between 8 and 128"));
  }
  else {
    //gather requirements for password
    if (confirm("Will this contain Numbers?")){
    choice = choice.concat(trueNumber);} //it took me like 10 minutes to realize i had to have curly brackets not parenthesis.
    if (confirm("Will this contain Special Characters?")){
    choice = choice.concat(trueSpecialCharacter);
    }
    if (confirm("Will there be Uppercase Letters?")){
      choice = choice.concat(trueUpperCase);
    }
    if (confirm("Will there be Lowercase Letters?")){
      choice = choice.concat(lowerCase);
    }
  };
  for(var i = 0; i <= length; i++) {
    var randomIndex = Math.floor(Math.random() * trueNumber.length);
    password = password + choice[randomIndex];
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
