// myName.length;
// myName.slice(0, n);
// myName = myName.toUpperCase();
// myName = myName.toLowerCase();
function bmiCalculator(weight, height) {
  var bmi = weight / (heigh * height);
  var interpretation;
  if (bmi > 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }
  return interpretation;
}
