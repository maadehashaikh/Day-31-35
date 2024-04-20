// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
// Explain & TIP: setTimeout() is a built-in JavaScript function that allows you to execute a piece of code after a specified delay. It's especially useful for scheduling tasks, animations, or delaying execution without blocking the main thread.
console.log("We have Started the set time out method ");
setTimeout(function () {
    console.log("This message will be printed after 2 seconds");
}, 2000);
console.log("End of the method");
