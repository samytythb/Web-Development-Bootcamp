var numbers = [3, 56, 2, 48, 5];
num1 = numbers.map((number) => {
  return number * 2;
});
console.log(num1);
function triple(number) {
  return number * 3;
}
num2 = numbers.map(triple);
console.log(num2);
// get each element in array then excute in callback function. create a new array ( not change old array)
num3 = numbers.filter((number) => {
  return number > 10;
});
console.log(num3);
// like map() but return a new array filter with condition in callback function
total = 0;
number4 = numbers.reduce((total, number) => {
  console.log(total);
  console.log(number);
  return total + number;
});
console.log(number4);
console.log(total);
// return a new value . pass two paramater : accumulator and currentNumber.
const findNumber = numbers.find((number) => {
  return number > 10;
});
console.log(findNumber);
// return the first value suitable with condition in callback function
const indexNumber = numbers.findIndex((number) => {
  return number > 10;
});
console.log(indexNumber);
// like find() function but return the fist index has value fit instead of the first value fit
