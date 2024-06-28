// Generated from src/grammar/DutchNumbersParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { DutchNumbersParserListener } from "./DutchNumbersParserListener";
import { DutchNumbersParserVisitor } from "./DutchNumbersParserVisitor";


export class DutchNumbersParser extends Parser {
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
	public static readonly TWO_PLURAL = 32;
	public static readonly THREE_PLURAL = 33;
	public static readonly EN = 34;
	public static readonly WS = 35;
	public static readonly RULE_number = 0;
	public static readonly RULE_whole_number = 1;
	public static readonly RULE_ones = 2;
	public static readonly RULE_tens = 3;
	public static readonly RULE_hundreds = 4;
	public static readonly RULE_thousands = 5;
	public static readonly RULE_millions = 6;
	public static readonly RULE_billions = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"number", "whole_number", "ones", "tens", "hundreds", "thousands", "millions", 
		"billions",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'een'", "'twee'", "'drie'", "'vier'", "'vijf'", "'zes'", "'zeven'", 
		"'acht'", "'negen'", "'tien'", "'elf'", "'twaalf'", "'dertien'", "'veertien'", 
		"'vijftien'", "'zestien'", "'zeventien'", "'achttien'", "'negentien'", 
		"'twintig'", "'dertig'", "'veertig'", "'vijftig'", "'zestig'", "'zeventig'", 
		"'tachtig'", "'negentig'", "'honderd'", "'duizend'", "'miljoen'", "'miljard'", 
		"'twee\u00EBn'", "'drie\u00EBn'", "'en'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", 
		"NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", 
		"SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY", "THIRTY", "FORTY", 
		"FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY", "HUNDRED", "THOUSAND", 
		"MILLION", "BILLION", "TWO_PLURAL", "THREE_PLURAL", "EN", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DutchNumbersParser._LITERAL_NAMES, DutchNumbersParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DutchNumbersParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DutchNumbersParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return DutchNumbersParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DutchNumbersParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DutchNumbersParser._ATN, this);
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DutchNumbersParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.whole_number();
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
		this.enterRule(_localctx, 2, DutchNumbersParser.RULE_whole_number);
		try {
			this.state = 24;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 18;
				this.ones();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 19;
				this.tens();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 20;
				this.hundreds();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 21;
				this.thousands();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 22;
				this.millions();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 23;
				this.billions();
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
		this.enterRule(_localctx, 4, DutchNumbersParser.RULE_ones);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.ONE) | (1 << DutchNumbersParser.TWO) | (1 << DutchNumbersParser.THREE) | (1 << DutchNumbersParser.FOUR) | (1 << DutchNumbersParser.FIVE) | (1 << DutchNumbersParser.SIX) | (1 << DutchNumbersParser.SEVEN) | (1 << DutchNumbersParser.EIGHT) | (1 << DutchNumbersParser.NINE))) !== 0))) {
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
		this.enterRule(_localctx, 6, DutchNumbersParser.RULE_tens);
		let _la: number;
		try {
			this.state = 48;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DutchNumbersParser.TWO_PLURAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 28;
				this.match(DutchNumbersParser.TWO_PLURAL);
				this.state = 29;
				this.ones();
				}
				break;
			case DutchNumbersParser.THREE_PLURAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 30;
				this.match(DutchNumbersParser.THREE_PLURAL);
				this.state = 31;
				this.ones();
				}
				break;
			case DutchNumbersParser.ONE:
			case DutchNumbersParser.TWO:
			case DutchNumbersParser.THREE:
			case DutchNumbersParser.FOUR:
			case DutchNumbersParser.FIVE:
			case DutchNumbersParser.SIX:
			case DutchNumbersParser.SEVEN:
			case DutchNumbersParser.EIGHT:
			case DutchNumbersParser.NINE:
			case DutchNumbersParser.TWENTY:
			case DutchNumbersParser.THIRTY:
			case DutchNumbersParser.FORTY:
			case DutchNumbersParser.FIFTY:
			case DutchNumbersParser.SIXTY:
			case DutchNumbersParser.SEVENTY:
			case DutchNumbersParser.EIGHTY:
			case DutchNumbersParser.NINETY:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.ONE) | (1 << DutchNumbersParser.TWO) | (1 << DutchNumbersParser.THREE) | (1 << DutchNumbersParser.FOUR) | (1 << DutchNumbersParser.FIVE) | (1 << DutchNumbersParser.SIX) | (1 << DutchNumbersParser.SEVEN) | (1 << DutchNumbersParser.EIGHT) | (1 << DutchNumbersParser.NINE))) !== 0)) {
					{
					this.state = 32;
					this.ones();
					this.state = 33;
					this.match(DutchNumbersParser.EN);
					}
				}

				this.state = 37;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.TWENTY) | (1 << DutchNumbersParser.THIRTY) | (1 << DutchNumbersParser.FORTY) | (1 << DutchNumbersParser.FIFTY) | (1 << DutchNumbersParser.SIXTY) | (1 << DutchNumbersParser.SEVENTY) | (1 << DutchNumbersParser.EIGHTY) | (1 << DutchNumbersParser.NINETY))) !== 0))) {
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
			case DutchNumbersParser.TEN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 38;
				this.match(DutchNumbersParser.TEN);
				}
				break;
			case DutchNumbersParser.ELEVEN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 39;
				this.match(DutchNumbersParser.ELEVEN);
				}
				break;
			case DutchNumbersParser.TWELVE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 40;
				this.match(DutchNumbersParser.TWELVE);
				}
				break;
			case DutchNumbersParser.THIRTEEN:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 41;
				this.match(DutchNumbersParser.THIRTEEN);
				}
				break;
			case DutchNumbersParser.FOURTEEN:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 42;
				this.match(DutchNumbersParser.FOURTEEN);
				}
				break;
			case DutchNumbersParser.FIFTEEN:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 43;
				this.match(DutchNumbersParser.FIFTEEN);
				}
				break;
			case DutchNumbersParser.SIXTEEN:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 44;
				this.match(DutchNumbersParser.SIXTEEN);
				}
				break;
			case DutchNumbersParser.SEVENTEEN:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 45;
				this.match(DutchNumbersParser.SEVENTEEN);
				}
				break;
			case DutchNumbersParser.EIGHTEEN:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 46;
				this.match(DutchNumbersParser.EIGHTEEN);
				}
				break;
			case DutchNumbersParser.NINETEEN:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 47;
				this.match(DutchNumbersParser.NINETEEN);
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
		this.enterRule(_localctx, 8, DutchNumbersParser.RULE_hundreds);
		let _la: number;
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DutchNumbersParser.HUNDRED:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 50;
				this.match(DutchNumbersParser.HUNDRED);
				}
				break;
			case DutchNumbersParser.ONE:
			case DutchNumbersParser.TWO:
			case DutchNumbersParser.THREE:
			case DutchNumbersParser.FOUR:
			case DutchNumbersParser.FIVE:
			case DutchNumbersParser.SIX:
			case DutchNumbersParser.SEVEN:
			case DutchNumbersParser.EIGHT:
			case DutchNumbersParser.NINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 51;
				this.ones();
				this.state = 52;
				this.match(DutchNumbersParser.HUNDRED);
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.ONE) | (1 << DutchNumbersParser.TWO) | (1 << DutchNumbersParser.THREE) | (1 << DutchNumbersParser.FOUR) | (1 << DutchNumbersParser.FIVE) | (1 << DutchNumbersParser.SIX) | (1 << DutchNumbersParser.SEVEN) | (1 << DutchNumbersParser.EIGHT) | (1 << DutchNumbersParser.NINE) | (1 << DutchNumbersParser.TEN) | (1 << DutchNumbersParser.ELEVEN) | (1 << DutchNumbersParser.TWELVE) | (1 << DutchNumbersParser.THIRTEEN) | (1 << DutchNumbersParser.FOURTEEN) | (1 << DutchNumbersParser.FIFTEEN) | (1 << DutchNumbersParser.SIXTEEN) | (1 << DutchNumbersParser.SEVENTEEN) | (1 << DutchNumbersParser.EIGHTEEN) | (1 << DutchNumbersParser.NINETEEN) | (1 << DutchNumbersParser.TWENTY) | (1 << DutchNumbersParser.THIRTY) | (1 << DutchNumbersParser.FORTY) | (1 << DutchNumbersParser.FIFTY) | (1 << DutchNumbersParser.SIXTY) | (1 << DutchNumbersParser.SEVENTY) | (1 << DutchNumbersParser.EIGHTY) | (1 << DutchNumbersParser.NINETY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DutchNumbersParser.TWO_PLURAL - 32)) | (1 << (DutchNumbersParser.THREE_PLURAL - 32)) | (1 << (DutchNumbersParser.EN - 32)))) !== 0)) {
					{
					this.state = 54;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DutchNumbersParser.EN) {
						{
						this.state = 53;
						this.match(DutchNumbersParser.EN);
						}
					}

					this.state = 56;
					this.tens();
					}
				}

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
	public thousands(): ThousandsContext {
		let _localctx: ThousandsContext = new ThousandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DutchNumbersParser.RULE_thousands);
		let _la: number;
		try {
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 61;
				this.match(DutchNumbersParser.THOUSAND);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 62;
				this.ones();
				this.state = 63;
				this.match(DutchNumbersParser.THOUSAND);
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.ONE) | (1 << DutchNumbersParser.TWO) | (1 << DutchNumbersParser.THREE) | (1 << DutchNumbersParser.FOUR) | (1 << DutchNumbersParser.FIVE) | (1 << DutchNumbersParser.SIX) | (1 << DutchNumbersParser.SEVEN) | (1 << DutchNumbersParser.EIGHT) | (1 << DutchNumbersParser.NINE))) !== 0) || _la === DutchNumbersParser.EN) {
					{
					this.state = 65;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DutchNumbersParser.EN) {
						{
						this.state = 64;
						this.match(DutchNumbersParser.EN);
						}
					}

					this.state = 67;
					this.ones();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 70;
				this.ones();
				this.state = 71;
				this.match(DutchNumbersParser.THOUSAND);
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.ONE) | (1 << DutchNumbersParser.TWO) | (1 << DutchNumbersParser.THREE) | (1 << DutchNumbersParser.FOUR) | (1 << DutchNumbersParser.FIVE) | (1 << DutchNumbersParser.SIX) | (1 << DutchNumbersParser.SEVEN) | (1 << DutchNumbersParser.EIGHT) | (1 << DutchNumbersParser.NINE) | (1 << DutchNumbersParser.HUNDRED))) !== 0) || _la === DutchNumbersParser.EN) {
					{
					this.state = 73;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DutchNumbersParser.EN) {
						{
						this.state = 72;
						this.match(DutchNumbersParser.EN);
						}
					}

					this.state = 75;
					this.hundreds();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 78;
				this.ones();
				this.state = 79;
				this.match(DutchNumbersParser.THOUSAND);
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.ONE) | (1 << DutchNumbersParser.TWO) | (1 << DutchNumbersParser.THREE) | (1 << DutchNumbersParser.FOUR) | (1 << DutchNumbersParser.FIVE) | (1 << DutchNumbersParser.SIX) | (1 << DutchNumbersParser.SEVEN) | (1 << DutchNumbersParser.EIGHT) | (1 << DutchNumbersParser.NINE) | (1 << DutchNumbersParser.TEN) | (1 << DutchNumbersParser.ELEVEN) | (1 << DutchNumbersParser.TWELVE) | (1 << DutchNumbersParser.THIRTEEN) | (1 << DutchNumbersParser.FOURTEEN) | (1 << DutchNumbersParser.FIFTEEN) | (1 << DutchNumbersParser.SIXTEEN) | (1 << DutchNumbersParser.SEVENTEEN) | (1 << DutchNumbersParser.EIGHTEEN) | (1 << DutchNumbersParser.NINETEEN) | (1 << DutchNumbersParser.TWENTY) | (1 << DutchNumbersParser.THIRTY) | (1 << DutchNumbersParser.FORTY) | (1 << DutchNumbersParser.FIFTY) | (1 << DutchNumbersParser.SIXTY) | (1 << DutchNumbersParser.SEVENTY) | (1 << DutchNumbersParser.EIGHTY) | (1 << DutchNumbersParser.NINETY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DutchNumbersParser.TWO_PLURAL - 32)) | (1 << (DutchNumbersParser.THREE_PLURAL - 32)) | (1 << (DutchNumbersParser.EN - 32)))) !== 0)) {
					{
					this.state = 81;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DutchNumbersParser.EN) {
						{
						this.state = 80;
						this.match(DutchNumbersParser.EN);
						}
					}

					this.state = 83;
					this.tens();
					}
				}

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
	public millions(): MillionsContext {
		let _localctx: MillionsContext = new MillionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DutchNumbersParser.RULE_millions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.ones();
			this.state = 89;
			this.match(DutchNumbersParser.MILLION);
			this.state = 96;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DutchNumbersParser.EN) {
					{
					this.state = 90;
					this.match(DutchNumbersParser.EN);
					}
				}

				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.ONE) | (1 << DutchNumbersParser.TWO) | (1 << DutchNumbersParser.THREE) | (1 << DutchNumbersParser.FOUR) | (1 << DutchNumbersParser.FIVE) | (1 << DutchNumbersParser.SIX) | (1 << DutchNumbersParser.SEVEN) | (1 << DutchNumbersParser.EIGHT) | (1 << DutchNumbersParser.NINE) | (1 << DutchNumbersParser.THOUSAND))) !== 0)) {
					{
					this.state = 93;
					this.thousands();
					}
				}

				}
				break;
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
		this.enterRule(_localctx, 14, DutchNumbersParser.RULE_billions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.ones();
			this.state = 99;
			this.match(DutchNumbersParser.BILLION);
			this.state = 106;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DutchNumbersParser.EN) {
					{
					this.state = 100;
					this.match(DutchNumbersParser.EN);
					}
				}

				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.ONE) | (1 << DutchNumbersParser.TWO) | (1 << DutchNumbersParser.THREE) | (1 << DutchNumbersParser.FOUR) | (1 << DutchNumbersParser.FIVE) | (1 << DutchNumbersParser.SIX) | (1 << DutchNumbersParser.SEVEN) | (1 << DutchNumbersParser.EIGHT) | (1 << DutchNumbersParser.NINE))) !== 0)) {
					{
					this.state = 103;
					this.millions();
					}
				}

				}
				break;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%o\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03\x1B\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05&\n\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"3\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x069\n\x06\x03\x06\x05\x06" +
		"<\n\x06\x05\x06>\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07D\n\x07" +
		"\x03\x07\x05\x07G\n\x07\x03\x07\x03\x07\x03\x07\x05\x07L\n\x07\x03\x07" +
		"\x05\x07O\n\x07\x03\x07\x03\x07\x03\x07\x05\x07T\n\x07\x03\x07\x05\x07" +
		"W\n\x07\x05\x07Y\n\x07\x03\b\x03\b\x03\b\x05\b^\n\b\x03\b\x05\ba\n\b\x05" +
		"\bc\n\b\x03\t\x03\t\x03\t\x05\th\n\t\x03\t\x05\tk\n\t\x05\tm\n\t\x03\t" +
		"\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x02\x04\x03\x02\x03\v\x03\x02\x16\x1D\x02\x8A\x02\x12\x03\x02\x02\x02" +
		"\x04\x1A\x03\x02\x02\x02\x06\x1C\x03\x02\x02\x02\b2\x03\x02\x02\x02\n" +
		"=\x03\x02\x02\x02\fX\x03\x02\x02\x02\x0EZ\x03\x02\x02\x02\x10d\x03\x02" +
		"\x02\x02\x12\x13\x05\x04\x03\x02\x13\x03\x03\x02\x02\x02\x14\x1B\x05\x06" +
		"\x04\x02\x15\x1B\x05\b\x05\x02\x16\x1B\x05\n\x06\x02\x17\x1B\x05\f\x07" +
		"\x02\x18\x1B\x05\x0E\b\x02\x19\x1B\x05\x10\t\x02\x1A\x14\x03\x02\x02\x02" +
		"\x1A\x15\x03\x02\x02\x02\x1A\x16\x03\x02\x02\x02\x1A\x17\x03\x02\x02\x02" +
		"\x1A\x18\x03\x02\x02\x02\x1A\x19\x03\x02\x02\x02\x1B\x05\x03\x02\x02\x02" +
		"\x1C\x1D\t\x02\x02\x02\x1D\x07\x03\x02\x02\x02\x1E\x1F\x07\"\x02\x02\x1F" +
		"3\x05\x06\x04\x02 !\x07#\x02\x02!3\x05\x06\x04\x02\"#\x05\x06\x04\x02" +
		"#$\x07$\x02\x02$&\x03\x02\x02\x02%\"\x03\x02\x02\x02%&\x03\x02\x02\x02" +
		"&\'\x03\x02\x02\x02\'3\t\x03\x02\x02(3\x07\f\x02\x02)3\x07\r\x02\x02*" +
		"3\x07\x0E\x02\x02+3\x07\x0F\x02\x02,3\x07\x10\x02\x02-3\x07\x11\x02\x02" +
		".3\x07\x12\x02\x02/3\x07\x13\x02\x0203\x07\x14\x02\x0213\x07\x15\x02\x02" +
		"2\x1E\x03\x02\x02\x022 \x03\x02\x02\x022%\x03\x02\x02\x022(\x03\x02\x02" +
		"\x022)\x03\x02\x02\x022*\x03\x02\x02\x022+\x03\x02\x02\x022,\x03\x02\x02" +
		"\x022-\x03\x02\x02\x022.\x03\x02\x02\x022/\x03\x02\x02\x0220\x03\x02\x02" +
		"\x0221\x03\x02\x02\x023\t\x03\x02\x02\x024>\x07\x1E\x02\x0256\x05\x06" +
		"\x04\x026;\x07\x1E\x02\x0279\x07$\x02\x0287\x03\x02\x02\x0289\x03\x02" +
		"\x02\x029:\x03\x02\x02\x02:<\x05\b\x05\x02;8\x03\x02\x02\x02;<\x03\x02" +
		"\x02\x02<>\x03\x02\x02\x02=4\x03\x02\x02\x02=5\x03\x02\x02\x02>\v\x03" +
		"\x02\x02\x02?Y\x07\x1F\x02\x02@A\x05\x06\x04\x02AF\x07\x1F\x02\x02BD\x07" +
		"$\x02\x02CB\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x03\x02\x02\x02EG\x05" +
		"\x06\x04\x02FC\x03\x02\x02\x02FG\x03\x02\x02\x02GY\x03\x02\x02\x02HI\x05" +
		"\x06\x04\x02IN\x07\x1F\x02\x02JL\x07$\x02\x02KJ\x03\x02\x02\x02KL\x03" +
		"\x02\x02\x02LM\x03\x02\x02\x02MO\x05\n\x06\x02NK\x03\x02\x02\x02NO\x03" +
		"\x02\x02\x02OY\x03\x02\x02\x02PQ\x05\x06\x04\x02QV\x07\x1F\x02\x02RT\x07" +
		"$\x02\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UW\x05" +
		"\b\x05\x02VS\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03\x02\x02\x02X?\x03" +
		"\x02\x02\x02X@\x03\x02\x02\x02XH\x03\x02\x02\x02XP\x03\x02\x02\x02Y\r" +
		"\x03\x02\x02\x02Z[\x05\x06\x04\x02[b\x07 \x02\x02\\^\x07$\x02\x02]\\\x03" +
		"\x02\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02_a\x05\f\x07\x02`_\x03" +
		"\x02\x02\x02`a\x03\x02\x02\x02ac\x03\x02\x02\x02b]\x03\x02\x02\x02bc\x03" +
		"\x02\x02\x02c\x0F\x03\x02\x02\x02de\x05\x06\x04\x02el\x07!\x02\x02fh\x07" +
		"$\x02\x02gf\x03\x02\x02\x02gh\x03\x02\x02\x02hj\x03\x02\x02\x02ik\x05" +
		"\x0E\b\x02ji\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02lg\x03" +
		"\x02\x02\x02lm\x03\x02\x02\x02m\x11\x03\x02\x02\x02\x15\x1A%28;=CFKNS" +
		"VX]`bgjl";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DutchNumbersParser.__ATN) {
			DutchNumbersParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DutchNumbersParser._serializedATN));
		}

		return DutchNumbersParser.__ATN;
	}

}

