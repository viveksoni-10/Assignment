// // function printNumberPyramid(rows) {
// //     for (let i = 1; i <= rows; i++) {
// //         // Print leading spaces
// //         let spaces = '  '.repeat(rows - i);
// //         let numbers = '';

// //         // Print numbers from 1 to 2*i-1
// //         for (let j = 1; j <= 2 * i - 1; j++) {
// //             numbers += j + ' ';
// //         }

// //         // Print the row with leading spaces and numbers
// //         console.log(spaces + numbers.trim());
// //     }
// // }

// // // Call the function with the number of rows
// // printNumberPyramid(5);



// // function printNumberPyramid(rows) {
// //     // Print the increasing part of the pattern
// //     for (let i = 1; i <= rows; i++) {
// //         let numbers = '';
// //         for (let j = 1; j <= i; j++) {
// //             numbers += j + ' ';
// //         }
// //         console.log(numbers.trim());
// //     }

// //     // Print the decreasing part of the pattern
// //     for (let i = rows - 1; i >= 1; i--) {
// //         let numbers = '';
// //         for (let j = 1; j <= i; j++) {
// //             numbers += j + ' ';
// //         }
// //         console.log(numbers.trim());
// //     }
// // }

// // // Call the function with the number of rows for the pattern
// // printNumberPyramid(5);


// function printDecreasingNumberPattern() {
//     const totalLines = 5; // Total number of lines to print

//     // Print the top half of the pattern
//     for (let i = totalLines; i >= 1; i--) {
//         let numbers = ' ';
//         // Print numbers from 1 to (i * 2 - 1)
//         for (let j = 1; j <= (i * 2 - 1); j++) {
//             numbers += j + '  ';
//         }
//         console.log(numbers.trim());
//     }
// }

// // Call the function to print the pattern
// printDecreasingNumberPattern();




// var removeDuplicates = function (s) {
//     // Split the string into an array of characters
//     s = s.split("");
//     let i = 0, j = 1;

//     // Loop through the array
//     while (j < s.length) {
//         if (s[i] === s[j] && i >= 0) {
//             // If duplicates are found, move j forward and move i back
//             j++;
//             i--;
//         } else {
//             // Otherwise, assign s[j] to s[i+1] and move both pointers forward
//             i++;
//             s[i] = s[j];
//             j++;
//         }
//     }

//     // Join the array back into a string and return the result
//     return s.join("").substr(0, i + 1);
// };
// // Call the function with a string to remove duplicates
// console.log(removeDuplicates("abbaca"));
// console.log(removeDuplicates("vvek"));


// problem-2: check Anagram

function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    let obj = {};
    for (let char of s1) {
        // if (!obj[char]) {
        //     obj[char] = 0;
        // }
        // obj[char] = obj[char] + 1;

        // other way of above!
        obj[char] = (obj[char] || 0) + 1;
    }

    let obj1 = {};
    for (let char of s2) {
        // if (!obj1[char]) {
        //     obj1[char] = 0;
        // }
        // obj1[char] = obj1[char] + 1;

        // other way of above!
        obj1[char] = (obj1[char] || 0) + 1;
     }

    for (let key in obj) {
        if (obj[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}

console.log("vivek vivek", isAnagram("vivek", "vivek"));
console.log("night think", isAnagram("night", "think"));


