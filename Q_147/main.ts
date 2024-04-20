//Question 147: Explain how to handle errors in a callback pattern.
// Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution.

function asyncOperation(data, callback) {
  setTimeout(() => {
    const error = new Error("Something went wrong");
    callback(error, null);
  }, 1000);
}
function callbackFunction(err, result) {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log("Result:", result);
}
asyncOperation("someData", callbackFunction);
