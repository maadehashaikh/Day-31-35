// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber); // Resolve the Promise with a random number
        }
        else {
            reject("Random number is less than or equal to 0.5"); // Reject the Promise
        }
    }, 1000); // Resolve or reject after 1 second
});
myPromise
    .then(function (result) {
    console.log("Promise resolved with result:", result);
})
    .catch(function (error) {
    console.log("Promise rejected with error:", error);
});
