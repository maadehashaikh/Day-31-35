// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
          resolve(randomNumber); 
      } else {
          reject("Random number is less than or equal to 0.5"); 
      }
  }, 1000); 
});
myPromise
  .then((result) => {
      console.log("Promise resolved with result:", result);
  })
  .catch((error) => {
      console.log("Promise rejected with error:", error);
  });
