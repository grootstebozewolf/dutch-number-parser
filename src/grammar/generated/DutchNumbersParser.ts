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
	public static readonly RULE_simple = 1;
	public static readonly RULE_unit = 2;
	public static readonly RULE_teen = 3;
	public static readonly RULE_tens = 4;
	public static readonly RULE_compound = 5;
	public static readonly RULE_large_number = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"number", "simple", "unit", "teen", "tens", "compound", "large_number",
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
			this.state = 17;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 14;
				this.simple();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 15;
				this.compound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 16;
				this.large_number();
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
	public simple(): SimpleContext {
		let _localctx: SimpleContext = new SimpleContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DutchNumbersParser.RULE_simple);
		try {
			this.state = 22;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DutchNumbersParser.ONE:
			case DutchNumbersParser.TWO:
			case DutchNumbersParser.THREE:
			case DutchNumbersParser.FOUR:
			case DutchNumbersParser.FIVE:
			case DutchNumbersParser.SIX:
			case DutchNumbersParser.SEVEN:
			case DutchNumbersParser.EIGHT:
			case DutchNumbersParser.NINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 19;
				this.unit();
				}
				break;
			case DutchNumbersParser.TEN:
			case DutchNumbersParser.ELEVEN:
			case DutchNumbersParser.TWELVE:
			case DutchNumbersParser.THIRTEEN:
			case DutchNumbersParser.FOURTEEN:
			case DutchNumbersParser.FIFTEEN:
			case DutchNumbersParser.SIXTEEN:
			case DutchNumbersParser.SEVENTEEN:
			case DutchNumbersParser.EIGHTEEN:
			case DutchNumbersParser.NINETEEN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 20;
				this.teen();
				}
				break;
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
				this.state = 21;
				this.tens();
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
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DutchNumbersParser.RULE_unit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
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
	public teen(): TeenContext {
		let _localctx: TeenContext = new TeenContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DutchNumbersParser.RULE_teen);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.TEN) | (1 << DutchNumbersParser.ELEVEN) | (1 << DutchNumbersParser.TWELVE) | (1 << DutchNumbersParser.THIRTEEN) | (1 << DutchNumbersParser.FOURTEEN) | (1 << DutchNumbersParser.FIFTEEN) | (1 << DutchNumbersParser.SIXTEEN) | (1 << DutchNumbersParser.SEVENTEEN) | (1 << DutchNumbersParser.EIGHTEEN) | (1 << DutchNumbersParser.NINETEEN))) !== 0))) {
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
		this.enterRule(_localctx, 8, DutchNumbersParser.RULE_tens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
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
	public compound(): CompoundContext {
		let _localctx: CompoundContext = new CompoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DutchNumbersParser.RULE_compound);
		try {
			this.state = 41;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DutchNumbersParser.TWENTY:
			case DutchNumbersParser.THIRTY:
			case DutchNumbersParser.FORTY:
			case DutchNumbersParser.FIFTY:
			case DutchNumbersParser.SIXTY:
			case DutchNumbersParser.SEVENTY:
			case DutchNumbersParser.EIGHTY:
			case DutchNumbersParser.NINETY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 30;
				this.tens();
				this.state = 31;
				this.unit();
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
				this.state = 33;
				this.unit();
				this.state = 34;
				this.match(DutchNumbersParser.EN);
				this.state = 35;
				this.tens();
				}
				break;
			case DutchNumbersParser.TWO_PLURAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 37;
				this.match(DutchNumbersParser.TWO_PLURAL);
				this.state = 38;
				this.tens();
				}
				break;
			case DutchNumbersParser.THREE_PLURAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 39;
				this.match(DutchNumbersParser.THREE_PLURAL);
				this.state = 40;
				this.tens();
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
	public large_number(): Large_numberContext {
		let _localctx: Large_numberContext = new Large_numberContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DutchNumbersParser.RULE_large_number);
		let _la: number;
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.ONE) | (1 << DutchNumbersParser.TWO) | (1 << DutchNumbersParser.THREE) | (1 << DutchNumbersParser.FOUR) | (1 << DutchNumbersParser.FIVE) | (1 << DutchNumbersParser.SIX) | (1 << DutchNumbersParser.SEVEN) | (1 << DutchNumbersParser.EIGHT) | (1 << DutchNumbersParser.NINE))) !== 0)) {
					{
					this.state = 43;
					this.unit();
					}
				}

				this.state = 46;
				this.match(DutchNumbersParser.HUNDRED);
				this.state = 49;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 47;
					this.match(DutchNumbersParser.EN);
					this.state = 48;
					this.number();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.ONE) | (1 << DutchNumbersParser.TWO) | (1 << DutchNumbersParser.THREE) | (1 << DutchNumbersParser.FOUR) | (1 << DutchNumbersParser.FIVE) | (1 << DutchNumbersParser.SIX) | (1 << DutchNumbersParser.SEVEN) | (1 << DutchNumbersParser.EIGHT) | (1 << DutchNumbersParser.NINE))) !== 0)) {
					{
					this.state = 51;
					this.unit();
					}
				}

				this.state = 54;
				this.match(DutchNumbersParser.THOUSAND);
				this.state = 56;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 55;
					this.number();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 58;
				this.unit();
				this.state = 59;
				this.match(DutchNumbersParser.MILLION);
				this.state = 61;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 60;
					this.number();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 63;
				this.unit();
				this.state = 64;
				this.match(DutchNumbersParser.BILLION);
				this.state = 66;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 65;
					this.number();
					}
					break;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%I\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x03\x02\x03\x02\x03\x02\x05\x02\x14\n\x02\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\x19\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07,\n\x07\x03\b\x05\b/\n\b\x03\b\x03\b\x03\b\x05" +
		"\b4\n\b\x03\b\x05\b7\n\b\x03\b\x03\b\x05\b;\n\b\x03\b\x03\b\x03\b\x05" +
		"\b@\n\b\x03\b\x03\b\x03\b\x05\bE\n\b\x05\bG\n\b\x03\b\x02\x02\x02\t\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x05\x03\x02\x03\v\x03" +
		"\x02\f\x15\x03\x02\x16\x1D\x02Q\x02\x13\x03\x02\x02\x02\x04\x18\x03\x02" +
		"\x02\x02\x06\x1A\x03\x02\x02\x02\b\x1C\x03\x02\x02\x02\n\x1E\x03\x02\x02" +
		"\x02\f+\x03\x02\x02\x02\x0EF\x03\x02\x02\x02\x10\x14\x05\x04\x03\x02\x11" +
		"\x14\x05\f\x07\x02\x12\x14\x05\x0E\b\x02\x13\x10\x03\x02\x02\x02\x13\x11" +
		"\x03\x02\x02\x02\x13\x12\x03\x02\x02\x02\x14\x03\x03\x02\x02\x02\x15\x19" +
		"\x05\x06\x04\x02\x16\x19\x05\b\x05\x02\x17\x19\x05\n\x06\x02\x18\x15\x03" +
		"\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x17\x03\x02\x02\x02\x19\x05\x03" +
		"\x02\x02\x02\x1A\x1B\t\x02\x02\x02\x1B\x07\x03\x02\x02\x02\x1C\x1D\t\x03" +
		"\x02\x02\x1D\t\x03\x02\x02\x02\x1E\x1F\t\x04\x02\x02\x1F\v\x03\x02\x02" +
		"\x02 !\x05\n\x06\x02!\"\x05\x06\x04\x02\",\x03\x02\x02\x02#$\x05\x06\x04" +
		"\x02$%\x07$\x02\x02%&\x05\n\x06\x02&,\x03\x02\x02\x02\'(\x07\"\x02\x02" +
		"(,\x05\n\x06\x02)*\x07#\x02\x02*,\x05\n\x06\x02+ \x03\x02\x02\x02+#\x03" +
		"\x02\x02\x02+\'\x03\x02\x02\x02+)\x03\x02\x02\x02,\r\x03\x02\x02\x02-" +
		"/\x05\x06\x04\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/0\x03\x02\x02\x02" +
		"03\x07\x1E\x02\x0212\x07$\x02\x0224\x05\x02\x02\x0231\x03\x02\x02\x02" +
		"34\x03\x02\x02\x024G\x03\x02\x02\x0257\x05\x06\x04\x0265\x03\x02\x02\x02" +
		"67\x03\x02\x02\x0278\x03\x02\x02\x028:\x07\x1F\x02\x029;\x05\x02\x02\x02" +
		":9\x03\x02\x02\x02:;\x03\x02\x02\x02;G\x03\x02\x02\x02<=\x05\x06\x04\x02" +
		"=?\x07 \x02\x02>@\x05\x02\x02\x02?>\x03\x02\x02\x02?@\x03\x02\x02\x02" +
		"@G\x03\x02\x02\x02AB\x05\x06\x04\x02BD\x07!\x02\x02CE\x05\x02\x02\x02" +
		"DC\x03\x02\x02\x02DE\x03\x02\x02\x02EG\x03\x02\x02\x02F.\x03\x02\x02\x02" +
		"F6\x03\x02\x02\x02F<\x03\x02\x02\x02FA\x03\x02\x02\x02G\x0F\x03\x02\x02" +
		"\x02\f\x13\x18+.36:?DF";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DutchNumbersParser.__ATN) {
			DutchNumbersParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DutchNumbersParser._serializedATN));
		}

		return DutchNumbersParser.__ATN;
	}

}

