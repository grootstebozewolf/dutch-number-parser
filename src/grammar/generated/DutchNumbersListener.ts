// Generated from src/grammar/DutchNumbers.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `DutchNumbersParser`.
 */
export interface DutchNumbersListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `DutchNumbersParser.ordinal`.
	 * @param ctx the parse tree
	 */
	enterOrdinal?: (ctx: OrdinalContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.ordinal`.
	 * @param ctx the parse tree
	 */
	exitOrdinal?: (ctx: OrdinalContext) => void;

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
	 * Enter a parse tree produced by `DutchNumbersParser.ordinal_ones`.
	 * @param ctx the parse tree
	 */
	enterOrdinal_ones?: (ctx: Ordinal_onesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.ordinal_ones`.
	 * @param ctx the parse tree
	 */
	exitOrdinal_ones?: (ctx: Ordinal_onesContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.teens`.
	 * @param ctx the parse tree
	 */
	enterTeens?: (ctx: TeensContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.teens`.
	 * @param ctx the parse tree
	 */
	exitTeens?: (ctx: TeensContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.ordinal_teens`.
	 * @param ctx the parse tree
	 */
	enterOrdinal_teens?: (ctx: Ordinal_teensContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.ordinal_teens`.
	 * @param ctx the parse tree
	 */
	exitOrdinal_teens?: (ctx: Ordinal_teensContext) => void;

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
	 * Enter a parse tree produced by `DutchNumbersParser.ordinal_tens`.
	 * @param ctx the parse tree
	 */
	enterOrdinal_tens?: (ctx: Ordinal_tensContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.ordinal_tens`.
	 * @param ctx the parse tree
	 */
	exitOrdinal_tens?: (ctx: Ordinal_tensContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.tens_unit`.
	 * @param ctx the parse tree
	 */
	enterTens_unit?: (ctx: Tens_unitContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.tens_unit`.
	 * @param ctx the parse tree
	 */
	exitTens_unit?: (ctx: Tens_unitContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.tens_unit_ordinal`.
	 * @param ctx the parse tree
	 */
	enterTens_unit_ordinal?: (ctx: Tens_unit_ordinalContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.tens_unit_ordinal`.
	 * @param ctx the parse tree
	 */
	exitTens_unit_ordinal?: (ctx: Tens_unit_ordinalContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.tens_with_ones`.
	 * @param ctx the parse tree
	 */
	enterTens_with_ones?: (ctx: Tens_with_onesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.tens_with_ones`.
	 * @param ctx the parse tree
	 */
	exitTens_with_ones?: (ctx: Tens_with_onesContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbersParser.ordinal_tens_with_ones`.
	 * @param ctx the parse tree
	 */
	enterOrdinal_tens_with_ones?: (ctx: Ordinal_tens_with_onesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.ordinal_tens_with_ones`.
	 * @param ctx the parse tree
	 */
	exitOrdinal_tens_with_ones?: (ctx: Ordinal_tens_with_onesContext) => void;

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
	 * Enter a parse tree produced by `DutchNumbersParser.ordinal_hundreds`.
	 * @param ctx the parse tree
	 */
	enterOrdinal_hundreds?: (ctx: Ordinal_hundredsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.ordinal_hundreds`.
	 * @param ctx the parse tree
	 */
	exitOrdinal_hundreds?: (ctx: Ordinal_hundredsContext) => void;

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
	 * Enter a parse tree produced by `DutchNumbersParser.ordinal_thousands`.
	 * @param ctx the parse tree
	 */
	enterOrdinal_thousands?: (ctx: Ordinal_thousandsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.ordinal_thousands`.
	 * @param ctx the parse tree
	 */
	exitOrdinal_thousands?: (ctx: Ordinal_thousandsContext) => void;

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
	 * Enter a parse tree produced by `DutchNumbersParser.ordinal_millions`.
	 * @param ctx the parse tree
	 */
	enterOrdinal_millions?: (ctx: Ordinal_millionsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbersParser.ordinal_millions`.
	 * @param ctx the parse tree
	 */
	exitOrdinal_millions?: (ctx: Ordinal_millionsContext) => void;
}

