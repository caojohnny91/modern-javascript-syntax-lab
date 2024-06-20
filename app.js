// Review: Array.prototype.map()

// The Array.prototype.map() method returns a new array with the results of calling a function on every element in an existing array. This allows for the transformation of each element inside the array, without altering the original.
// The Array.prototype.map() method is used to iterate over array1. For every element in array1, it will call upon the provided function. When the function is called upon, it receives the current element being processed as an argument. The value returned from the function will take the place of the original element in the new array.

// Array.prototype.map() returns a new array with altered values. It does not alter the original array.
// const array1 = ['vanilla', 'chocolate', 'strawberry'];

// const array2 = array1.map((currentElement) => {
//   return currentElement + ' ice cream';
// });

// console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// Exercise 1: Applying Array.prototype.map()
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

const multBy2 = nums.map((currentNum) => {
  return currentNum * 2;
});
console.log(multBy2);

// ----------------------------------------------------------------------------

// Review: Array destructuring
// Array destructuring in JavaScript is a way of unpacking the elements of an array. With array destructuring, we can extract elements from an array and store them in variables with a single line of code.

// When we destructure an array, the elements are matched positionally with the variables we define, meaning the order in which we declare variables corresponds with the order of elements in the array.

// const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

// const [firstPet, secondPet] = petsArray;

// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'

// In the example above, the first two elements of petsArray are unpacked into firstPet and secondPet.
// 💡 You have full control of the variable names!

// Exercise 2: Array Destructuring
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

const [firstPizzaTopping, secondPizzaTopping] = pizzaToppings;

console.log(firstPizzaTopping);
console.log(secondPizzaTopping);

// ----------------------------------------------------------------------------

// Review: Object destructuring
// Destructuring can also be applied to objects. With object destructuring, we can extract properties from an object. Instead of accessing properties through dot notation or bracket notation, the values of specific properties in an object can be assigned to variables.

// const person = {
//   name: 'Alex',
//   role: 'Software Engineer',
// };

// Object destructuring:
// const { name, role } = person;

// console.log(name); // 'Alex'
// console.log(role); // 'Software Engineer'

// Equivalent in traditional dot notation:
// console.log(person.name); // 'Alex'
// console.log(person.role); // 'Software Engineer'

// In the example above, the person object is deconstructed to extract the name and role properties. This approach allows us to access the values of name and role without having to use dot notation for each property.

// 🚨 Unlike array destructuring, where elements are matched based on their position, the variables created in object destructuring, such as const { name, role }, need to match the names of existing properties in the object.

// Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: "Audi",
  model: "q5",
};

const { make, model } = car;
console.log(make);
console.log(model);

// ----------------------------------------------------------------------------

// Review: Applying the spread operator on arrays
// The spread operator (...) gives us a way to duplicate or combine arrays. Instead of manually copying elements from one array to another using loops, the spread operator allows us to directly copy the elements of one array into another.

// const originalArray = [1, 2, 3];
// const duplicateArray = [...originalArray];

// console.log(duplicateArray); // [1, 2, 3]

// In the example above, duplicateArray is an entirely separate array produced by copying the contents of originalArray.

// This differs from simply assigning one array to another, which only creates a reference, not a copy:

// const originalArray = [1, 2, 3];
// const referenceArray = originalArray; // referenceArray is now a reference to originalArray

// referenceArray.push(4); // Modifying referenceArray also modifies originalArray
// console.log(originalArray); // [1, 2, 3, 4]
// Copy
// The spread operator prevents this issue by ensuring the new array is an independent copy that shares no references with the original. This can be useful when we need to maintain the immutability of the original array.

// The spread operator can also merge multiple arrays into one:

// const fruits = ['apple', 'orange', 'banana'];
// const vegetables = ['broccoli', 'carrot', 'spinach'];

// const fruitsAndVegetables = [...fruits, ...vegetables];

// console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']
// Copy
// 🚨 When merging multiple arrays, be sure to include the spread operator. Not doing so can result in unintentional nesting.

// Exercise 4: Applying the spread operator on arrays
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings);

// ----------------------------------------------------------------------------

// Review: Applying the spread operator on objects
// The spread operator can also be applied to objects:

// const originalObject = {
//   foo: 'Hello',
//   bar: 100,
// };

// const clonedObject = { ...originalObject };
// console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }
// Copy
// In the example above, we can see how the properties of originalObject have been copied over into a new object called clonedObject.

// The use of the spread operator here differs significantly from direct assignment:

// const originalObject = {
//   foo: 'Hello',
//   bar: 100,
// };

// const clonedObject = originalObject;
// clonedObject.foo = 'Goodbye';

// console.log(originalObject); // { foo: 'Goodbye', bar: 100 }

// The example above demonstrates a pitfall of attempting to clone an object without the spread operator. When clonedObject is assigned originalObject directly, it doesn’t actually create a new, independent object. Instead, clonedObject becomes a reference to originalObject. This means any changes made to clonedObject also affect originalObject, as they both point to the same data.

// Like with Arrays, this issue can be remedied when we apply the spread operator:

