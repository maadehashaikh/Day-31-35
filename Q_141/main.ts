// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
// Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to understand and debug.

const fetchSomething = () =>{
  console.log("fetching data from API");
} 

async function fetchData() {
  const data = await fetchSomething();
  console.log(data);
}
console.log(
  "The 'await' keyword is use to wait to pause the flow of program untill we do not get any data from fetchSomething function ."
);