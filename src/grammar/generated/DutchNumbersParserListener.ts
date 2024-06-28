// Generated from src/grammar/DutchNumbersParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { NumberContext } from "./DutchNumbersParser";
import { SimpleContext } from "./DutchNumbersParser";
import { UnitContext } from "./DutchNumbersParser";
import { TeenContext } from "./DutchNumbersParser";
import { TensContext } from "./DutchNumbersParser";
import { CompoundContext } from "./DutchNumbersParser";
import { Large_numberContext } from "./DutchNumbersParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DutchNumbersParser`.
 */
export interface DutchNumbersParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DutchNumbersParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.simple`.
	 * @param ctx the parse tree
	 */
	enterSimple?: (ctx: SimpleContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.simple`.
	 * @param ctx the parse tree
	 */
	exitSimple?: (ctx: SimpleContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.teen`.
	 * @param ctx the parse tree
	 */
	enterTeen?: (ctx: TeenContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.teen`.
	 * @param ctx the parse tree
	 */
	exitTeen?: (ctx: TeenContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.tens`.
	 * @param ctx the parse tree
	 */
	enterTens?: (ctx: TensContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.tens`.
	 * @param ctx the parse tree
	 */
	exitTens?: (ctx: TensContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.compound`.
	 * @param ctx the parse tree
	 */
	enterCompound?: (ctx: CompoundContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.compound`.
	 * @param ctx the parse tree
	 */
	exitCompound?: (ctx: CompoundContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.large_number`.
	 * @param ctx the parse tree
	 */
	enterLarge_number?: (ctx: Large_numberContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.large_number`.
	 * @param ctx the parse tree
	 */
	exitLarge_number?: (ctx: Large_numberContext) => void;
}

