# Dutch Number Parser

**Dutch Number Parser** is a TypeScript library designed to parse and convert Dutch counting numbers into their numeric equivalents. This package is ideal for applications that need to interpret Dutch-written numbers in a numerical format, supporting numbers up to one million.

## Features

- **Comprehensive Parsing**: Handles Dutch numbers up to one million, including complex forms like "twee honderd drie en veertig duizend vijf honderd zes en zeventig".
- **Integration with ANTLR**: Uses ANTLR (ANother Tool for Language Recognition) for robust parsing of Dutch number phrases.
- **TypeScript Support**: Fully written in TypeScript, providing type safety and autocompletion in TypeScript projects.
- **Logging Support**: Includes an ILogger interface for flexible logging integration.

## Installation

You can install the package via npm:

```bash
npm install @grootstebozewolf/dutch-number-parser
```

## Usage

### Basic Usage

Import the Tel class from the package:

```typescript
import { Tel } from '@grootstebozewolf/dutch-number-parser';

const dutchNumberString = "vier honderd zes en twintig";
const numericValue = Tel.parse(dutchNumberString);
console.log(numericValue); // Outputs: 426
```

### Using with Logger

You can set a custom logger that implements the ILogger interface:

```typescript
import { Tel, ILogger } from '@grootstebozewolf/dutch-number-parser';

class CustomLogger implements ILogger {
    logError(message: string): void {
        console.error(`Custom Error: ${message}`);
    }
    logInfo(message: string): void {
        console.log(`Custom Info: ${message}`);
    }
    logWarning(message: string): void {
        console.warn(`Custom Warning: ${message}`);
    }
}

Tel.setLogger(new CustomLogger());

const result = Tel.parse("drie honderd");
// This will use your custom logger for any logs
```

### Supported Dutch Numbers

The Dutch Number Parser can handle a wide range of Dutch number phrases, including but not limited to:

- Simple numbers: "een", "twee", "drie"
- Tens: "twintig", "dertig", "veertig"
- Hundreds: "honderd", "twee honderd"
- Thousands: "duizend", "vier duizend drie honderd"
- Complex forms: "twee honderd drie en veertig duizend vijf honderd zes en zeventig"

## Development and Contribution

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the [GitHub repository](https://github.com/grootstebozewolf/dutch-number-parser).

To develop locally:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Build the project with `npm run build`.
4. Run tests with `npm test`.

## License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/grootstebozewolf/dutch-number-parser">Dutch Number Parser</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/grootstebozewolf">Jeroen Bloemscheer</a> is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>
