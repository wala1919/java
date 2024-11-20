function findMax(arr) {
    return Math.max(...arr);
  }

function findMin(arr) {
    return Math.min(...arr);
  }

console.log(findMax([1, 2, 3, 4, 5])); 
console.log(findMin([1, 2, 3, 4, 5])); 

//Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }

console.log(sumArray([1, 2, 3, 4, 5]));

//Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, condition) {
    return arr.filter(condition); 
  }

console.log(filterArray([1, 2, 3, 4, 5], num => num > 2));
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0));