export class NumberContext extends ParserRuleContext {
	public simple(): SimpleContext | undefined {
		return this.tryGetRuleContext(0, SimpleContext);
	}
	public compound(): CompoundContext | undefined {
		return this.tryGetRuleContext(0, CompoundContext);
	}
	public large_number(): Large_numberContext | undefined {
		return this.tryGetRuleContext(0, Large_numberContext);
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


export class SimpleContext extends ParserRuleContext {
	public unit(): UnitContext | undefined {
		return this.tryGetRuleContext(0, UnitContext);
	}
	public teen(): TeenContext | undefined {
		return this.tryGetRuleContext(0, TeenContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_simple; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterSimple) {
			listener.enterSimple(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitSimple) {
			listener.exitSimple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitSimple) {
			return visitor.visitSimple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return DutchNumbersParser.RULE_unit; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterUnit) {
			listener.enterUnit(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitUnit) {
			listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TeenContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return DutchNumbersParser.RULE_teen; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterTeen) {
			listener.enterTeen(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitTeen) {
			listener.exitTeen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitTeen) {
			return visitor.visitTeen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TensContext extends ParserRuleContext {
	public TWENTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWENTY, 0); }
	public THIRTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.THIRTY, 0); }
	public FORTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.FORTY, 0); }
	public FIFTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.FIFTY, 0); }
	public SIXTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.SIXTY, 0); }
	public SEVENTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.SEVENTY, 0); }
	public EIGHTY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EIGHTY, 0); }
	public NINETY(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.NINETY, 0); }
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


export class CompoundContext extends ParserRuleContext {
	public tens(): TensContext {
		return this.getRuleContext(0, TensContext);
	}
	public unit(): UnitContext | undefined {
		return this.tryGetRuleContext(0, UnitContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public TWO_PLURAL(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWO_PLURAL, 0); }
	public THREE_PLURAL(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.THREE_PLURAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_compound; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterCompound) {
			listener.enterCompound(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitCompound) {
			listener.exitCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitCompound) {
			return visitor.visitCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Large_numberContext extends ParserRuleContext {
	public HUNDRED(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.HUNDRED, 0); }
	public unit(): UnitContext | undefined {
		return this.tryGetRuleContext(0, UnitContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public THOUSAND(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.THOUSAND, 0); }
	public MILLION(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.MILLION, 0); }
	public BILLION(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.BILLION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_large_number; }
	// @Override
	public enterRule(listener: DutchNumbersParserListener): void {
		if (listener.enterLarge_number) {
			listener.enterLarge_number(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersParserListener): void {
		if (listener.exitLarge_number) {
			listener.exitLarge_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersParserVisitor<Result>): Result {
		if (visitor.visitLarge_number) {
			return visitor.visitLarge_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


