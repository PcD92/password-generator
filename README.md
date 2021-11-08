# password-generator

# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS powered by your JavaScript code. It has a clean and polished user interface and is responsive, which ensures that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at some [examples of special characters on the OWASP Foundation website](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

Summary
HTML and CSS and Javascript documents create a random password generator
This project demonstrates the use of Javascript to make changes to a HMTL document

The user will be prompted to choose from the following password criteria: 8 and 128 characters
The user will recieve a confirm for:
Password containing special characters, numbers, and uppercase
Either 4 variables individual ones, or 3 with toLowerCase to Uppercase conversion
This will need to randomly generate a selection or randomly select array data, so math.random and math.floor will need to be used.
The application should validate user input and ensure that at least one character type is selected.
If, else if statement
Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.
Event listener will determine the password output with function to populate the value into the test area.
 
The following webpage demonstrates the application functionality:
https://pcd92.github.io/password-generator/

![An app window with the label Password Generator, an input field labeled Your Secure Password, and a Generate Password button.]