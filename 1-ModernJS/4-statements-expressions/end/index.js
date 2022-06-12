/**
 * When we write programs - we describe the sequences of actions that should be performed to get a desired result.
 * In programming languages those actions are called statements.
 * So every Javascript program basically consists of statements.
 * It's important to know the difference, because there are some places where you can only write an expression
 * Ex. (when you get into React, for instance, JSX allows expressions but not statements).
 * more: https://maksimivanov.com/posts/statements-expressions-js
 */

// Statements vs. Expressions

// *** Statements

let declaredVariable; // variable declaration is a statement

// 1 + 2 is an expression
let a = 1 + 2; // whole line is a statement

// true is an expression
if (true) {
  //
}
function functionCall() {} // function declaration is a statement
// for(...) is a statement
// while(...) is a statement
// try { } catch(e) { } is a statement

// *** Expressions - are anything that evaluated to a value and always part of statement.

// 2+2
// true
// true && false
// whatever the function returns is an expression
function stuff() {
  return { hi: true };
}

function Component() {
  return <div>{1 + 2}</div>;
  // you can return an statement
  // return <div>{for}</div>
}

let b = "";
let isAdult = true;
// you can write statements as an expression like if we had an if condition like:
if (isAdult) {
  b = "adult";
} else {
  b = "child";
}
// but if we need to write it as expression, we can do it like this using ternary operator:
b = isAdult ? "adult" : "child";
