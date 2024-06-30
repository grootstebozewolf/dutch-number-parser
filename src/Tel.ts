// Tel.ts
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { DutchNumbersLexer } from './grammar/generated/DutchNumbersLexer';
import { DutchNumbers } from './grammar/generated/DutchNumbers';
import { TelVisitor } from './TelVisitor';
import { Token } from 'antlr4ts/Token';
import { ILogger } from './ILogger';

export class Tel {
    private static logger: ILogger;

    static setLogger(logger: ILogger) {
        Tel.logger = logger;
    }

    static parse(input: string): number {
        let inputStream = CharStreams.fromString(input);
        let lexer = new DutchNumbersLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new DutchNumbers(tokenStream);

        // Check for lexer errors
        lexer.removeErrorListeners();
        lexer.addErrorListener({
            syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
                const errorMessage = `Error parsing input: Invalid number context`;
                Tel.logger?.logError(errorMessage);
                throw new Error(errorMessage);
            }
        });

        let tree;
        try {
            tree = parser.number();
        } catch (error) {
            const errorMessage = error instanceof Error 
                ? `Error parsing input: ${error.message}`
                : 'An unknown error occurred while parsing input';
            Tel.logger?.logError(errorMessage);
            throw new Error(errorMessage);
        }

        let visitor = new TelVisitor();
        try {
            const result = visitor.visit(tree);
            Tel.logger?.logInfo(`Successfully parsed input: ${input} to ${result}`);
            return result;
        } catch (error) {
            const errorMessage = error instanceof Error
                ? `Error parsing input: ${error.message}`
                : 'An unknown error occurred while visiting the parse tree';
            Tel.logger?.logError(errorMessage);
            throw new Error(errorMessage);
        }
    }
}