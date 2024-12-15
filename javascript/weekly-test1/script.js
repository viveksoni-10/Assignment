// weekly-test 1 : module_4

// problem-1: string reverse
// function reverseString(str){
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//         return reversed;
// }
// let ouput = reverseString("my name is vivek kumar");
// console.log(ouput);

// problem-2: check Anagram

// function isAnagram(s1, s2) {
//     if (s1.length !== s2.length) {
//         return false;
//     }

//     let obj = {};
//     for (let char of s1) {
//         // if (!obj[char]) {
//         //     obj[char] = 0;
//         // }
//         // obj[char] = obj[char] + 1;

//         // other way of above!
//         obj[char] = (obj[char] || 0) + 1;
//     }

//     let obj1 = {};
//     for (let char of s2) {
//         // if (!obj1[char]) {
//         //     obj1[char] = 0;
//         // }
//         // obj1[char] = obj1[char] + 1;

//         // other way of above!
//         obj1[char] = (obj1[char] || 0) + 1;
//      }

//     for (let key in obj) {
//         if (obj[key] !== obj1[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log("vivek vivek", isAnagram("vivek", "vivek"));
// console.log("night think", isAnagram("night", "think"));


// problem-3: find Intersection

// function findIntersection(arr1, arr2){
//     // create an empty array to store the intersection
//     let intersection = [];
//     // loop through the first array
//     for (let i = 0; i < arr1.length; i++) {
//     //Check if the current element are exit in arr2
//         if (arr2.includes(arr1[i])) {
//         // if the element is found, add it to the intersection array  
//            intersection.push(arr1[i]);
//         }
//     }
//     return intersection;
// }
// let arr1 = [1,2,2,3,4,4];
// let arr2 = [1,3,2,5,6,4];
// console.log(findIntersection(arr1, arr2));

//problem-4: check palindrome

// function isPalindrome(str) {
//     for(let i = 0; i <= str.length/2; i++){
//         if(str[i] != str[str.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("vivek")); //false

//problem-5: rotateArray

// function rotateArrayInPlace(arr, k) {
//     const n = arr.length;
//     k = k % n; // Handle cases where k is larger than the array length

//     for (let i = 0; i < k; i++) {
//         const lastElement = arr.pop(); // Remove the last element
//         arr.unshift(lastElement); // Add it to the front
//     }

//     return arr;
// }
// function rotateArrayInPlace(arr, k) {
//     const n = arr.length;
//     k = k % n; // Handle cases where k is larger than the array length

//     for (let i = 0; i < k; i++) {
//         const lastElement = arr.pop(); // Remove the last element
//         arr.unshift(lastElement); // Add it to the front
//     }

//     return arr;
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(rotateArrayInPlace(arr, 2));


//problem-6 :  compressString

// function compressString(str) {
//     let compressed = '';
//     let count = 1;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++;
//         } else {
//             compressed += str[i] + count;
//             count = 1;
//         }
//     }
//     return compressed.length < str.length ? compressed : str;
// }
// console.log(compressString("aabcccccaaa"));


//problem-7 : findPairWithSum

// function findPairWithSum(arr, target) {
    //     const seen = new Set();
    
    //     for (let num of arr) {
//         const complement = target - num;
//         if (seen.has(complement)) {
//             return [complement, num];
//         }
//         seen.add(num);
//     }
//     return null; // No pair found
// }
// console.log(findPairWithSum([1, 2, 3, 4, 5]));


//problem-8:  longestSubstringWithoutRepeating

// function longestSubstringWithoutRepeating(str) {
//     let maxLength = 0;
//     let start = 0;
//     const seen = new Map();

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         if (seen.has(char) && seen.get(char) >= start) {
//             start = seen.get(char) + 1;
//         }

//         seen.set(char, i);
//         maxLength = Math.max(maxLength, i - start + 1);
//     }

//     return maxLength;
// }
// console.log(longestSubstringWithoutRepeating("abcabcbb"));


