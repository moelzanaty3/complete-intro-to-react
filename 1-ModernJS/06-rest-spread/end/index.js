// Rest & Spread operators
// 2 names for three dots that look the same

// you can use ES6 rest arguments,
// which are the three dots before a parameter
// The dots literally mean “gather the remaining parameters into an array”.
function printArgs(...args) {
  console.log(args);
}
printArgs(1, 2, 3); //? [1, 2, 3]

// We can choose to get the first parameters as variables,
// and gather only the rest.
// The rest arguments parameter needs to be the last one,
function printArgsWithOtherParameter(first, second, ...rest) {
  console.log(first, second, rest);
}

printArgsWithOtherParameter(1, 2, 3, 4, 5); //? 1 2 (3) [3, 4, 5]
// This is guaranteed to be an array.
// If you don't have enough arguments,
// it'll just be an empty array.
printArgsWithOtherParameter(1, 2); //? 1 2 []
// if we call it with nothing,
// we can see first and second were undefined,
// but rest is still an empty array.
printArgsWithOtherParameter(); //? undefined undefined []

// We’ve just seen
// how to get an array from the list of parameters.
// But sometimes we need to do exactly the reverse. 😂
// It looks similar to rest parameters, also using ...,
// but does quite the opposite.
const nums = [1, 2, 3, 4];
printArgs(...nums); //? [1, 2, 3, 4]
printArgs(nums[0], nums[1], nums[2], nums[3]); //? [1, 2, 3, 4]

// The spread operator works on objects too.
// If we logged out an object with ...user,
// this explodes all the properties into a brand new object
// This is useful if you want to add properties to an object
//  without modifying the original.
const user = {
  firstName: "Mo",
  lastName: "Elzanaty",
};

console.log({
  firstName: "Default",
  ...user,
  fullName: `${user.firstName} ${user.lastName}`,
});

// combine spread + rest

const DEBUG = false;
const debug = (...args) => {
  if (DEBUG) {
    console.log(...args);
  }
};
debug("this", "works", "great");

/**
 * When we see "..." in the code, it is either rest parameters or the spread syntax.
 * There’s an easy way to distinguish between them:
 *    When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
 *    When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
 * © https://javascript.info/rest-parameters-spread
 */
