function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let x = toCelsius(77);
// String concatenation
let text = "The temperature is " + x + " Celsius";

// Or you can use template literal like so
// let text = `The temperature is ${x} Celsius`;

// Or You can use the function directly, as a variable value:
// let text = "The temperature is " + toCelsius(77) + " Celsius";
// let text = `The temperature is ${toCelsius(77)} Celsius`;

