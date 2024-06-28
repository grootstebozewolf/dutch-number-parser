// Generated from src/grammar/DutchNumbersParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { NumberContext } from "./DutchNumbersParser";
import { SimpleContext } from "./DutchNumbersParser";
import { UnitContext } from "./DutchNumbersParser";
import { TeenContext } from "./DutchNumbersParser";
import { TensContext } from "./DutchNumbersParser";
import { CompoundContext } from "./DutchNumbersParser";
import { Large_numberContext } from "./DutchNumbersParser";


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
	 * Visit a parse tree produced by `DutchNumbersParser.simple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple?: (ctx: SimpleContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.teen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTeen?: (ctx: TeenContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.tens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTens?: (ctx: TensContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.compound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound?: (ctx: CompoundContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.large_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLarge_number?: (ctx: Large_numberContext) => Result;
}

