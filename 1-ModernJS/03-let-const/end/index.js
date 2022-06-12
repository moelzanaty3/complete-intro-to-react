// ES6 adds two new variable types, let and const.
// function vs block scope
//   var: scoped to the function scope
//   let: scoped to the block scope
//   const: scoped to the block scope
// Hoisting - https://developer.mozilla.org/en-US/docs/Glossary/Hoisting#variable_hoisting
//   var: The default initialization of the var is undefined
//   let: it's hoisted but it's unlike var, are not initialized with a default value.
function scopeTest() {
  var outerVar = "outer var";
  let outerLet = "outer let";
  if (true) {
    var innerVar = "inner var";
    let innerLet = "inner let";
  }
}
scopeTest();

// var vs. let inside a closure
//   var:
//      creates one variable, closure latches on
//      This function reference to the variable i. It doesn't actually make a copy of the value itself, it actually refers to the variable i in memory.
//   let:
//      creates a new variable for each iteration
function printNumbers() {
  for (var i = 0; i < 5; i++) {
    // console.log(i);
  }
}
printNumbers();

// var vs. let inside a closure
//   var:
//      creates one variable, closure latches on
//      This function reference to the variable i. It doesn't actually make a copy of the value itself, it actually refers to the variable i in memory.
//   let:
//      creates a new variable for each iteration
function printNumbers() {
  // for (var i = 0; i < 5; i++) {
  for (let i = 0; i < 5; i++) {
    // console.log(i);
    setTimeout(() => console.log(i), 1000);
  }
}
printNumbers();

// const => It does not define a constant value. It defines a constant reference to a value.
// Because of this you can NOT: Reassign a constant ["value", "array", "object"]
// But you can change a constant ["array", "object"]

const fullName = "Younes Mohammed";
// fullName = "Farah Mohammed"
console.log(fullName);

const person = {
  name: "Younes",
};
person.name = "Farah";
console.log(person);

const nums = [1, 2, 3, 4, 5];
nums.push(6);
console.log(nums);
