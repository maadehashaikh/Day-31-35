// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.

function callCallback(callback, ...args) {
  callback(...args);
}
function exampleCallback1(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
function exampleCallback2(name, age) {
  console.log(`Do You know your friend name is ${name} and his age is ${age}`);
}
callCallback(exampleCallback1, "Aisha", 40);
callCallback(exampleCallback2,"Maadeha",22);
