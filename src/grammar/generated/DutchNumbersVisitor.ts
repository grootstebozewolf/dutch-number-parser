// Generated from src/grammar/DutchNumbers.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DutchNumbers`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DutchNumbersVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DutchNumbers.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.whole_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhole_number?: (ctx: Whole_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.ones`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnes?: (ctx: OnesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.tens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTens?: (ctx: TensContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.hundreds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHundreds?: (ctx: HundredsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.prefixes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixes?: (ctx: PrefixesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.thousands`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThousands?: (ctx: ThousandsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.millions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMillions?: (ctx: MillionsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.billions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBillions?: (ctx: BillionsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.triljons`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriljons?: (ctx: TriljonsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.quadrilions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuadrilions?: (ctx: QuadrilionsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.quintilions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuintilions?: (ctx: QuintilionsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.sextilions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSextilions?: (ctx: SextilionsContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.thousands_suffixes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThousands_suffixes?: (ctx: Thousands_suffixesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.millions_suffixes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMillions_suffixes?: (ctx: Millions_suffixesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.billions_suffixes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBillions_suffixes?: (ctx: Billions_suffixesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.triljons_suffixes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriljons_suffixes?: (ctx: Triljons_suffixesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.quadrilions_suffixes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuadrilions_suffixes?: (ctx: Quadrilions_suffixesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.quintilions_suffixes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuintilions_suffixes?: (ctx: Quintilions_suffixesContext) => Result;

	/**
	 * Visit a parse tree produced by `DutchNumbers.sextilions_suffixes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSextilions_suffixes?: (ctx: Sextilions_suffixesContext) => Result;
}

