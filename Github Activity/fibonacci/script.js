function fibonacciSeries(terms) {
    let fibonacciArray = [];

    // Initialize the first two Fibonacci numbers
    let num1 = 0, num2 = 1;

    // Add the first two numbers to the array
    fibonacciArray.push(num1);
    fibonacciArray.push(num2);

    // Calculate and add the remaining Fibonacci numbers
    for (let i = 2; i < terms; i++) {
        let nextNum = num1 + num2;
        fibonacciArray.push(nextNum);
        num1 = num2;
        num2 = nextNum;
    }

    // Return the Fibonacci series array
    return fibonacciArray;
}

// Function to validate user input
function validateInput(input) {
    // Check if input is a non-empty string containing only digits
    return input !== '' && /^\d+$/.test(input) && Number.isInteger(parseInt(input)) && parseInt(input) > 0 && parseInt(input) < 100;
}

// Main function
function main() {
    // Prompt the user to enter the number of terms
    let input;
    do {
        input = prompt("Enter the number of terms in the Fibonacci sequence:");
        if (!validateInput(input)) {
            alert("Error: Please enter a valid integer between 1 and 99.");
        }
    } while (!validateInput(input));

    // Convert input to an integer
    input = parseInt(input);

    // Call the fibonacciSeries function and store the result
    let fibonacciArray = fibonacciSeries(input);

    // Print the Fibonacci series
    console.log("Fibonacci series:");
    console.log(fibonacciArray.join(", "));
}

// Call the main function
main();
