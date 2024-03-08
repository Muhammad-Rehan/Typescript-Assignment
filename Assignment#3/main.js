"use strict";
// Q3-Name Cases: Store a person’s name in a variable, and then print that person’s name in
// lowercase, uppercase, and titlecase.
const personName = 'muhammad rehan';
const upperCase = personName.toLowerCase();
const lowerCase = personName.toUpperCase();
const titleCase = personName.charAt(0).toUpperCase() + personName.slice(1, 8) + " " + personName.charAt(9).toUpperCase() + personName.slice(10);
console.log(upperCase);
console.log(lowerCase);
console.log(titleCase);
