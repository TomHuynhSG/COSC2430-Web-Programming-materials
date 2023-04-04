function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    var message;

    if (bmi < 18.5) {
        message = "Your BMI is " + Math.round(bmi) + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "Your BMI is " + Math.round(bmi) + ", so you have a normal weight.";
    } else {
        message = "Your BMI is " + Math.round(bmi) + ", so you are overweight.";
    }

    return message;
}

var weight = parseFloat(prompt("What is your weight in kilograms?"));
var height = parseFloat(prompt("What is your height in meters?"));

console.log(bmiCalculator(weight, height));
