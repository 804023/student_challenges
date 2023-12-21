//ask user their name
let firstName=prompt ("What is your first name?");
let lastName = prompt("What is your last name?");

// update the alert 
alert("Hello " + firstName + " " + lastName);

// ask user how old they are & set age rules (hint: use an if/else statement here)
let age = prompt("How old are you?");
if(age < 14) {
    alert("You are too young to apply. You must be at least 14 years old to apply.");
}
else{
    alert("Welcome!");
}

