// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
// Explain & TIP: console.log() is an invaluable tool for developers to monitor the values of variables, the flow of execution, and to understand the state of their program at various points in time, especially within loops where values change with each iteration.
var numb = 5;
for (var i = 1; i <= 10; i++) {
    var tableNumb = numb * i;
    console.log("".concat(numb, " X ").concat(i, " = ").concat(tableNumb));
}
