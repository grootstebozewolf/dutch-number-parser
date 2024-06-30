/**
 * Dutch Number Parser
 * 
 * Licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
 * You may obtain a copy of the License at https://creativecommons.org/licenses/by-sa/4.0/
 */
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { DutchNumbersLexer } from './grammar/generated/DutchNumbersLexer';
import { DutchNumbers } from './grammar/generated/DutchNumbers';
import { TelVisitor } from './TelVisitor';
import { Token } from 'antlr4ts/Token';
import { ILogger } from './ILogger'; // Import the Logger class

export class Tel {
    static parse(input: string): number {
        let inputStream = CharStreams.fromString(input);
        let lexer = new DutchNumbersLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new DutchNumbers(tokenStream);

        // Check for lexer errors
        lexer.removeErrorListeners();
        lexer.addErrorListener({
            syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
                throw new Error(`Error parsing input: Invalid number context`);
            }
        });

        let tree;
        try {
            tree = parser.number();
        } catch (error) {
            throw new Error(`Error parsing input: ${error.message}`);
        }

        let visitor = new TelVisitor();
        try {
            return visitor.visit(tree);
        } catch (error) {
            throw new Error(`Error parsing input: ${error.message}`);
        }
    }
}
