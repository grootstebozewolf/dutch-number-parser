// Generated from src/grammar/DutchNumbers.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { DutchNumbersListener } from "./DutchNumbersListener";
import { DutchNumbersVisitor } from "./DutchNumbersVisitor";


export class DutchNumbers extends Parser {
	public static readonly ONE = 1;
	public static readonly TWO = 2;
	public static readonly THREE = 3;
	public static readonly FOUR = 4;
	public static readonly FIVE = 5;
	public static readonly SIX = 6;
	public static readonly SEVEN = 7;
	public static readonly EIGHT = 8;
	public static readonly NINE = 9;
	public static readonly TEN = 10;
	public static readonly ELEVEN = 11;
	public static readonly TWELVE = 12;
	public static readonly THIRTEEN = 13;
	public static readonly FOURTEEN = 14;
	public static readonly FIFTEEN = 15;
	public static readonly SIXTEEN = 16;
	public static readonly SEVENTEEN = 17;
	public static readonly EIGHTEEN = 18;
	public static readonly NINETEEN = 19;
	public static readonly TWENTY = 20;
	public static readonly THIRTY = 21;
	public static readonly FORTY = 22;
	public static readonly FIFTY = 23;
	public static readonly SIXTY = 24;
	public static readonly SEVENTY = 25;
	public static readonly EIGHTY = 26;
	public static readonly NINETY = 27;
	public static readonly HUNDRED = 28;
	public static readonly THOUSAND = 29;
	public static readonly MILLION = 30;
	public static readonly BILLION = 31;
	public static readonly TRILION = 32;
	public static readonly QUADRILION = 33;
	public static readonly QUINTILION = 34;
	public static readonly SEXTILION = 35;
	public static readonly EN = 36;
	public static readonly WS = 37;
	public static readonly RULE_number = 0;
	public static readonly RULE_whole_number = 1;
	public static readonly RULE_ones = 2;
	public static readonly RULE_tens = 3;
	public static readonly RULE_hundreds = 4;
	public static readonly RULE_prefixes = 5;
	public static readonly RULE_thousands = 6;
	public static readonly RULE_millions = 7;
	public static readonly RULE_billions = 8;
	public static readonly RULE_triljons = 9;
	public static readonly RULE_quadrilions = 10;
	public static readonly RULE_quintilions = 11;
	public static readonly RULE_sextilions = 12;
	public static readonly RULE_thousands_suffixes = 13;
	public static readonly RULE_millions_suffixes = 14;
	public static readonly RULE_billions_suffixes = 15;
	public static readonly RULE_triljons_suffixes = 16;
	public static readonly RULE_quadrilions_suffixes = 17;
	public static readonly RULE_quintilions_suffixes = 18;
	public static readonly RULE_sextilions_suffixes = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"number", "whole_number", "ones", "tens", "hundreds", "prefixes", "thousands", 
		"millions", "billions", "triljons", "quadrilions", "quintilions", "sextilions", 
		"thousands_suffixes", "millions_suffixes", "billions_suffixes", "triljons_suffixes", 
		"quadrilions_suffixes", "quintilions_suffixes", "sextilions_suffixes",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'een'", "'twee'", "'drie'", "'vier'", "'vijf'", "'zes'", "'zeven'", 
		"'acht'", "'negen'", "'tien'", "'elf'", "'twaalf'", "'dertien'", "'veertien'", 
		"'vijftien'", "'zestien'", "'zeventien'", "'achttien'", "'negentien'", 
		"'twintig'", "'dertig'", "'veertig'", "'vijftig'", "'zestig'", "'zeventig'", 
		"'tachtig'", "'negentig'", "'honderd'", "'duizend'", "'miljoen'", "'miljard'", 
		"'biljoen'", "'biljard'", "'triljoen'", "'triljard'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", 
		"NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", 
		"SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY", "THIRTY", "FORTY", 
		"FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY", "HUNDRED", "THOUSAND", 
		"MILLION", "BILLION", "TRILION", "QUADRILION", "QUINTILION", "SEXTILION", 
		"EN", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DutchNumbers._LITERAL_NAMES, DutchNumbers._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DutchNumbers.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DutchNumbers.g4"; }

	// @Override
	public get ruleNames(): string[] { return DutchNumbers.ruleNames; }

