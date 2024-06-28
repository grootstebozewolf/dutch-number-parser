// Generated from src/grammar/DutchNumbersParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { NumberContext } from "./DutchNumbersParser";
import { Whole_numberContext } from "./DutchNumbersParser";
import { OnesContext } from "./DutchNumbersParser";
import { TensContext } from "./DutchNumbersParser";
import { HundredsContext } from "./DutchNumbersParser";
import { ThousandsContext } from "./DutchNumbersParser";
import { MillionsContext } from "./DutchNumbersParser";
import { BillionsContext } from "./DutchNumbersParser";


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
	 * Enter a parse tree produced by `DutchNumbersParser.whole_number`.
	 * @param ctx the parse tree
	 */
	enterWhole_number?: (ctx: Whole_numberContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.whole_number`.
	 * @param ctx the parse tree
	 */
	exitWhole_number?: (ctx: Whole_numberContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.ones`.
	 * @param ctx the parse tree
	 */
	enterOnes?: (ctx: OnesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.ones`.
	 * @param ctx the parse tree
	 */
	exitOnes?: (ctx: OnesContext) => void;

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
	 * Enter a parse tree produced by `DutchNumbersParser.hundreds`.
	 * @param ctx the parse tree
	 */
	enterHundreds?: (ctx: HundredsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.hundreds`.
	 * @param ctx the parse tree
	 */
	exitHundreds?: (ctx: HundredsContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.thousands`.
	 * @param ctx the parse tree
	 */
	enterThousands?: (ctx: ThousandsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.thousands`.
	 * @param ctx the parse tree
	 */
	exitThousands?: (ctx: ThousandsContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.millions`.
	 * @param ctx the parse tree
	 */
	enterMillions?: (ctx: MillionsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.millions`.
	 * @param ctx the parse tree
	 */
	exitMillions?: (ctx: MillionsContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.billions`.
	 * @param ctx the parse tree
	 */
	enterBillions?: (ctx: BillionsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.billions`.
	 * @param ctx the parse tree
	 */
	exitBillions?: (ctx: BillionsContext) => void;
}

