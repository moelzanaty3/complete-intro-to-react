// a plain old named function
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

// anonymous  function
const addAnonymous = function (a, b) {
  return a + b;
};

console.log(addAnonymous(1, 2));

// arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(1, 2));

// another arrow function return object literal
const person = (name, email) => ({
  name: name,
  email: email,
  createdAt: new Date(),
});

console.log(person("John", "john@example.com"));