export class NumberContext extends ParserRuleContext {
	public whole_number(): Whole_numberContext {
		return this.getRuleContext(0, Whole_numberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_number; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_whole_number; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterWhole_number) {
			listener.enterWhole_number(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitWhole_number) {
			listener.exitWhole_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitWhole_number) {
			return visitor.visitWhole_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnesContext extends ParserRuleContext {
	public ONE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ONE, 0); }
	public TWO(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWO, 0); }
	public THREE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.THREE, 0); }
	public FOUR(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.FOUR, 0); }
	public FIVE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.FIVE, 0); }
	public SIX(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.SIX, 0); }
	public SEVEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.SEVEN, 0); }
	public EIGHT(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EIGHT, 0); }
	public NINE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.NINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_ones; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterOnes) {
			listener.enterOnes(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitOnes) {
			listener.exitOnes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitOnes) {
			return visitor.visitOnes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TensContext extends ParserRuleContext {
	public TWO_PLURAL(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWO_PLURAL, 0); }
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public THREE_PLURAL(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.THREE_PLURAL, 0); }
	public TWENTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWENTY, 0); }
	public THIRTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.THIRTY, 0); }
	public FORTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.FORTY, 0); }
	public FIFTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.FIFTY, 0); }
	public SIXTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.SIXTY, 0); }
	public SEVENTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.SEVENTY, 0); }
	public EIGHTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EIGHTY, 0); }
	public NINETY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.NINETY, 0); }
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public TEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TEN, 0); }
	public ELEVEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ELEVEN, 0); }
	public TWELVE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWELVE, 0); }
	public THIRTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.THIRTEEN, 0); }
	public FOURTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.FOURTEEN, 0); }
	public FIFTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.FIFTEEN, 0); }
	public SIXTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.SIXTEEN, 0); }
	public SEVENTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.SEVENTEEN, 0); }
	public EIGHTEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EIGHTEEN, 0); }
	public NINETEEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.NINETEEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_tens; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterTens) {
			listener.enterTens(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitTens) {
			listener.exitTens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitTens) {
			return visitor.visitTens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HundredsContext extends ParserRuleContext {
	public HUNDRED(): TerminalNode { return this.getToken(DutchNumbersParser.HUNDRED, 0); }
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_hundreds; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterHundreds) {
			listener.enterHundreds(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitHundreds) {
			listener.exitHundreds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitHundreds) {
			return visitor.visitHundreds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThousandsContext extends ParserRuleContext {
	public THOUSAND(): TerminalNode { return this.getToken(DutchNumbersParser.THOUSAND, 0); }
	public ones(): OnesContext[];
	public ones(i: number): OnesContext;
	public ones(i?: number): OnesContext | OnesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OnesContext);
		} else {
			return this.getRuleContext(i, OnesContext);
		}
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public hundreds(): HundredsContext | undefined {
		return this.tryGetRuleContext(0, HundredsContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_thousands; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterThousands) {
			listener.enterThousands(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitThousands) {
			listener.exitThousands(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitThousands) {
			return visitor.visitThousands(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MillionsContext extends ParserRuleContext {
	public ones(): OnesContext {
		return this.getRuleContext(0, OnesContext);
	}
	public MILLION(): TerminalNode { return this.getToken(DutchNumbersParser.MILLION, 0); }
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public thousands(): ThousandsContext | undefined {
		return this.tryGetRuleContext(0, ThousandsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_millions; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterMillions) {
			listener.enterMillions(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitMillions) {
			listener.exitMillions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitMillions) {
			return visitor.visitMillions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BillionsContext extends ParserRuleContext {
	public ones(): OnesContext {
		return this.getRuleContext(0, OnesContext);
	}
	public BILLION(): TerminalNode { return this.getToken(DutchNumbersParser.BILLION, 0); }
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public millions(): MillionsContext | undefined {
		return this.tryGetRuleContext(0, MillionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_billions; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterBillions) {
			listener.enterBillions(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitBillions) {
			listener.exitBillions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitBillions) {
			return visitor.visitBillions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


