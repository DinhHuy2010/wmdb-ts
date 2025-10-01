# wmdb-ts

A TypeScript library for Deno.

## Prerequisites

- [Deno](https://deno.land/) 1.40.0 or higher

## Installation

For use in Deno projects, import directly from this repository or JSR:

```typescript
// From JSR (when published)
import { greet } from "jsr:@dinhhuy2010/wmdb-ts";

// From GitHub
import { greet } from "https://raw.githubusercontent.com/DinhHuy2010/wmdb-ts/main/src/mod.ts";
```

## Usage

```typescript
import { greet, VERSION } from "./src/mod.ts";

console.log(greet("World")); // Output: Hello, World!
console.log(VERSION); // Output: 0.1.0
```

## Development

### Running Tests

```bash
deno task test
```

### Linting

```bash
deno task lint
```

### Formatting

```bash
deno task fmt
```

### Type Checking

```bash
deno task check
```

## Project Structure

```
wmdb-ts/
├── src/
│   ├── mod.ts          # Main module entry point
│   └── mod_test.ts     # Tests
├── deno.json           # Deno configuration
├── LICENSE
└── README.md
```

## License

MIT License - see [LICENSE](LICENSE) file for details.