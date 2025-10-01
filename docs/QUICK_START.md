# Quick Start Guide

## Installation

Install Deno on your system:

### macOS / Linux

```bash
curl -fsSL https://deno.land/install.sh | sh
```

### Windows (PowerShell)

```powershell
irm https://deno.land/install.ps1 | iex
```

### Using package managers

```bash
# macOS with Homebrew
brew install deno

# Windows with Chocolatey
choco install deno

# Windows with Scoop
scoop install deno
```

## Using wmdb-ts

### Import from JSR (when published)

```typescript
import { greet } from "jsr:@dinhhuy2010/wmdb-ts";

console.log(greet("World"));
```

### Import from GitHub

```typescript
import { greet } from "https://raw.githubusercontent.com/DinhHuy2010/wmdb-ts/main/src/mod.ts";

console.log(greet("World"));
```

### Local Development

```typescript
import { greet, VERSION } from "./src/mod.ts";

console.log(greet("Developer"));
console.log(`Version: ${VERSION}`);
```

## Common Deno Commands

```bash
# Run a TypeScript file
deno run script.ts

# Run with permissions
deno run --allow-net --allow-read script.ts

# Run tests
deno test

# Format code
deno fmt

# Lint code
deno lint

# Check types
deno check script.ts

# Install a script as an executable
deno install script.ts
```

## VS Code Setup

1. Install the [Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
2. The workspace is already configured with `.vscode/settings.json`
3. Restart VS Code to activate Deno support

## Additional Resources

- [Deno Manual](https://deno.land/manual)
- [Deno Standard Library](https://deno.land/std)
- [JSR (JavaScript Registry)](https://jsr.io/)
