import { assertEquals } from "jsr:@std/assert@1";
import { greet, VERSION } from "./mod.ts";

Deno.test("greet function returns correct greeting", () => {
  const result = greet("World");
  assertEquals(result, "Hello, World!");
});

Deno.test("greet function handles different names", () => {
  const result = greet("Deno");
  assertEquals(result, "Hello, Deno!");
});

Deno.test("VERSION constant is defined", () => {
  assertEquals(VERSION, "0.1.0");
});
