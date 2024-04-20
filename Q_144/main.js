// Question 144: Explain the use of the Promise.all() method with an example.
// Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved or when the iterable contains no Promises. It is rejected if any of the passed Promises are rejected. This method is useful for aggregating the results of multiple promises.
var promise1 = Promise.resolve("shaikh");
var promise2 = "Maadeha";
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "web developer");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
