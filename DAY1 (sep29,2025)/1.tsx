// We define the types for the function's parameter and its return value.

// I wrote this function to understand ...........
//hello 
function greet(name: string): string {
  // If you tried to do math with 'name' (e.g., name * 2), TypeScript would show an error.
  return `Hello, ${name}!`;
}

let user: string = "Alice";
// let user = 123; // This line would cause an error in TypeScript because 123 is not a string.

console.log(greet(user));

