// ES6 adds two new variable types, let and const.
// function vs block scope
//   var: scoped to the function scope
//   let: scoped to the block scope
//   const: scoped to the block scope

function scopeTest() {
  var outerVar = "outer var";
  let outerLet = "outer let";
  if (true) {
    var innerVar = "inner var";
    let innerLet = "inner let";
  }
}
scopeTest();
