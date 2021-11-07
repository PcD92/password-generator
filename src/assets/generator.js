// start working code
// user input variable:
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// start password variable values:
// special characters
character = ["!", "@", "`", "~", "%", "$", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "|", ".", ":", ";", "'", ",", "<", ">", "/", "?"];
// numeric characters
number = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
// alphabetical characters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// space is for uppercase conversion
space = [];
// choices declartes outside statement id statement so they can be concatenared upon condition
var choices;
// convers letters to uppercase
var toUpper = function(x) {
    return x.toUpperCase();
};
// creates a variable for uppercase copnversion
alphabet2 = alphabet.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function() {
    ps = gneratePassword();
    document.getElementById("password").placeholder = ps;
});

// start fuction to gnerate password
function gneratePassword() {
    // ask for user inout
    enter = parseInt(prompt("How many characters would you like your? Choose between 8 and 128."));
    // first if statement for user validation
    if (!enter) {
        alert("this needs a value.");

    } else if (enter < 8 || enter > 128) {
        // validates user's input
        // start user's input prompts
        enter == parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // continues once user's input is validated
        confirmNumber = confirm("Will it contain numbers?");
        confirmCharacter = confirm("Will it contain speacial characters?");
        confirmUppercase = confirm("Will it contain Uppercase letters?");
        confirmLowercase = confirm("Will it contain Lowercase characters?");
    };

    // else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
    }

    // first if statement that uses the user's input prompts to determine choices
    // else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, alphabet, alphabet2);
    }

    // else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alphabet2);
    } else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alphabet);
    } else if (confirmCharacter && confirmUppercase && confirmLowercase) {
        choices = character.concat(alphabet, alphabet2);
    } else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = character.concat(alphabet, alphabet2);
    }

    // else if for 2 positive options
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);
    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alphabet);
    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alphabet2);
    } else if (confirmNumber && confirmUppercase) {
        choices = character.concat(alphabet2);
    }

    // variable space to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alphabet2);
    };

    // password variable is an array placeholder for user generated length
    var password = [];

    // start random selection variables:
    // random selection for all the variables:
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    // joins the password array and coverts to string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function() {
    copyPassword();
});
// This copies the password value 
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}