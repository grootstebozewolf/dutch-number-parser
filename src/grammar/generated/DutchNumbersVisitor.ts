// Generated from src/grammar/DutchNumbers.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { NumberContext } from "./DutchNumbersParser";
import { OrdinalContext } from "./DutchNumbersParser";
import { OnesContext } from "./DutchNumbersParser";
import { Ordinal_onesContext } from "./DutchNumbersParser";
import { TeensContext } from "./DutchNumbersParser";
import { Ordinal_teensContext } from "./DutchNumbersParser";
import { TensContext } from "./DutchNumbersParser";
import { Ordinal_tensContext } from "./DutchNumbersParser";
import { Tens_unitContext } from "./DutchNumbersParser";
import { Tens_unit_ordinalContext } from "./DutchNumbersParser";
import { Tens_with_onesContext } from "./DutchNumbersParser";
import { Ordinal_tens_with_onesContext } from "./DutchNumbersParser";
import { HundredsContext } from "./DutchNumbersParser";
import { Ordinal_hundredsContext } from "./DutchNumbersParser";
import { ThousandsContext } from "./DutchNumbersParser";
import { Ordinal_thousandsContext } from "./DutchNumbersParser";
import { MillionsContext } from "./DutchNumbersParser";
import { Ordinal_millionsContext } from "./DutchNumbersParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DutchNumbersParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DutchNumbersVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DutchNumbersParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.ordinal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinal?: (ctx: OrdinalContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.ones`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnes?: (ctx: OnesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.ordinal_ones`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinal_ones?: (ctx: Ordinal_onesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.teens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTeens?: (ctx: TeensContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.ordinal_teens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinal_teens?: (ctx: Ordinal_teensContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.tens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTens?: (ctx: TensContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.ordinal_tens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinal_tens?: (ctx: Ordinal_tensContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.tens_unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTens_unit?: (ctx: Tens_unitContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.tens_unit_ordinal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTens_unit_ordinal?: (ctx: Tens_unit_ordinalContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.tens_with_ones`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTens_with_ones?: (ctx: Tens_with_onesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.ordinal_tens_with_ones`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinal_tens_with_ones?: (ctx: Ordinal_tens_with_onesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.hundreds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHundreds?: (ctx: HundredsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.ordinal_hundreds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinal_hundreds?: (ctx: Ordinal_hundredsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.thousands`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThousands?: (ctx: ThousandsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.ordinal_thousands`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinal_thousands?: (ctx: Ordinal_thousandsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.millions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMillions?: (ctx: MillionsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbersParser.ordinal_millions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinal_millions?: (ctx: Ordinal_millionsContext) => Result;
}

