//Explain the concept of the event loop in JavaScript with an example.
console.log("Start");
setTimeout(function () {
    console.log("Async operation complete");
}, 0);
console.log("End");
