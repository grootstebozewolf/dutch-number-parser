Here’s a comprehensive description for the `dutch-number-parser` package. This description covers the purpose, functionality, usage examples, and how it can be integrated into a larger project. It’s tailored to be included in the `README.md` of the repository or the package's documentation.

---

# Dutch Number Parser

**Dutch Number Parser** is a TypeScript library designed to parse and convert Dutch counting numbers into their numeric equivalents. This package is ideal for applications that need to interpret Dutch-written numbers in a numerical format, supporting numbers up to one million.

## Features

- **Comprehensive Parsing**: Handles Dutch numbers up to one million, including complex forms like "twee honderd drie en veertig duizend vijf honderd zes en zeventig".
- **Integration with ANTLR**: Uses ANTLR (ANother Tool for Language Recognition) for robust parsing of Dutch number phrases.
- **TypeScript Support**: Fully written in TypeScript, providing type safety and autocompletion in TypeScript projects.
- **Easy Integration**: Can be used as a standalone package or integrated into larger projects using Git subtree or npm.

## Installation

You can install the package via npm:

```bash
npm install dutch-number-parser
```

Or integrate it directly into your project as a Git subtree:

```bash
git subtree add --prefix=dutch-number-parser https://github.com/yourusername/dutch-number-parser.git main --squash
```

## Usage

### Basic Usage

First, import the parser function from the package:

```typescript
import { parseDutchNumber } from 'dutch-number-parser';

const dutchNumberString = "vier honderd zes en twintig";
const numericValue = parseDutchNumber(dutchNumberString);
console.log(numericValue); // Outputs: 426
```

### Advanced Usage in Cucumber.js Step Definitions

The package can be seamlessly integrated with Cucumber.js for testing scenarios that involve Dutch number phrases.

```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { parseDutchNumber } from 'dutch-number-parser';

Given('I have {string} apples', function (dutchNumberString: string) {
  const number = parseDutchNumber(dutchNumberString);
  console.log(`Number of apples: ${number}`);
  // Implement your step logic here
});

When('I eat {string} apples', function (dutchNumberString: string) {
  const number = parseDutchNumber(dutchNumberString);
  console.log(`Eating ${number} apples`);
  // Implement your step logic here
});

Then('I should have {string} apples left', function (dutchNumberString: string) {
  const number = parseDutchNumber(dutchNumberString);
  console.log(`Apples left: ${number}`);
  // Implement your assertion here
});
```

### Supported Dutch Numbers

The `dutch-number-parser` can handle a wide range of Dutch number phrases, including but not limited to:

- Simple numbers: "een", "twee", "drie"
- Tens: "twintig", "dertig", "veertig"
- Hundreds: "honderd", "twee honderd"
- Thousands: "duizend", "vier duizend drie honderd"
- Complex forms: "twee honderd drie en veertig duizend vijf honderd zes en zeventig"

## Integration

### Git Subtree

To keep `dutch-number-parser` as part of your project’s repository, you can integrate it using Git subtree:

```bash
git subtree add --prefix=dutch-number-parser https://github.com/yourusername/dutch-number-parser.git main --squash
```

### NPM Package

Add it as a dependency in your `package.json`:

```bash
npm install dutch-number-parser
```

## Development and Contribution

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the [GitHub repository](https://github.com/yourusername/dutch-number-parser).

To develop locally:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Build the project with `npm run build`.

## License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/grootstebozewolf/dutch-number-parser">Dutch Number Parser</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/grootstebozewolf">Jeroen Bloemscheer</a> is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>
