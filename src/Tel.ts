/**
 * Dutch Number Parser
 * 
 * Licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
 * You may obtain a copy of the License at https://creativecommons.org/licenses/by-sa/4.0/
 */
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { DutchNumbersLexer } from './grammar/generated/DutchNumbersLexer';
import { DutchNumbersParser } from './grammar/generated/DutchNumbersParser';
import { TelVisitor } from './TelVisitor';
import { ILogger } from './ILogger'; // Import the Logger class

export class Tel {
    // private static logger: ILogger;

    // static setLogger(logger: ILogger): void {
    //     this.logger = logger;
    // }

    static parse(input: string): number {
        try {
            let inputStream = CharStreams.fromString(input);
            let lexer = new DutchNumbersLexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);
            let parser = new DutchNumbersParser(tokenStream);

            let tree = parser.number();
            let visitor = new TelVisitor();
            return visitor.visit(tree);
        } catch (error) {
            throw new Error(`Error parsing input: ${error.message}`);
        }
    }
}

