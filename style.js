// Question 1
function celsiusToFahrenheit(celsius) {
    return ((celsius*9/5)+32);      // Fahrenheit=(Celsius×9/5​)+32
  }
console.log(celsiusToFahrenheit(0)); // 32 Fahrenheit
console.log(celsiusToFahrenheit(25)); // 77 Fahrenheit


// Question 2
function isEven(num) {
    return (num%2 === 0);
  }
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false

// Question 3
function sum(a, b) {
    return (a+b);
  }
  console.log(sum(3, 4)); // 7 is the result
  console.log(sum(10, 20)); // 30 is the result

// Question 4
function findSmallestNum(arr) {
    return (Math.min(...arr))
  }
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5

// Question 5


 



// Question 6
function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"


// Question 7
function isArrayEmpty(arr) {
  return arr.length===0;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false

// Question 8
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (i=1; i<=num; i++ ){
    result *= i;
  }
  return result;
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040


// Question 9
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"


// Question 10
function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"

// Question 11
function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5

// Question 12
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

// Question 13
function getLastElement(arr) {
  let last =arr.pop();
  return last;
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"

// Question 14
function getFirstCharacter(str) {
  let one =str.slice(0,1)
  return one;
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"

// Question 15
function sumArray(arr) {
  let Total =0;
  for ( i=0; i<arr.length; i++){
    Total +=arr[i];
  }
  return Total;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5