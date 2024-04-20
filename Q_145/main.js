// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.
function callCallback(callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    callback.apply(void 0, args);
}
function exampleCallback1(name, age) {
    console.log("Hello, my name is ".concat(name, " and I am ").concat(age, " years old."));
}
function exampleCallback2(name, age) {
    console.log("Do You know your friend name is ".concat(name, " and his age is ").concat(age));
}
callCallback(exampleCallback1, "Aisha", 40);
callCallback(exampleCallback2, "Maadeha", 22);
