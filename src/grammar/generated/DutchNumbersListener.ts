// Generated from src/grammar/DutchNumbers.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { NumberContext } from "./DutchNumbers";
import { Whole_numberContext } from "./DutchNumbers";
import { OnesContext } from "./DutchNumbers";
import { TensContext } from "./DutchNumbers";
import { HundredsContext } from "./DutchNumbers";
import { PrefixesContext } from "./DutchNumbers";
import { ThousandsContext } from "./DutchNumbers";
import { MillionsContext } from "./DutchNumbers";
import { BillionsContext } from "./DutchNumbers";
import { TriljonsContext } from "./DutchNumbers";
import { QuadrilionsContext } from "./DutchNumbers";
import { QuintilionsContext } from "./DutchNumbers";
import { SextilionsContext } from "./DutchNumbers";
import { Thousands_suffixesContext } from "./DutchNumbers";
import { Millions_suffixesContext } from "./DutchNumbers";
import { Billions_suffixesContext } from "./DutchNumbers";
import { Triljons_suffixesContext } from "./DutchNumbers";
import { Quadrilions_suffixesContext } from "./DutchNumbers";
import { Quintilions_suffixesContext } from "./DutchNumbers";
import { Sextilions_suffixesContext } from "./DutchNumbers";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DutchNumbers`.
 */
export interface DutchNumbersListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DutchNumbers.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.whole_number`.
	 * @param ctx the parse tree
	 */
	enterWhole_number?: (ctx: Whole_numberContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.whole_number`.
	 * @param ctx the parse tree
	 */
	exitWhole_number?: (ctx: Whole_numberContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.ones`.
	 * @param ctx the parse tree
	 */
	enterOnes?: (ctx: OnesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.ones`.
	 * @param ctx the parse tree
	 */
	exitOnes?: (ctx: OnesContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.tens`.
	 * @param ctx the parse tree
	 */
	enterTens?: (ctx: TensContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.tens`.
	 * @param ctx the parse tree
	 */
	exitTens?: (ctx: TensContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.hundreds`.
	 * @param ctx the parse tree
	 */
	enterHundreds?: (ctx: HundredsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.hundreds`.
	 * @param ctx the parse tree
	 */
	exitHundreds?: (ctx: HundredsContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.prefixes`.
	 * @param ctx the parse tree
	 */
	enterPrefixes?: (ctx: PrefixesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.prefixes`.
	 * @param ctx the parse tree
	 */
	exitPrefixes?: (ctx: PrefixesContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.thousands`.
	 * @param ctx the parse tree
	 */
	enterThousands?: (ctx: ThousandsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.thousands`.
	 * @param ctx the parse tree
	 */
	exitThousands?: (ctx: ThousandsContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.millions`.
	 * @param ctx the parse tree
	 */
	enterMillions?: (ctx: MillionsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.millions`.
	 * @param ctx the parse tree
	 */
	exitMillions?: (ctx: MillionsContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.billions`.
	 * @param ctx the parse tree
	 */
	enterBillions?: (ctx: BillionsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.billions`.
	 * @param ctx the parse tree
	 */
	exitBillions?: (ctx: BillionsContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.triljons`.
	 * @param ctx the parse tree
	 */
	enterTriljons?: (ctx: TriljonsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.triljons`.
	 * @param ctx the parse tree
	 */
	exitTriljons?: (ctx: TriljonsContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.quadrilions`.
	 * @param ctx the parse tree
	 */
	enterQuadrilions?: (ctx: QuadrilionsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.quadrilions`.
	 * @param ctx the parse tree
	 */
	exitQuadrilions?: (ctx: QuadrilionsContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.quintilions`.
	 * @param ctx the parse tree
	 */
	enterQuintilions?: (ctx: QuintilionsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.quintilions`.
	 * @param ctx the parse tree
	 */
	exitQuintilions?: (ctx: QuintilionsContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.sextilions`.
	 * @param ctx the parse tree
	 */
	enterSextilions?: (ctx: SextilionsContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.sextilions`.
	 * @param ctx the parse tree
	 */
	exitSextilions?: (ctx: SextilionsContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.thousands_suffixes`.
	 * @param ctx the parse tree
	 */
	enterThousands_suffixes?: (ctx: Thousands_suffixesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.thousands_suffixes`.
	 * @param ctx the parse tree
	 */
	exitThousands_suffixes?: (ctx: Thousands_suffixesContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.millions_suffixes`.
	 * @param ctx the parse tree
	 */
	enterMillions_suffixes?: (ctx: Millions_suffixesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.millions_suffixes`.
	 * @param ctx the parse tree
	 */
	exitMillions_suffixes?: (ctx: Millions_suffixesContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.billions_suffixes`.
	 * @param ctx the parse tree
	 */
	enterBillions_suffixes?: (ctx: Billions_suffixesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.billions_suffixes`.
	 * @param ctx the parse tree
	 */
	exitBillions_suffixes?: (ctx: Billions_suffixesContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.triljons_suffixes`.
	 * @param ctx the parse tree
	 */
	enterTriljons_suffixes?: (ctx: Triljons_suffixesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.triljons_suffixes`.
	 * @param ctx the parse tree
	 */
	exitTriljons_suffixes?: (ctx: Triljons_suffixesContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.quadrilions_suffixes`.
	 * @param ctx the parse tree
	 */
	enterQuadrilions_suffixes?: (ctx: Quadrilions_suffixesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.quadrilions_suffixes`.
	 * @param ctx the parse tree
	 */
	exitQuadrilions_suffixes?: (ctx: Quadrilions_suffixesContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.quintilions_suffixes`.
	 * @param ctx the parse tree
	 */
	enterQuintilions_suffixes?: (ctx: Quintilions_suffixesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.quintilions_suffixes`.
	 * @param ctx the parse tree
	 */
	exitQuintilions_suffixes?: (ctx: Quintilions_suffixesContext) => void;

	/**
	 * Enter a parse tree produced by `DutchNumbers.sextilions_suffixes`.
	 * @param ctx the parse tree
	 */
	enterSextilions_suffixes?: (ctx: Sextilions_suffixesContext) => void;
	/**
	 * Exit a parse tree produced by `DutchNumbers.sextilions_suffixes`.
	 * @param ctx the parse tree
	 */
	exitSextilions_suffixes?: (ctx: Sextilions_suffixesContext) => void;
}