	// @Override
	public get serializedATN(): string { return DutchNumbers._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DutchNumbers._ATN, this);
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DutchNumbers.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.whole_number();
			this.state = 41;
			this.match(DutchNumbers.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whole_number(): Whole_numberContext {
		let _localctx: Whole_numberContext = new Whole_numberContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DutchNumbers.RULE_whole_number);
		try {
			this.state = 53;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 43;
				this.ones();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				this.tens();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 45;
				this.hundreds();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 46;
				this.thousands();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 47;
				this.millions();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 48;
				this.billions();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 49;
				this.triljons();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 50;
				this.quadrilions();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 51;
				this.quintilions();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 52;
				this.sextilions();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ones(): OnesContext {
		let _localctx: OnesContext = new OnesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DutchNumbers.RULE_ones);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tens(): TensContext {
		let _localctx: TensContext = new TensContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DutchNumbers.RULE_tens);
		let _la: number;
		try {
			this.state = 73;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DutchNumbers.ONE:
			case DutchNumbers.TWO:
			case DutchNumbers.THREE:
			case DutchNumbers.FOUR:
			case DutchNumbers.FIVE:
			case DutchNumbers.SIX:
			case DutchNumbers.SEVEN:
			case DutchNumbers.EIGHT:
			case DutchNumbers.NINE:
			case DutchNumbers.TWENTY:
			case DutchNumbers.THIRTY:
			case DutchNumbers.FORTY:
			case DutchNumbers.FIFTY:
			case DutchNumbers.SIXTY:
			case DutchNumbers.SEVENTY:
			case DutchNumbers.EIGHTY:
			case DutchNumbers.NINETY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE))) !== 0)) {
					{
					this.state = 57;
					this.ones();
					this.state = 58;
					this.match(DutchNumbers.EN);
					}
				}

				this.state = 62;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case DutchNumbers.TEN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.match(DutchNumbers.TEN);
				}
				break;
			case DutchNumbers.ELEVEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 64;
				this.match(DutchNumbers.ELEVEN);
				}
				break;
			case DutchNumbers.TWELVE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 65;
				this.match(DutchNumbers.TWELVE);
				}
				break;
			case DutchNumbers.THIRTEEN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 66;
				this.match(DutchNumbers.THIRTEEN);
				}
				break;
			case DutchNumbers.FOURTEEN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 67;
				this.match(DutchNumbers.FOURTEEN);
				}
				break;
			case DutchNumbers.FIFTEEN:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 68;
				this.match(DutchNumbers.FIFTEEN);
				}
				break;
			case DutchNumbers.SIXTEEN:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 69;
				this.match(DutchNumbers.SIXTEEN);
				}
				break;
			case DutchNumbers.SEVENTEEN:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 70;
				this.match(DutchNumbers.SEVENTEEN);
				}
				break;
			case DutchNumbers.EIGHTEEN:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 71;
				this.match(DutchNumbers.EIGHTEEN);
				}
				break;
			case DutchNumbers.NINETEEN:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 72;
				this.match(DutchNumbers.NINETEEN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hundreds(): HundredsContext {
		let _localctx: HundredsContext = new HundredsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DutchNumbers.RULE_hundreds);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 75;
				this.ones();
				}
				break;

			case 2:
				{
				this.state = 76;
				this.tens();
				}
				break;
			}
			this.state = 79;
			this.match(DutchNumbers.HUNDRED);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY))) !== 0) || _la === DutchNumbers.EN) {
				{
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DutchNumbers.EN) {
					{
					this.state = 80;
					this.match(DutchNumbers.EN);
					}
				}

				this.state = 85;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 83;
					this.ones();
					}
					break;

				case 2:
					{
					this.state = 84;
					this.tens();
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prefixes(): PrefixesContext {
		let _localctx: PrefixesContext = new PrefixesContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DutchNumbers.RULE_prefixes);
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 89;
				this.ones();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 90;
				this.tens();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 91;
				this.hundreds();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thousands(): ThousandsContext {
		let _localctx: ThousandsContext = new ThousandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DutchNumbers.RULE_thousands);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED))) !== 0)) {
				{
				this.state = 94;
				this.prefixes();
				}
			}

			this.state = 97;
			this.match(DutchNumbers.THOUSAND);
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED))) !== 0) || _la === DutchNumbers.EN) {
				{
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DutchNumbers.EN) {
					{
					this.state = 98;
					this.match(DutchNumbers.EN);
					}
				}

				this.state = 101;
				this.thousands_suffixes();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public millions(): MillionsContext {
		let _localctx: MillionsContext = new MillionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DutchNumbers.RULE_millions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED))) !== 0)) {
				{
				this.state = 104;
				this.prefixes();
				}
			}

			this.state = 107;
			this.match(DutchNumbers.MILLION);
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED) | (1 << DutchNumbers.THOUSAND))) !== 0) || _la === DutchNumbers.EN) {
				{
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DutchNumbers.EN) {
					{
					this.state = 108;
					this.match(DutchNumbers.EN);
					}
				}

				this.state = 111;
				this.millions_suffixes();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public billions(): BillionsContext {
		let _localctx: BillionsContext = new BillionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DutchNumbers.RULE_billions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED))) !== 0)) {
				{
				this.state = 114;
				this.prefixes();
				}
			}

			this.state = 117;
			this.match(DutchNumbers.BILLION);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED) | (1 << DutchNumbers.THOUSAND) | (1 << DutchNumbers.MILLION))) !== 0) || _la === DutchNumbers.EN) {
				{
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DutchNumbers.EN) {
					{
					this.state = 118;
					this.match(DutchNumbers.EN);
					}
				}

				this.state = 121;
				this.billions_suffixes();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triljons(): TriljonsContext {
		let _localctx: TriljonsContext = new TriljonsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DutchNumbers.RULE_triljons);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED))) !== 0)) {
				{
				this.state = 124;
				this.prefixes();
				}
			}

			this.state = 127;
			this.match(DutchNumbers.TRILION);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED) | (1 << DutchNumbers.THOUSAND) | (1 << DutchNumbers.MILLION))) !== 0) || _la === DutchNumbers.EN) {
				{
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DutchNumbers.EN) {
					{
					this.state = 128;
					this.match(DutchNumbers.EN);
					}
				}

				this.state = 131;
				this.triljons_suffixes();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quadrilions(): QuadrilionsContext {
		let _localctx: QuadrilionsContext = new QuadrilionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, DutchNumbers.RULE_quadrilions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED))) !== 0)) {
				{
				this.state = 134;
				this.prefixes();
				}
			}

			this.state = 137;
			this.match(DutchNumbers.QUADRILION);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED) | (1 << DutchNumbers.THOUSAND) | (1 << DutchNumbers.MILLION))) !== 0) || _la === DutchNumbers.TRILION || _la === DutchNumbers.EN) {
				{
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DutchNumbers.EN) {
					{
					this.state = 138;
					this.match(DutchNumbers.EN);
					}
				}

				this.state = 141;
				this.quadrilions_suffixes();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quintilions(): QuintilionsContext {
		let _localctx: QuintilionsContext = new QuintilionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, DutchNumbers.RULE_quintilions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED))) !== 0)) {
				{
				this.state = 144;
				this.prefixes();
				}
			}

			this.state = 147;
			this.match(DutchNumbers.QUINTILION);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED) | (1 << DutchNumbers.THOUSAND) | (1 << DutchNumbers.MILLION))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DutchNumbers.TRILION - 32)) | (1 << (DutchNumbers.QUADRILION - 32)) | (1 << (DutchNumbers.EN - 32)))) !== 0)) {
				{
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DutchNumbers.EN) {
					{
					this.state = 148;
					this.match(DutchNumbers.EN);
					}
				}

				this.state = 151;
				this.quintilions_suffixes();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sextilions(): SextilionsContext {
		let _localctx: SextilionsContext = new SextilionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, DutchNumbers.RULE_sextilions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED))) !== 0)) {
				{
				this.state = 154;
				this.prefixes();
				}
			}

			this.state = 157;
			this.match(DutchNumbers.SEXTILION);
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbers.ONE) | (1 << DutchNumbers.TWO) | (1 << DutchNumbers.THREE) | (1 << DutchNumbers.FOUR) | (1 << DutchNumbers.FIVE) | (1 << DutchNumbers.SIX) | (1 << DutchNumbers.SEVEN) | (1 << DutchNumbers.EIGHT) | (1 << DutchNumbers.NINE) | (1 << DutchNumbers.TEN) | (1 << DutchNumbers.ELEVEN) | (1 << DutchNumbers.TWELVE) | (1 << DutchNumbers.THIRTEEN) | (1 << DutchNumbers.FOURTEEN) | (1 << DutchNumbers.FIFTEEN) | (1 << DutchNumbers.SIXTEEN) | (1 << DutchNumbers.SEVENTEEN) | (1 << DutchNumbers.EIGHTEEN) | (1 << DutchNumbers.NINETEEN) | (1 << DutchNumbers.TWENTY) | (1 << DutchNumbers.THIRTY) | (1 << DutchNumbers.FORTY) | (1 << DutchNumbers.FIFTY) | (1 << DutchNumbers.SIXTY) | (1 << DutchNumbers.SEVENTY) | (1 << DutchNumbers.EIGHTY) | (1 << DutchNumbers.NINETY) | (1 << DutchNumbers.HUNDRED) | (1 << DutchNumbers.THOUSAND) | (1 << DutchNumbers.MILLION))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DutchNumbers.TRILION - 32)) | (1 << (DutchNumbers.QUADRILION - 32)) | (1 << (DutchNumbers.QUINTILION - 32)) | (1 << (DutchNumbers.EN - 32)))) !== 0)) {
				{
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DutchNumbers.EN) {
					{
					this.state = 158;
					this.match(DutchNumbers.EN);
					}
				}

				this.state = 161;
				this.sextilions_suffixes();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thousands_suffixes(): Thousands_suffixesContext {
		let _localctx: Thousands_suffixesContext = new Thousands_suffixesContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, DutchNumbers.RULE_thousands_suffixes);
		try {
			this.state = 167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 164;
				this.ones();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 165;
				this.tens();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 166;
				this.hundreds();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public millions_suffixes(): Millions_suffixesContext {
		let _localctx: Millions_suffixesContext = new Millions_suffixesContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, DutchNumbers.RULE_millions_suffixes);
		try {
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 169;
				this.thousands_suffixes();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.thousands();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public billions_suffixes(): Billions_suffixesContext {
		let _localctx: Billions_suffixesContext = new Billions_suffixesContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, DutchNumbers.RULE_billions_suffixes);
		try {
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 173;
				this.millions_suffixes();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 174;
				this.millions();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triljons_suffixes(): Triljons_suffixesContext {
		let _localctx: Triljons_suffixesContext = new Triljons_suffixesContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, DutchNumbers.RULE_triljons_suffixes);
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 177;
				this.millions_suffixes();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 178;
				this.millions();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quadrilions_suffixes(): Quadrilions_suffixesContext {
		let _localctx: Quadrilions_suffixesContext = new Quadrilions_suffixesContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, DutchNumbers.RULE_quadrilions_suffixes);
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 181;
				this.triljons_suffixes();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 182;
				this.triljons();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quintilions_suffixes(): Quintilions_suffixesContext {
		let _localctx: Quintilions_suffixesContext = new Quintilions_suffixesContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, DutchNumbers.RULE_quintilions_suffixes);
		try {
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.quadrilions_suffixes();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 186;
				this.quadrilions();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sextilions_suffixes(): Sextilions_suffixesContext {
		let _localctx: Sextilions_suffixesContext = new Sextilions_suffixesContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, DutchNumbers.RULE_sextilions_suffixes);
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 189;
				this.quintilions_suffixes();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 190;
				this.quintilions();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\xC4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x038\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x05\x05?\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05L\n\x05\x03\x06\x03\x06\x05\x06P\n\x06\x03\x06" +
		"\x03\x06\x05\x06T\n\x06\x03\x06\x03\x06\x05\x06X\n\x06\x05\x06Z\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x05\x07_\n\x07\x03\b\x05\bb\n\b\x03\b\x03\b\x05" +
		"\bf\n\b\x03\b\x05\bi\n\b\x03\t\x05\tl\n\t\x03\t\x03\t\x05\tp\n\t\x03\t" +
		"\x05\ts\n\t\x03\n\x05\nv\n\n\x03\n\x03\n\x05\nz\n\n\x03\n\x05\n}\n\n\x03" +
		"\v\x05\v\x80\n\v\x03\v\x03\v\x05\v\x84\n\v\x03\v\x05\v\x87\n\v\x03\f\x05" +
		"\f\x8A\n\f\x03\f\x03\f\x05\f\x8E\n\f\x03\f\x05\f\x91\n\f\x03\r\x05\r\x94" +
		"\n\r\x03\r\x03\r\x05\r\x98\n\r\x03\r\x05\r\x9B\n\r\x03\x0E\x05\x0E\x9E" +
		"\n\x0E\x03\x0E\x03\x0E\x05\x0E\xA2\n\x0E\x03\x0E\x05\x0E\xA5\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\xAA\n\x0F\x03\x10\x03\x10\x05\x10\xAE\n\x10" +
		"\x03\x11\x03\x11\x05\x11\xB2\n\x11\x03\x12\x03\x12\x05\x12\xB6\n\x12\x03" +
		"\x13\x03\x13\x05\x13\xBA\n\x13\x03\x14\x03\x14\x05\x14\xBE\n\x14\x03\x15" +
		"\x03\x15\x05\x15\xC2\n\x15\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x04\x03\x02\x03" +
		"\v\x03\x02\x16\x1D\x02\xE7\x02*\x03\x02\x02\x02\x047\x03\x02\x02\x02\x06" +
		"9\x03\x02\x02\x02\bK\x03\x02\x02\x02\nO\x03\x02\x02\x02\f^\x03\x02\x02" +
		"\x02\x0Ea\x03\x02\x02\x02\x10k\x03\x02\x02\x02\x12u\x03\x02\x02\x02\x14" +
		"\x7F\x03\x02\x02\x02\x16\x89\x03\x02\x02\x02\x18\x93\x03\x02\x02\x02\x1A" +
		"\x9D\x03\x02\x02\x02\x1C\xA9\x03\x02\x02\x02\x1E\xAD\x03\x02\x02\x02 " +
		"\xB1\x03\x02\x02\x02\"\xB5\x03\x02\x02\x02$\xB9\x03\x02\x02\x02&\xBD\x03" +
		"\x02\x02\x02(\xC1\x03\x02\x02\x02*+\x05\x04\x03\x02+,\x07\x02\x02\x03" +
		",\x03\x03\x02\x02\x02-8\x05\x06\x04\x02.8\x05\b\x05\x02/8\x05\n\x06\x02" +
		"08\x05\x0E\b\x0218\x05\x10\t\x0228\x05\x12\n\x0238\x05\x14\v\x0248\x05" +
		"\x16\f\x0258\x05\x18\r\x0268\x05\x1A\x0E\x027-\x03\x02\x02\x027.\x03\x02" +
		"\x02\x027/\x03\x02\x02\x0270\x03\x02\x02\x0271\x03\x02\x02\x0272\x03\x02" +
		"\x02\x0273\x03\x02\x02\x0274\x03\x02\x02\x0275\x03\x02\x02\x0276\x03\x02" +
		"\x02\x028\x05\x03\x02\x02\x029:\t\x02\x02\x02:\x07\x03\x02\x02\x02;<\x05" +
		"\x06\x04\x02<=\x07&\x02\x02=?\x03\x02\x02\x02>;\x03\x02\x02\x02>?\x03" +
		"\x02\x02\x02?@\x03\x02\x02\x02@L\t\x03\x02\x02AL\x07\f\x02\x02BL\x07\r" +
		"\x02\x02CL\x07\x0E\x02\x02DL\x07\x0F\x02\x02EL\x07\x10\x02\x02FL\x07\x11" +
		"\x02\x02GL\x07\x12\x02\x02HL\x07\x13\x02\x02IL\x07\x14\x02\x02JL\x07\x15" +
		"\x02\x02K>\x03\x02\x02\x02KA\x03\x02\x02\x02KB\x03\x02\x02\x02KC\x03\x02" +
		"\x02\x02KD\x03\x02\x02\x02KE\x03\x02\x02\x02KF\x03\x02\x02\x02KG\x03\x02" +
		"\x02\x02KH\x03\x02\x02\x02KI\x03\x02\x02\x02KJ\x03\x02\x02\x02L\t\x03" +
		"\x02\x02\x02MP\x05\x06\x04\x02NP\x05\b\x05\x02OM\x03\x02\x02\x02ON\x03" +
		"\x02\x02\x02OP\x03\x02\x02\x02PQ\x03\x02\x02\x02QY\x07\x1E\x02\x02RT\x07" +
		"&\x02\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02TW\x03\x02\x02\x02UX\x05" +
		"\x06\x04\x02VX\x05\b\x05\x02WU\x03\x02\x02\x02WV\x03\x02\x02\x02XZ\x03" +
		"\x02\x02\x02YS\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\v\x03\x02\x02\x02[_" +
		"\x05\x06\x04\x02\\_\x05\b\x05\x02]_\x05\n\x06\x02^[\x03\x02\x02\x02^\\" +
		"\x03\x02\x02\x02^]\x03\x02\x02\x02_\r\x03\x02\x02\x02`b\x05\f\x07\x02" +
		"a`\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x03\x02\x02\x02ch\x07\x1F\x02\x02" +
		"df\x07&\x02\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02fg\x03\x02\x02\x02" +
		"gi\x05\x1C\x0F\x02he\x03\x02\x02\x02hi\x03\x02\x02\x02i\x0F\x03\x02\x02" +
		"\x02jl\x05\f\x07\x02kj\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02" +
		"\x02mr\x07 \x02\x02np\x07&\x02\x02on\x03\x02\x02\x02op\x03\x02\x02\x02" +
		"pq\x03\x02\x02\x02qs\x05\x1E\x10\x02ro\x03\x02\x02\x02rs\x03\x02\x02\x02" +
		"s\x11\x03\x02\x02\x02tv\x05\f\x07\x02ut\x03\x02\x02\x02uv\x03\x02\x02" +
		"\x02vw\x03\x02\x02\x02w|\x07!\x02\x02xz\x07&\x02\x02yx\x03\x02\x02\x02" +
		"yz\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x05 \x11\x02|y\x03\x02\x02\x02" +
		"|}\x03\x02\x02\x02}\x13\x03\x02\x02\x02~\x80\x05\f\x07\x02\x7F~\x03\x02" +
		"\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x86\x07\"" +
		"\x02\x02\x82\x84\x07&\x02\x02\x83\x82\x03\x02\x02\x02\x83\x84\x03\x02" +
		"\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x05\"\x12\x02\x86\x83\x03\x02" +
		"\x02\x02\x86\x87\x03\x02\x02\x02\x87\x15\x03\x02\x02\x02\x88\x8A\x05\f" +
		"\x07\x02\x89\x88\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x03\x02" +
		"\x02\x02\x8B\x90\x07#\x02\x02\x8C\x8E\x07&\x02\x02\x8D\x8C\x03\x02\x02" +
		"\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91\x05$\x13" +
		"\x02\x90\x8D\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x17\x03\x02\x02" +
		"\x02\x92\x94\x05\f\x07\x02\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02" +
		"\x02\x94\x95\x03\x02\x02\x02\x95\x9A\x07$\x02\x02\x96\x98\x07&\x02\x02" +
		"\x97\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02" +
		"\x99\x9B\x05&\x14\x02\x9A\x97\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02" +
		"\x9B\x19\x03\x02\x02\x02\x9C\x9E\x05\f\x07\x02\x9D\x9C\x03\x02\x02\x02" +
		"\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA4\x07%\x02\x02" +
		"\xA0\xA2\x07&\x02\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02" +
		"\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x05(\x15\x02\xA4\xA1\x03\x02\x02\x02" +
		"\xA4\xA5\x03\x02\x02\x02\xA5\x1B\x03\x02\x02\x02\xA6\xAA\x05\x06\x04\x02" +
		"\xA7\xAA\x05\b\x05\x02\xA8\xAA\x05\n\x06\x02\xA9\xA6\x03\x02\x02\x02\xA9" +
		"\xA7\x03\x02\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\x1D\x03\x02\x02\x02\xAB" +
		"\xAE\x05\x1C\x0F\x02\xAC\xAE\x05\x0E\b\x02\xAD\xAB\x03\x02\x02\x02\xAD" +
		"\xAC\x03\x02\x02\x02\xAE\x1F\x03\x02\x02\x02\xAF\xB2\x05\x1E\x10\x02\xB0" +
		"\xB2\x05\x10\t\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB0\x03\x02\x02\x02\xB2" +
		"!\x03\x02\x02\x02\xB3\xB6\x05\x1E\x10\x02\xB4\xB6\x05\x10\t\x02\xB5\xB3" +
		"\x03\x02\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6#\x03\x02\x02\x02\xB7\xBA" +
		"\x05\"\x12\x02\xB8\xBA\x05\x14\v\x02\xB9\xB7\x03\x02\x02\x02\xB9\xB8\x03" +
		"\x02\x02\x02\xBA%\x03\x02\x02\x02\xBB\xBE\x05$\x13\x02\xBC\xBE\x05\x16" +
		"\f\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\'\x03\x02\x02" +
		"\x02\xBF\xC2\x05&\x14\x02\xC0\xC2\x05\x18\r\x02\xC1\xBF\x03\x02\x02\x02" +
		"\xC1\xC0\x03\x02\x02\x02\xC2)\x03\x02\x02\x02&7>KOSWY^aehkoruy|\x7F\x83" +
		"\x86\x89\x8D\x90\x93\x97\x9A\x9D\xA1\xA4\xA9\xAD\xB1\xB5\xB9\xBD\xC1";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DutchNumbers.__ATN) {
			DutchNumbers.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DutchNumbers._serializedATN));
		}

		return DutchNumbers.__ATN;
	}

}

