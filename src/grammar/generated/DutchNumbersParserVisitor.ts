// Generated from src/grammar/DutchNumbersParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { NumberContext } from "./DutchNumbersParser";
import { Whole_numberContext } from "./DutchNumbersParser";
import { OnesContext } from "./DutchNumbersParser";
import { TensContext } from "./DutchNumbersParser";
import { HundredsContext } from "./DutchNumbersParser";
import { ThousandsContext } from "./DutchNumbersParser";
import { MillionsContext } from "./DutchNumbersParser";
import { BillionsContext } from "./DutchNumbersParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DutchNumbersParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DutchNumbersParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DutchNumbersParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.whole_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhole_number?: (ctx: Whole_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.ones`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnes?: (ctx: OnesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.tens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTens?: (ctx: TensContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.hundreds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHundreds?: (ctx: HundredsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.thousands`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThousands?: (ctx: ThousandsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.millions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMillions?: (ctx: MillionsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.billions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBillions?: (ctx: BillionsContext) => Result;
}

