// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
// Synchronous code
console.log("Start");

function synchronousFunction() {
  console.log("Synchronous function");
}

synchronousFunction();

console.log("End");

// Asynchronous code with callback
console.log("Start");

function asynchronousFunction(callback) {
  setTimeout(function() {
    console.log("Asynchronous function");
    callback();
  }, 2000); // Simulate a delay of 2 seconds
}

asynchronousFunction(function() {
  console.log("Callback executed");
});

console.log("End");
