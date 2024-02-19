/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

// function doesKeyExist(obj, key) {
//   // Your code here
//   // return Object.keys(obj).filter((key) => obj[key] === value);
//   if (Object.keys(obj).filter((val) => obj[val] === key)) {
//     return true;
//   } else {
//     return false;
//   }
// }

function doesKeyExist(obj, key) {
  // Loop through the keys of the object
  for (let objKey in obj) {
    // Check if the current key matches the provided key
    if (objKey === key) {
      // If there's a match, return true immediately
      return true;
    }
  }
  // If no match was found after looping through all keys, return false
  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
