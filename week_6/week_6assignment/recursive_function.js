// Create a recursive function

// Create a recursive function that counts up to 10. Invoke the function with different start numbers 
// as the arguments that are passed into the function. The function should run until the value is greater than 10.
function countUp(num) {
  if (num > 10) {
    return;
  }
  console.log(num);
  countUp(num + 1);
}

countUp(1); // will output numbers 1 to 10
// countUp(5); // will output numbers 5 to 10


// Set timeout order
// Use the arrow format to create functions that output values one and two to the console. 
//Create a third function that outputs the value three to the console, and then invokes the first two functions.
const func1 = () => console.log("one");
const func2 = () => console.log("two");
const func3 = () => {
  console.log("three");
  func1();
  func2();
};
const func4 = () => {
  console.log("four");
  setTimeout(() => func1(), 0);
  setTimeout(() => func3(), 0);
};

func4(); // will output: "four", "one", "three", "two", "one"



// // The program first defines a function counter which takes an integer 
// argument i and recursively calls itself with i + 1 until i is equal to or greater than 10. 
// When i is less than 10, it logs the current value of i to the console.
// When main(0) is called, the counter function is invoked with an initial value of 0. As a result, the numbers from 0 to 9 are logged to the console.
// After that, the program defines four functions one, two, three, and four.
// When four() is called, it logs the string 'four' to the console and then schedules the execution of the function one using setTimeout() with a delay of 0 milliseconds. It then calls the function three.
// When three() is called, it logs the string 'three' to the console and then calls functions one and two.
// Since one was scheduled to execute with a delay of 0 milliseconds, it is added to the event queue, and its execution is deferred until the current call stack has finished executing. Therefore, the strings 'four' and 'three' are logged to the console before 'one' and 'two'.
// Finally, when one() and two() are called, they log the strings 'one' and 'two' to the console, respectively.








