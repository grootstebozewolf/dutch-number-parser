/**
 * Dutch Number Parser
 * 
 * Licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
 * You may obtain a copy of the License at https://creativecommons.org/licenses/by-sa/4.0/
 */
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { DutchNumbersLexer } from './grammar/generated/DutchNumbersLexer'; // Replace with the actual path
import { DutchNumbersParser } from './grammar/generated/DutchNumbersParser'; // Replace with the actual path
import { TelVisitor } from './TelVisitor';
export class Tel {
    // Public parse method to convert Dutch numbers to integers
    public static parse(input: string): number {
        // Set up ANTLR to parse the input
        const lexer = new DutchNumbersLexer(CharStreams.fromString(input));
        const tokens = new CommonTokenStream(lexer);
        const parser = new DutchNumbersParser(tokens);

        // Parse the input to create a parse tree
        const tree = parser.number(); // Change 'number' to the appropriate starting rule if needed

        // Instantiate the Visitor
        const visitor = new TelVisitor();

        // Apply the Visitor to the Parse Tree
        return visitor.visit(tree);
    }
}


