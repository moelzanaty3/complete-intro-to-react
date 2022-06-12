// Template literals are ES6 template strings delimited with backtick (`)
// Template literals a.k.a. Template Strings a.k.a. String Interpolation
// because they are used most commonly for string interpolation

const firstName = "Mohammed";
const lastName = "Elzanaty";
const isSubscribed = true;

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Because the stuff inside the braces can be any valid JavaScript expression
const summary = `${fullName} ${
  isSubscribed ? "Subscribed" : "Need to Subscribe Now 😂"
}`;
console.log(summary);

const add = (a, b) => a + b;
// any valid JavaScript expression can go inside the curly braces.
// It'll evaluate that and put it into the string.
const answer = `The answer is ${add(4, 8)}`;
console.log(answer);
