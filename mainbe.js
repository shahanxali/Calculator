// Function to update the calculator display
function updateDisplay(value) {
  document.getElementById("result").value = value;
}

// Variable to store the expression
var expression = "";

// Function to add button value to the expression
function live(buttonValue) {
  expression += buttonValue;
  updateDisplay(expression);
}

// Function to handle logarithm operation
function writelog() {
  expression += "log(";
  updateDisplay(expression);
}



// Function to calculate the result
function calculate() {
  try {
    var result;

    if (expression.includes("log(")) {
      // Evaluate logarithm separately if it is present in the expression
      var logIndex = expression.lastIndexOf("log(");
      var logValue = expression.substring(logIndex + 4, expression.length - 1); // Extract the value inside "log()"
      result = Math.log(parseFloat(logValue));
    }
    else if (expression.includes("^")) {
      // Evaluate exponentiation separately if it is present in the expression
      var powerIndex = expression.lastIndexOf("^");
      var base = expression.substring(0, powerIndex); // Extract the base value before "^"
      var exponent = expression.substring(powerIndex + 1); // Extract the exponent value after "^"
      result = Math.pow(parseFloat(base), parseFloat(exponent));
    } 

    
    
    

    else {
      result = eval(expression);
    }

    expression = result.toString();
    updateDisplay(result);
  } catch (error) {
    updateDisplay("Error");
  }
}

// Function to clear the display
function clearDisplay() {
  expression = "";
  updateDisplay("");
}

// Function to delete one character from the expression
function deleteCharacter() {
  expression = expression.slice(0, -1);
  updateDisplay(expression);
}



// Function to handle keyboard input
function handleKeyPress(event) {
  const key = event.key;
  
  switch (key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
      live(key);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case "(":
    case ")":
      live(key);
      break;
    case "^":
      power();
      break;
    case "Enter":
      calculate();
      break;
    case "Backspace":
      deleteCharacter();
      break;
      case "l":
        
        writelog();
        
        break;
  }
}

// Add event listener to listen for keydown events
document.addEventListener("keydown", handleKeyPress);