function fibonacciSeries(terms) {
    let fibonacciArray = [];
    let num1 = 0, num2 = 1;
    
    fibonacciArray.push(num1);
    fibonacciArray.push(num2);
  
    for (let i = 2; i < terms; i++) {
      let nextNum = num1 + num2;
      fibonacciArray.push(nextNum);
      num1 = num2;
      num2 = nextNum;
    }
  
    return fibonacciArray;
  }
  
  function validateInput(input) {
    return input !== '' && /^\d+$/.test(input) && Number.isInteger(parseInt(input)) && parseInt(input) > 0 && parseInt(input) < 100;
  }
  
  function main() {
    do {
      let input;
      do {
        input = prompt("Enter the number of terms in the Fibonacci sequence:");
        if (!validateInput(input)) {
          alert("Error: Please enter a valid integer between 1 and 99.");
        }
      } while (!validateInput(input));
  
      let terms = parseInt(input);
      let fibonacciArray = fibonacciSeries(terms);
  
      // Display in alerts
      alert("Fibonacci series:\n" + fibonacciArray.join(", "));
  
      // Display  console
      console.log("Fibonacci series:");
      console.log(fibonacciArray.join(", "));
  
      // Ask user if they want to continue
      let continueProgram = confirm("Press OK to generate another sequence, or Cancel to exit.");
      
      if (!continueProgram) {
        console.log("Exiting program.");
        break; // Exit the loop if user cancels
      }
    } while (true); // Loop indefinitely until user chooses to exit
  }
  
  // Call the main function
  main();
  