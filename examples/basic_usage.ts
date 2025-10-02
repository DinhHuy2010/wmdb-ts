/**
 * Example demonstrating basic usage of wmdb-ts
 */

import { greet, VERSION } from "../src/mod.ts";

// Example 1: Using the greet function
console.log(greet("Deno"));
console.log(greet("TypeScript"));

// Example 2: Accessing the version
console.log(`Library version: ${VERSION}`);

// Example 3: Multiple greetings
const names = ["Alice", "Bob", "Charlie"];
names.forEach((name) => {
    console.log(greet(name));
});