// const originalObject = {
//   foo: 'Hello',
//   bar: 100,
// };

// Copy the properties of originalObject:
// const clonedObject = { ...originalObject };

// Update the properties of clonedObject:
// clonedObject.foo = 'Goodbye';
// clonedObject.bar = 0;

// console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
// console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }

// With the spread operator, clonedObject is a brand new object, with its own separate copy of the data from originalObject. Now, modifying clonedObject will not impact the originalObject

// Exercise 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//   make: 'Audi',
//   model: 'q5',
// };

// Change the `model` property of `myCar` to 'q7'. Log both objects.

const myCar = { ...car };

myCar.model = "q7";
console.log("Original: ", car);
console.log("Cloned: ", myCar);

// ----------------------------------------------------------------------------

// Review: Dynamic keys in objects
// Through bracket notation, variables and expressions can be used as dynamic keys in an object. Dynamic keys can be used to create, access, and modify properties in an object. Dynamic keys enhance our ability to access data. This approach is particularly useful in scenarios where key names are not known ahead of time or when they need to be computed on the fly. It also allows for more concise and readable code, avoiding the need for additional steps when assigning properties to objects.

// Take for example, the use of selectedFruit as a dynamic key in the codeblock below:

// const fruitInventory = {
//   apples: 2,
//   oranges: 4,
// };

// const selectedFruit = 'apples'; // Variable as a dynamic key
// const selectedFruitCount = fruitInventory[selectedFruit];

// console.log(selectedFruitCount); // 2

// This technique can be extended to the creation of objects, where property names are determined dynamically:

// const fruitType = 'bananas'; // Variable as a dynamic key

// const fruitInventory = {
//   [fruitType]: 5,
// };

// console.log(fruitInventory); // { bananas: 5 }

// Using square brackets ([]) around fruitType in the object declaration tells JavaScript to use the variable’s value as the property name. Without the brackets, the string 'fruitType' would be used as the key, rather than its value ('bananas').

// Exercise 6: Dynamic keys in objects
// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

const userProfile = {};

const propertyName = "username";

userProfile[propertyName] = "Johnny";
console.log(userProfile);

// -------------------------------------------------------------------------------

// Review: import and export
// In JavaScript, the import and export syntax allows us to share code between different files. This is a more modern approach compared to the require and module.exports syntax used in CommonJS.

// With export, you can make functions, objects, or primitives available for use in other files.

// There are two main types of exports:

// Named exports: For exporting multiple items from a file:
// export const myNumber = 123;
// export const myString = 'Hello';
// Copy
// Default exports: For exporting a single item from a file:
// export default function superCoolFunction() {
//   /* ... */
// }

// 🏆 It’s possible to mix default and named exports in a single module, but it’s a best practice to stick to one style for consistency and clarity.

// Using import, you can bring those exported items into another file.

// Importing named exports:
// import { myNumber, myString } from './myData.js';

// Importing a default export:
// import superCoolFunction from './superCoolFunction.js';

// You can also import all named exports as a single object, which is useful when dealing with modules that export several items:

// import * as MyData from './myData.js';
// console.log(MyData.myNumber);
// console.log(MyData.myString);

// This allows for more organized code by separating concerns into modules.

// Exercise 7: Import and Export
// Follow the steps below for some practice with import and export. Update the values for default, age, and job accordingly:

// Initialize a node project:
// npm init -y

// Add the following property to package.json:
// "type":"module",

// Create two files: exportingFile.js and importingFile.js:
// touch exportingFile.js
// touch importingFile.js

// In exportingFile.js add the following:
// export default 'Matt';

// In importingFile.js add the following:
// import name from './exportingFile.js';
// console.log(name);

// Run importingFile.js like so:
// node importingFile.js

// To export additional values, update exportingFile.js like so:
// export default 'Matt';
// export const age = 43;
// export const job = 'programmer';

// These additions can be imported by updating importingFile.js like so:

// import name, { age, job } from './exportingFile.js';
// console.log(name, age, job);

// ----------------------------------------------------------------------------

// Review: Default parameters
// Default parameters are just that - default values for parameters. These defaults are applied when no value is passed for those parameters during a function call.

// Take this example:

// function addThreeNumbers(numA, numB, numC) {
//   return numA + numB + numC;
// }

// addThreeNumbers(2);

// This will return NaN, because the value of numB and numC are both undefined. Let’s apply some defaults to the numB and numC parameters:

// function addThreeNumbers(numA, numB = 2, numC = 1) {
//   return numA + numB + numC;
// }

// addThreeNumbers(2);

// Now this function will return the number 5. What if we also give a default to numA?

// function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
//   return numA + numB + numC;
// }

// addThreeNumbers(2);

// This function is still going to return the number 5. The default value of 1 on numA will be overridden by the passed in value of 2.

// Exercise 8: Default parameters
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

const catSentence = (noun, adjective) => {
  return `The ${noun} is ${adjective}.`;
};
catSentence("cat", "white");
console.log(catSentence("cat", "white"));

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
