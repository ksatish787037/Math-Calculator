function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    // var result = num1 + num2;
    var operation = document.getElementById("operation").value;
    // var result;

    switch(operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
    }

    document.getElementById("result").value = isNaN(result) ? "Invalid input" : result;
}