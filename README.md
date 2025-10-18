# Testing Practice

A test-driven development exercise implementing core JavaScript utility functions with comprehensive Jest test coverage.

## What This Does

This project demonstrates test-driven development (TDD) practices by building five utility functions from scratch, writing tests first, then implementing the functionality to make those tests pass. Each function is isolated, thoroughly tested, and handles edge cases.

## Features

- String manipulation utilities (capitalize, reverse, Caesar cipher)
- Calculator with basic arithmetic operations
- Array analysis function with statistical calculations
- Full test coverage with Jest
- ES6 module syntax with Babel transpilation

## Project Structure

```
.
├── src/
│   ├── capitalize.js       # Capitalizes first character of a string
│   ├── reverseString.js    # Reverses a string
│   ├── calculator.js       # Basic arithmetic operations object
│   ├── caesarCipher.js     # Character shifting cipher with case preservation
│   └── analyzeArray.js     # Statistical analysis of number arrays
├── tests/
│   ├── capitalize.test.js
│   ├── reverseString.test.js
│   ├── calculator.test.js
│   ├── caesarCipher.test.js
│   └── analyzeArray.test.js
├── package.json
├── babel.config.js
└── README.md
```

## Functions Overview

### capitalize(string)

Takes a string and returns it with the first character capitalized.

### reverseString(string)

Takes a string and returns it reversed.

### calculator

An object containing four methods for basic arithmetic:

- `add(a, b)` - Returns sum of two numbers
- `subtract(a, b)` - Returns difference of two numbers
- `multiply(a, b)` - Returns product of two numbers
- `divide(a, b)` - Returns quotient of two numbers

### caesarCipher(string, shift)

Takes a string and a shift factor, returns the string with each character shifted by the specified amount. Features include:

- Wraps from 'z' to 'a' (and 'Z' to 'A')
- Preserves original case
- Leaves punctuation, spaces, and special characters unchanged

Example: `caesarCipher('Hello, World!', 3)` returns `'Khoor, Zruog!'`

### analyzeArray(array)

Takes an array of numbers and returns an object with the following properties:

- `average` - Mean of all numbers
- `min` - Smallest number
- `max` - Largest number
- `length` - Count of elements

Example:

```javascript
analyzeArray([1, 8, 3, 4, 2, 6]);
// Returns: { average: 4, min: 1, max: 8, length: 6 }
```

## Running the Project

### Prerequisites

- Node.js installed on your machine

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
npm test
```

## Test Coverage

All functions include tests for:

- Basic functionality
- Edge cases (zero values, negative numbers)
- Special characters and punctuation
- Floating point precision (where applicable)
- Case preservation and wrapping behavior (Caesar cipher)

## Key Implementation Details

- **TDD Approach** - Tests were written before implementations
- **ES6 Modules** - Uses import/export syntax with Babel transpilation
- **Edge Case Handling** - All functions handle boundary conditions
- **Modular Design** - Each function is self-contained and independently testable
- **Floating Point Precision** - Calculator tests use `.toBeCloseTo()` for decimal arithmetic

## Assignment Source

This project is from [The Odin Project](https://www.theodinproject.com) - Full Stack JavaScript curriculum.

## What I Learned

- Writing effective unit tests with Jest
- Test-driven development workflow (red-green-refactor)
- Configuring Jest with Babel for ES6 modules
- Testing edge cases and boundary conditions
- Using Jest matchers (`.toBe()`, `.toBeCloseTo()`, etc.)
- Structuring test suites with `describe` and `it` blocks

Built with ☕ and TDD
