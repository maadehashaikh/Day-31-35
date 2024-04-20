// Question 146: Show an example of a callback function used to filter an array of numbers.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function. This method is commonly used to search through an array and create a subset of it based on certain criteria.
var numbers = [100, 200, 300, 400];
var filteredNumbers = numbers.filter(function (number) { return number >= 200; });
console.log(filteredNumbers);
