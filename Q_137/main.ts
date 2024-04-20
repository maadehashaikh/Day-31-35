// Question 137: Implement a try-catch block to handle potential errors in a block of code.
// Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.

const arr = ["mango", "banana", "pineapples", "kiwi", "oranges"];
try {
    for (let i = 0; i < arr.length + 1; i++) {
        if (i === arr.length) {
            throw new Error("Index out of bounds");
        }
        console.log(arr[i]);
    }
} catch (error) {
    console.log("An error occurred:", error.message);
}


