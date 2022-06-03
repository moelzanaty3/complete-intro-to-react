// this = current execution context
// The environment (or scope) in which the line is being executed is known as the execution context.
// The object this refers to changes every time the execution context is changed.

// this = current execution context
// The environment (or scope) in which the line is being executed is known as the execution context.
// The object this refers to changes every time the execution context is changed.

// "use strict";

const mohammedElzanaty = { fullName: "Mo. Elzanaty" };
const younesMohammed = { fullName: "Younes Mohammed" };
const farahMohammed = { fullName: "Farah Mohammed" };

function sayMyName(greeting) {
  console.log(this);
  return greeting + " " + this.fullName;
}

console.log(sayMyName("Hello"));

this.fullName = "Mo. Elzanaty";
console.log(sayMyName("Hello"));

// .bind() - returns a new function, allowing you to pass in a this array and any number of arguments.
const fun = sayMyName.bind(younesMohammed, "Hello");
console.log(fun());

// .call() - invokes the function and allows you to pass in arguments one by one.
console.log(sayMyName.call(farahMohammed, "Hello"));

// .apply() -  invokes the function and allows you to pass in arguments as an array.
console.log(sayMyName.apply(mohammedElzanaty, ["Hello"]));

// Call is for comma (separated list) and Apply is for Array.

// arrow function
const sayMyNameArrow = () => console.log(this);

sayMyNameArrow();
sayMyNameArrow.bind({ a: 1 })();
