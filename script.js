/***** JavaScript one-liners provide concise and efficient solutions for various tasks prioritizing code readability ********/

// Check if a string is an Anagram of another string!
const isAnagram = (string1, string2) => [...string1.toLowerCase()].sort().join(' ') ===[...string2.toLowerCase()].sort().join(' ');

console.log(isAnagram('SILENT', 'listen')); // Output --> true
console.log(isAnagram('Kavya', 'Musugu')); // Output --> false


// Merge two arrays and remove duplicates 
const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

console.log(mergeArrays([1,2,3,3,2,1], [5,1,2,3,4,1,7,8])) // Output --> [1, 2, 3, 5, 4, 7, 8]


// Find the maximum value in an array
const maxNumber = arr => Math.max(...arr);

console.log(maxNumber([123, 12334, 4, 5555555, 33333333, 200009])) // Output --> 33333333


// Get the current date ---> YYYY-MM-DD
const currentDate = () => new Date().toISOString().split('T')[0];

console.log(currentDate()); // Output --> 2023-06-21


// Check if an object is empty 
const isEmpty = obj => Object.keys(obj).length === 0;

console.log(isEmpty({})); // Output --> true
console.log(isEmpty({name: "Kavya"})); // Output --> false


// Check if a string is a palindrome
const isPalindrome = str => str === str.split('').reverse().join('');

console.log(isPalindrome('madam')) // Output --> true


// Generate a random number within a range
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(getRandomNumber(100, 500)); // Output --> 223(random number)


// Find the factorial of a number
const factorial = num => num <= 1 ? 1 : num * factorial(num - 1);

console.log(factorial(5)); // Output --> 120


// Check if a number is prime
const isPrime = num => num > 1 && Array.from({ length: Math.floor(Math.sqrt(num)) }, (_, i) => i + 2).every(x => num % x !== 0);

console.log(isPrime(23)); // Output --> true


// Capitalize the first letter of each word in a string
const capitalizeWords = str => str.replace(/\b\w/g, char => char.toUpperCase());

console.log(capitalizeWords('kavya')); // Output --> Kavya


// Remove all whitespace from a string
const removeWhitespace = str => str.replace(/\s/g, '');

console.log(removeWhitespace('he          llo ')); // Output --> hello