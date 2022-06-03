function sayMyName(greeting) {
  console.log(this);
  return greeting + " " + this.fullName;
}