export class NumberContext extends ParserRuleContext {
	public whole_number(): Whole_numberContext {
		return this.getRuleContext(0, Whole_numberContext);
	}
	public EOF(): TerminalNode { return this.getToken(DutchNumbers.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_number; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Whole_numberContext extends ParserRuleContext {
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	public hundreds(): HundredsContext | undefined {
		return this.tryGetRuleContext(0, HundredsContext);
	}
	public thousands(): ThousandsContext | undefined {
		return this.tryGetRuleContext(0, ThousandsContext);
	}
	public millions(): MillionsContext | undefined {
		return this.tryGetRuleContext(0, MillionsContext);
	}
	public billions(): BillionsContext | undefined {
		return this.tryGetRuleContext(0, BillionsContext);
	}
	public triljons(): TriljonsContext | undefined {
		return this.tryGetRuleContext(0, TriljonsContext);
	}
	public quadrilions(): QuadrilionsContext | undefined {
		return this.tryGetRuleContext(0, QuadrilionsContext);
	}
	public quintilions(): QuintilionsContext | undefined {
		return this.tryGetRuleContext(0, QuintilionsContext);
	}
	public sextilions(): SextilionsContext | undefined {
		return this.tryGetRuleContext(0, SextilionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_whole_number; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterWhole_number) {
			listener.enterWhole_number(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitWhole_number) {
			listener.exitWhole_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitWhole_number) {
			return visitor.visitWhole_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnesContext extends ParserRuleContext {
	public ONE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.ONE, 0); }
	public TWO(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.TWO, 0); }
	public THREE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.THREE, 0); }
	public FOUR(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.FOUR, 0); }
	public FIVE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.FIVE, 0); }
	public SIX(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.SIX, 0); }
	public SEVEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.SEVEN, 0); }
	public EIGHT(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EIGHT, 0); }
	public NINE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.NINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_ones; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterOnes) {
			listener.enterOnes(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitOnes) {
			listener.exitOnes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitOnes) {
			return visitor.visitOnes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TensContext extends ParserRuleContext {
	public TWENTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.TWENTY, 0); }
	public THIRTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.THIRTY, 0); }
	public FORTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.FORTY, 0); }
	public FIFTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.FIFTY, 0); }
	public SIXTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.SIXTY, 0); }
	public SEVENTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.SEVENTY, 0); }
	public EIGHTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EIGHTY, 0); }
	public NINETY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.NINETY, 0); }
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EN, 0); }
	public TEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.TEN, 0); }
	public ELEVEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.ELEVEN, 0); }
	public TWELVE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.TWELVE, 0); }
	public THIRTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.THIRTEEN, 0); }
	public FOURTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.FOURTEEN, 0); }
	public FIFTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.FIFTEEN, 0); }
	public SIXTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.SIXTEEN, 0); }
	public SEVENTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.SEVENTEEN, 0); }
	public EIGHTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EIGHTEEN, 0); }
	public NINETEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.NINETEEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_tens; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterTens) {
			listener.enterTens(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitTens) {
			listener.exitTens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitTens) {
			return visitor.visitTens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HundredsContext extends ParserRuleContext {
	public HUNDRED(): TerminalNode { return this.getToken(DutchNumbers.HUNDRED, 0); }
	public ones(): OnesContext[];
	public ones(i: number): OnesContext;
	public ones(i?: number): OnesContext | OnesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OnesContext);
		} else {
			return this.getRuleContext(i, OnesContext);
		}
	}
	public tens(): TensContext[];
	public tens(i: number): TensContext;
	public tens(i?: number): TensContext | TensContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TensContext);
		} else {
			return this.getRuleContext(i, TensContext);
		}
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_hundreds; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterHundreds) {
			listener.enterHundreds(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitHundreds) {
			listener.exitHundreds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitHundreds) {
			return visitor.visitHundreds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixesContext extends ParserRuleContext {
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	public hundreds(): HundredsContext | undefined {
		return this.tryGetRuleContext(0, HundredsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_prefixes; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterPrefixes) {
			listener.enterPrefixes(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitPrefixes) {
			listener.exitPrefixes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitPrefixes) {
			return visitor.visitPrefixes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThousandsContext extends ParserRuleContext {
	public THOUSAND(): TerminalNode { return this.getToken(DutchNumbers.THOUSAND, 0); }
	public prefixes(): PrefixesContext | undefined {
		return this.tryGetRuleContext(0, PrefixesContext);
	}
	public thousands_suffixes(): Thousands_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Thousands_suffixesContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_thousands; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterThousands) {
			listener.enterThousands(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitThousands) {
			listener.exitThousands(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitThousands) {
			return visitor.visitThousands(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MillionsContext extends ParserRuleContext {
	public MILLION(): TerminalNode { return this.getToken(DutchNumbers.MILLION, 0); }
	public prefixes(): PrefixesContext | undefined {
		return this.tryGetRuleContext(0, PrefixesContext);
	}
	public millions_suffixes(): Millions_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Millions_suffixesContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_millions; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterMillions) {
			listener.enterMillions(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitMillions) {
			listener.exitMillions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitMillions) {
			return visitor.visitMillions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BillionsContext extends ParserRuleContext {
	public BILLION(): TerminalNode { return this.getToken(DutchNumbers.BILLION, 0); }
	public prefixes(): PrefixesContext | undefined {
		return this.tryGetRuleContext(0, PrefixesContext);
	}
	public billions_suffixes(): Billions_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Billions_suffixesContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_billions; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterBillions) {
			listener.enterBillions(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitBillions) {
			listener.exitBillions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitBillions) {
			return visitor.visitBillions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TriljonsContext extends ParserRuleContext {
	public TRILION(): TerminalNode { return this.getToken(DutchNumbers.TRILION, 0); }
	public prefixes(): PrefixesContext | undefined {
		return this.tryGetRuleContext(0, PrefixesContext);
	}
	public triljons_suffixes(): Triljons_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Triljons_suffixesContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_triljons; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterTriljons) {
			listener.enterTriljons(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitTriljons) {
			listener.exitTriljons(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitTriljons) {
			return visitor.visitTriljons(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuadrilionsContext extends ParserRuleContext {
	public QUADRILION(): TerminalNode { return this.getToken(DutchNumbers.QUADRILION, 0); }
	public prefixes(): PrefixesContext | undefined {
		return this.tryGetRuleContext(0, PrefixesContext);
	}
	public quadrilions_suffixes(): Quadrilions_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Quadrilions_suffixesContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_quadrilions; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterQuadrilions) {
			listener.enterQuadrilions(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitQuadrilions) {
			listener.exitQuadrilions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitQuadrilions) {
			return visitor.visitQuadrilions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuintilionsContext extends ParserRuleContext {
	public QUINTILION(): TerminalNode { return this.getToken(DutchNumbers.QUINTILION, 0); }
	public prefixes(): PrefixesContext | undefined {
		return this.tryGetRuleContext(0, PrefixesContext);
	}
	public quintilions_suffixes(): Quintilions_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Quintilions_suffixesContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_quintilions; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterQuintilions) {
			listener.enterQuintilions(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitQuintilions) {
			listener.exitQuintilions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitQuintilions) {
			return visitor.visitQuintilions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SextilionsContext extends ParserRuleContext {
	public SEXTILION(): TerminalNode { return this.getToken(DutchNumbers.SEXTILION, 0); }
	public prefixes(): PrefixesContext | undefined {
		return this.tryGetRuleContext(0, PrefixesContext);
	}
	public sextilions_suffixes(): Sextilions_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Sextilions_suffixesContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbers.EN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_sextilions; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterSextilions) {
			listener.enterSextilions(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitSextilions) {
			listener.exitSextilions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitSextilions) {
			return visitor.visitSextilions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Thousands_suffixesContext extends ParserRuleContext {
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	public hundreds(): HundredsContext | undefined {
		return this.tryGetRuleContext(0, HundredsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_thousands_suffixes; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterThousands_suffixes) {
			listener.enterThousands_suffixes(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitThousands_suffixes) {
			listener.exitThousands_suffixes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitThousands_suffixes) {
			return visitor.visitThousands_suffixes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Millions_suffixesContext extends ParserRuleContext {
	public thousands_suffixes(): Thousands_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Thousands_suffixesContext);
	}
	public thousands(): ThousandsContext | undefined {
		return this.tryGetRuleContext(0, ThousandsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_millions_suffixes; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterMillions_suffixes) {
			listener.enterMillions_suffixes(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitMillions_suffixes) {
			listener.exitMillions_suffixes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitMillions_suffixes) {
			return visitor.visitMillions_suffixes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Billions_suffixesContext extends ParserRuleContext {
	public millions_suffixes(): Millions_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Millions_suffixesContext);
	}
	public millions(): MillionsContext | undefined {
		return this.tryGetRuleContext(0, MillionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_billions_suffixes; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterBillions_suffixes) {
			listener.enterBillions_suffixes(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitBillions_suffixes) {
			listener.exitBillions_suffixes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitBillions_suffixes) {
			return visitor.visitBillions_suffixes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Triljons_suffixesContext extends ParserRuleContext {
	public millions_suffixes(): Millions_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Millions_suffixesContext);
	}
	public millions(): MillionsContext | undefined {
		return this.tryGetRuleContext(0, MillionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_triljons_suffixes; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterTriljons_suffixes) {
			listener.enterTriljons_suffixes(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitTriljons_suffixes) {
			listener.exitTriljons_suffixes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitTriljons_suffixes) {
			return visitor.visitTriljons_suffixes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Quadrilions_suffixesContext extends ParserRuleContext {
	public triljons_suffixes(): Triljons_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Triljons_suffixesContext);
	}
	public triljons(): TriljonsContext | undefined {
		return this.tryGetRuleContext(0, TriljonsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_quadrilions_suffixes; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterQuadrilions_suffixes) {
			listener.enterQuadrilions_suffixes(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitQuadrilions_suffixes) {
			listener.exitQuadrilions_suffixes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitQuadrilions_suffixes) {
			return visitor.visitQuadrilions_suffixes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Quintilions_suffixesContext extends ParserRuleContext {
	public quadrilions_suffixes(): Quadrilions_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Quadrilions_suffixesContext);
	}
	public quadrilions(): QuadrilionsContext | undefined {
		return this.tryGetRuleContext(0, QuadrilionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_quintilions_suffixes; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterQuintilions_suffixes) {
			listener.enterQuintilions_suffixes(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitQuintilions_suffixes) {
			listener.exitQuintilions_suffixes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitQuintilions_suffixes) {
			return visitor.visitQuintilions_suffixes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sextilions_suffixesContext extends ParserRuleContext {
	public quintilions_suffixes(): Quintilions_suffixesContext | undefined {
		return this.tryGetRuleContext(0, Quintilions_suffixesContext);
	}
	public quintilions(): QuintilionsContext | undefined {
		return this.tryGetRuleContext(0, QuintilionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbers.RULE_sextilions_suffixes; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterSextilions_suffixes) {
			listener.enterSextilions_suffixes(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitSextilions_suffixes) {
			listener.exitSextilions_suffixes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitSextilions_suffixes) {
			return visitor.visitSextilions_suffixes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


