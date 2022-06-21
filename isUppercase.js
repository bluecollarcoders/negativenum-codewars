/*

Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)




*/

String.prototype.isUppercase = function () {
  return this.toUpperCase() === this.toString();
};
