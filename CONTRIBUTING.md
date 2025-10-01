# Contributing to wmdb-ts

Thank you for your interest in contributing to wmdb-ts!

## Development Setup

1. Install [Deno](https://deno.land/) (v1.40.0 or higher)
2. Clone the repository:
   ```bash
   git clone https://github.com/DinhHuy2010/wmdb-ts.git
   cd wmdb-ts
   ```

## Development Workflow

### Running Tests

```bash
deno task test
```

### Linting

```bash
deno task lint
```

### Formatting Code

Format your code before committing:

```bash
deno task fmt
```

### Type Checking

```bash
deno task check
```

### Running Examples

```bash
deno run examples/basic_usage.ts
```

## Coding Standards

- Follow the existing code style
- Use TypeScript with strict mode enabled
- Add JSDoc comments for public APIs
- Write tests for new functionality
- Ensure all tests pass before submitting a PR

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`deno task test && deno task lint`)
5. Format your code (`deno task fmt`)
6. Commit your changes (`git commit -m 'Add some amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## Code of Conduct

Please be respectful and considerate in all interactions.
