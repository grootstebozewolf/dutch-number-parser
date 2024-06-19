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


export class DutchNumbersParser extends Parser {
	public static readonly EEN = 1;
	public static readonly TWEE = 2;
	public static readonly DRIE = 3;
	public static readonly VIER = 4;
	public static readonly VIJF = 5;
	public static readonly ZES = 6;
	public static readonly ZEVEN = 7;
	public static readonly ACHT = 8;
	public static readonly NEGEN = 9;
	public static readonly TIEN = 10;
	public static readonly ELF = 11;
	public static readonly TWAALF = 12;
	public static readonly DERTIEN = 13;
	public static readonly VEERTIEN = 14;
	public static readonly VIJFTIEN = 15;
	public static readonly ZESTIEN = 16;
	public static readonly ZEVENTIEN = 17;
	public static readonly ACHTTIEN = 18;
	public static readonly NEGENTIEN = 19;
	public static readonly TWINTIG = 20;
	public static readonly TIENDE = 21;
	public static readonly ELFDE = 22;
	public static readonly TWAALFDE = 23;
	public static readonly DERTIENDE = 24;
	public static readonly VEERTIENDE = 25;
	public static readonly VIJFTIENDE = 26;
	public static readonly ZESTIENDE = 27;
	public static readonly ZEVENTIENDE = 28;
	public static readonly ACHTTIENDE = 29;
	public static readonly DERTIG = 30;
	public static readonly NEGENTIENDE = 31;
	public static readonly EERSTE = 32;
	public static readonly TWEEDE = 33;
	public static readonly DERDE = 34;
	public static readonly VIERDE = 35;
	public static readonly VIJFDE = 36;
	public static readonly ZESDE = 37;
	public static readonly ZEVENDE = 38;
	public static readonly ACHTSTE = 39;
	public static readonly VEERTIG = 40;
	public static readonly NEGENTSTE = 41;
	public static readonly VIJFTIG = 42;
	public static readonly ZESTIG = 43;
	public static readonly ZEVENTIG = 44;
	public static readonly TACHTIG = 45;
	public static readonly NEGENTIG = 46;
	public static readonly TWINTIGSTE = 47;
	public static readonly DERTIGSTE = 48;
	public static readonly VEERTIGSTE = 49;
	public static readonly VIJFTIGSTE = 50;
	public static readonly ZESTIGSTE = 51;
	public static readonly ZEVENTIGSTE = 52;
	public static readonly TACHTIGSTE = 53;
	public static readonly NEGENTIGSTE = 54;
	public static readonly HONDERD = 55;
	public static readonly DUIZEND = 56;
	public static readonly MILJOEN = 57;
	public static readonly HONDERDSTE = 58;
	public static readonly DUIZENDSTE = 59;
	public static readonly MILJOENSTE = 60;
	public static readonly EN = 61;
	public static readonly EEN_VARIANT = 62;
	public static readonly WS = 63;
	public static readonly RULE_number = 0;
	public static readonly RULE_ordinal = 1;
	public static readonly RULE_ones = 2;
	public static readonly RULE_ordinal_ones = 3;
	public static readonly RULE_teens = 4;
	public static readonly RULE_ordinal_teens = 5;
	public static readonly RULE_tens = 6;
	public static readonly RULE_ordinal_tens = 7;
	public static readonly RULE_tens_unit = 8;
	public static readonly RULE_tens_unit_ordinal = 9;
	public static readonly RULE_tens_with_ones = 10;
	public static readonly RULE_ordinal_tens_with_ones = 11;
	public static readonly RULE_hundreds = 12;
	public static readonly RULE_ordinal_hundreds = 13;
	public static readonly RULE_thousands = 14;
	public static readonly RULE_ordinal_thousands = 15;
	public static readonly RULE_millions = 16;
	public static readonly RULE_ordinal_millions = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"number", "ordinal", "ones", "ordinal_ones", "teens", "ordinal_teens", 
		"tens", "ordinal_tens", "tens_unit", "tens_unit_ordinal", "tens_with_ones", 
		"ordinal_tens_with_ones", "hundreds", "ordinal_hundreds", "thousands", 
		"ordinal_thousands", "millions", "ordinal_millions",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'een'", "'twee'", "'drie'", "'vier'", "'vijf'", "'zes'", "'zeven'", 
		"'acht'", "'negen'", "'tien'", "'elf'", "'twaalf'", "'dertien'", "'veertien'", 
		"'vijftien'", "'zestien'", "'zeventien'", "'achttien'", "'negentien'", 
		"'twintig'", "'tiende'", "'elfde'", "'twaalfde'", "'dertiende'", "'veertiende'", 
		"'vijftiende'", "'zestiende'", "'zeventiende'", "'achttiende'", "'dertig'", 
		"'negentiende'", "'eerste'", "'tweede'", "'derde'", "'vierde'", "'vijfde'", 
		"'zesde'", "'zevende'", "'achtste'", "'veertig'", "'negende'", "'vijftig'", 
		"'zestig'", "'zeventig'", "'tachtig'", "'negentig'", "'twintigste'", "'dertigste'", 
		"'veertigste'", "'vijftigste'", "'zestigste'", "'zeventigste'", "'tachtigste'", 
		"'negentigste'", "'honderd'", "'duizend'", "'miljoen'", "'honderdste'", 
		"'duizendste'", "'miljoenste'", "'en'", "'\u00E9\u00E9n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EEN", "TWEE", "DRIE", "VIER", "VIJF", "ZES", "ZEVEN", "ACHT", 
		"NEGEN", "TIEN", "ELF", "TWAALF", "DERTIEN", "VEERTIEN", "VIJFTIEN", "ZESTIEN", 
		"ZEVENTIEN", "ACHTTIEN", "NEGENTIEN", "TWINTIG", "TIENDE", "ELFDE", "TWAALFDE", 
		"DERTIENDE", "VEERTIENDE", "VIJFTIENDE", "ZESTIENDE", "ZEVENTIENDE", "ACHTTIENDE", 
		"DERTIG", "NEGENTIENDE", "EERSTE", "TWEEDE", "DERDE", "VIERDE", "VIJFDE", 
		"ZESDE", "ZEVENDE", "ACHTSTE", "VEERTIG", "NEGENTSTE", "VIJFTIG", "ZESTIG", 
		"ZEVENTIG", "TACHTIG", "NEGENTIG", "TWINTIGSTE", "DERTIGSTE", "VEERTIGSTE", 
		"VIJFTIGSTE", "ZESTIGSTE", "ZEVENTIGSTE", "TACHTIGSTE", "NEGENTIGSTE", 
		"HONDERD", "DUIZEND", "MILJOEN", "HONDERDSTE", "DUIZENDSTE", "MILJOENSTE", 
		"EN", "EEN_VARIANT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DutchNumbersParser._LITERAL_NAMES, DutchNumbersParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DutchNumbersParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DutchNumbers.g4"; }

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
			this.state = 41;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this.ones();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.tens();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 38;
				this.hundreds();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 39;
				this.thousands();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 40;
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
	public ordinal(): OrdinalContext {
		let _localctx: OrdinalContext = new OrdinalContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DutchNumbersParser.RULE_ordinal);
		try {
			this.state = 49;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 43;
				this.ordinal_ones();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				this.ordinal_teens();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 45;
				this.ordinal_tens();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 46;
				this.ordinal_hundreds();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 47;
				this.ordinal_thousands();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 48;
				this.ordinal_millions();
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
			this.state = 51;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.EEN) | (1 << DutchNumbersParser.TWEE) | (1 << DutchNumbersParser.DRIE) | (1 << DutchNumbersParser.VIER) | (1 << DutchNumbersParser.VIJF) | (1 << DutchNumbersParser.ZES) | (1 << DutchNumbersParser.ZEVEN) | (1 << DutchNumbersParser.ACHT) | (1 << DutchNumbersParser.NEGEN))) !== 0))) {
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
	public ordinal_ones(): Ordinal_onesContext {
		let _localctx: Ordinal_onesContext = new Ordinal_onesContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DutchNumbersParser.RULE_ordinal_ones);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			_la = this._input.LA(1);
			if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DutchNumbersParser.EERSTE - 32)) | (1 << (DutchNumbersParser.TWEEDE - 32)) | (1 << (DutchNumbersParser.DERDE - 32)) | (1 << (DutchNumbersParser.VIERDE - 32)) | (1 << (DutchNumbersParser.VIJFDE - 32)) | (1 << (DutchNumbersParser.ZESDE - 32)) | (1 << (DutchNumbersParser.ZEVENDE - 32)) | (1 << (DutchNumbersParser.ACHTSTE - 32)) | (1 << (DutchNumbersParser.NEGENTSTE - 32)))) !== 0))) {
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
	public teens(): TeensContext {
		let _localctx: TeensContext = new TeensContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DutchNumbersParser.RULE_teens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.TIEN) | (1 << DutchNumbersParser.ELF) | (1 << DutchNumbersParser.TWAALF) | (1 << DutchNumbersParser.DERTIEN) | (1 << DutchNumbersParser.VEERTIEN) | (1 << DutchNumbersParser.VIJFTIEN) | (1 << DutchNumbersParser.ZESTIEN) | (1 << DutchNumbersParser.ZEVENTIEN) | (1 << DutchNumbersParser.ACHTTIEN) | (1 << DutchNumbersParser.NEGENTIEN))) !== 0))) {
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
	public ordinal_teens(): Ordinal_teensContext {
		let _localctx: Ordinal_teensContext = new Ordinal_teensContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DutchNumbersParser.RULE_ordinal_teens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DutchNumbersParser.TIENDE) | (1 << DutchNumbersParser.ELFDE) | (1 << DutchNumbersParser.TWAALFDE) | (1 << DutchNumbersParser.DERTIENDE) | (1 << DutchNumbersParser.VEERTIENDE) | (1 << DutchNumbersParser.VIJFTIENDE) | (1 << DutchNumbersParser.ZESTIENDE) | (1 << DutchNumbersParser.ZEVENTIENDE) | (1 << DutchNumbersParser.ACHTTIENDE) | (1 << DutchNumbersParser.NEGENTIENDE))) !== 0))) {
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
		this.enterRule(_localctx, 12, DutchNumbersParser.RULE_tens);
		try {
			this.state = 62;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DutchNumbersParser.TIEN:
			case DutchNumbersParser.ELF:
			case DutchNumbersParser.TWAALF:
			case DutchNumbersParser.DERTIEN:
			case DutchNumbersParser.VEERTIEN:
			case DutchNumbersParser.VIJFTIEN:
			case DutchNumbersParser.ZESTIEN:
			case DutchNumbersParser.ZEVENTIEN:
			case DutchNumbersParser.ACHTTIEN:
			case DutchNumbersParser.NEGENTIEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.teens();
				}
				break;
			case DutchNumbersParser.TWINTIG:
			case DutchNumbersParser.DERTIG:
			case DutchNumbersParser.VEERTIG:
			case DutchNumbersParser.VIJFTIG:
			case DutchNumbersParser.ZESTIG:
			case DutchNumbersParser.ZEVENTIG:
			case DutchNumbersParser.TACHTIG:
			case DutchNumbersParser.NEGENTIG:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
				this.tens_unit();
				}
				break;
			case DutchNumbersParser.EEN:
			case DutchNumbersParser.TWEE:
			case DutchNumbersParser.DRIE:
			case DutchNumbersParser.VIER:
			case DutchNumbersParser.VIJF:
			case DutchNumbersParser.ZES:
			case DutchNumbersParser.ZEVEN:
			case DutchNumbersParser.ACHT:
			case DutchNumbersParser.NEGEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 61;
				this.tens_with_ones();
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
	public ordinal_tens(): Ordinal_tensContext {
		let _localctx: Ordinal_tensContext = new Ordinal_tensContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DutchNumbersParser.RULE_ordinal_tens);
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DutchNumbersParser.TIENDE:
			case DutchNumbersParser.ELFDE:
			case DutchNumbersParser.TWAALFDE:
			case DutchNumbersParser.DERTIENDE:
			case DutchNumbersParser.VEERTIENDE:
			case DutchNumbersParser.VIJFTIENDE:
			case DutchNumbersParser.ZESTIENDE:
			case DutchNumbersParser.ZEVENTIENDE:
			case DutchNumbersParser.ACHTTIENDE:
			case DutchNumbersParser.NEGENTIENDE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.ordinal_teens();
				}
				break;
			case DutchNumbersParser.TWINTIGSTE:
			case DutchNumbersParser.DERTIGSTE:
			case DutchNumbersParser.VEERTIGSTE:
			case DutchNumbersParser.VIJFTIGSTE:
			case DutchNumbersParser.ZESTIGSTE:
			case DutchNumbersParser.ZEVENTIGSTE:
			case DutchNumbersParser.TACHTIGSTE:
			case DutchNumbersParser.NEGENTIGSTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this.tens_unit_ordinal();
				}
				break;
			case DutchNumbersParser.EEN:
			case DutchNumbersParser.TWEE:
			case DutchNumbersParser.DRIE:
			case DutchNumbersParser.VIER:
			case DutchNumbersParser.VIJF:
			case DutchNumbersParser.ZES:
			case DutchNumbersParser.ZEVEN:
			case DutchNumbersParser.ACHT:
			case DutchNumbersParser.NEGEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 66;
				this.ordinal_tens_with_ones();
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
	public tens_unit(): Tens_unitContext {
		let _localctx: Tens_unitContext = new Tens_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DutchNumbersParser.RULE_tens_unit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			_la = this._input.LA(1);
			if (!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (DutchNumbersParser.TWINTIG - 20)) | (1 << (DutchNumbersParser.DERTIG - 20)) | (1 << (DutchNumbersParser.VEERTIG - 20)) | (1 << (DutchNumbersParser.VIJFTIG - 20)) | (1 << (DutchNumbersParser.ZESTIG - 20)) | (1 << (DutchNumbersParser.ZEVENTIG - 20)) | (1 << (DutchNumbersParser.TACHTIG - 20)) | (1 << (DutchNumbersParser.NEGENTIG - 20)))) !== 0))) {
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
	public tens_unit_ordinal(): Tens_unit_ordinalContext {
		let _localctx: Tens_unit_ordinalContext = new Tens_unit_ordinalContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DutchNumbersParser.RULE_tens_unit_ordinal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			_la = this._input.LA(1);
			if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (DutchNumbersParser.TWINTIGSTE - 47)) | (1 << (DutchNumbersParser.DERTIGSTE - 47)) | (1 << (DutchNumbersParser.VEERTIGSTE - 47)) | (1 << (DutchNumbersParser.VIJFTIGSTE - 47)) | (1 << (DutchNumbersParser.ZESTIGSTE - 47)) | (1 << (DutchNumbersParser.ZEVENTIGSTE - 47)) | (1 << (DutchNumbersParser.TACHTIGSTE - 47)) | (1 << (DutchNumbersParser.NEGENTIGSTE - 47)))) !== 0))) {
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
	public tens_with_ones(): Tens_with_onesContext {
		let _localctx: Tens_with_onesContext = new Tens_with_onesContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, DutchNumbersParser.RULE_tens_with_ones);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.ones();
			this.state = 74;
			this.match(DutchNumbersParser.EN);
			this.state = 75;
			this.tens_unit();
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
	public ordinal_tens_with_ones(): Ordinal_tens_with_onesContext {
		let _localctx: Ordinal_tens_with_onesContext = new Ordinal_tens_with_onesContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, DutchNumbersParser.RULE_ordinal_tens_with_ones);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.ones();
			this.state = 78;
			this.match(DutchNumbersParser.EN);
			this.state = 79;
			this.tens_unit_ordinal();
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
		this.enterRule(_localctx, 24, DutchNumbersParser.RULE_hundreds);
		try {
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DutchNumbersParser.EEN:
			case DutchNumbersParser.TWEE:
			case DutchNumbersParser.DRIE:
			case DutchNumbersParser.VIER:
			case DutchNumbersParser.VIJF:
			case DutchNumbersParser.ZES:
			case DutchNumbersParser.ZEVEN:
			case DutchNumbersParser.ACHT:
			case DutchNumbersParser.NEGEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.ones();
				this.state = 82;
				this.match(DutchNumbersParser.HONDERD);
				this.state = 91;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 83;
					this.match(DutchNumbersParser.EEN);
					}
					break;

				case 2:
					{
					this.state = 84;
					this.match(DutchNumbersParser.EEN_VARIANT);
					}
					break;

				case 3:
					{
					this.state = 85;
					this.match(DutchNumbersParser.EN);
					this.state = 86;
					this.match(DutchNumbersParser.EEN);
					}
					break;

				case 4:
					{
					this.state = 87;
					this.match(DutchNumbersParser.EN);
					this.state = 88;
					this.match(DutchNumbersParser.EEN_VARIANT);
					}
					break;

				case 5:
					{
					this.state = 89;
					this.match(DutchNumbersParser.EN);
					this.state = 90;
					this.number();
					}
					break;
				}
				}
				break;
			case DutchNumbersParser.HONDERD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 93;
				this.match(DutchNumbersParser.HONDERD);
				this.state = 94;
				this.tens_unit();
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
	public ordinal_hundreds(): Ordinal_hundredsContext {
		let _localctx: Ordinal_hundredsContext = new Ordinal_hundredsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, DutchNumbersParser.RULE_ordinal_hundreds);
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DutchNumbersParser.EEN:
			case DutchNumbersParser.TWEE:
			case DutchNumbersParser.DRIE:
			case DutchNumbersParser.VIER:
			case DutchNumbersParser.VIJF:
			case DutchNumbersParser.ZES:
			case DutchNumbersParser.ZEVEN:
			case DutchNumbersParser.ACHT:
			case DutchNumbersParser.NEGEN:
			case DutchNumbersParser.TIEN:
			case DutchNumbersParser.ELF:
			case DutchNumbersParser.TWAALF:
			case DutchNumbersParser.DERTIEN:
			case DutchNumbersParser.VEERTIEN:
			case DutchNumbersParser.VIJFTIEN:
			case DutchNumbersParser.ZESTIEN:
			case DutchNumbersParser.ZEVENTIEN:
			case DutchNumbersParser.ACHTTIEN:
			case DutchNumbersParser.NEGENTIEN:
			case DutchNumbersParser.TWINTIG:
			case DutchNumbersParser.DERTIG:
			case DutchNumbersParser.VEERTIG:
			case DutchNumbersParser.VIJFTIG:
			case DutchNumbersParser.ZESTIG:
			case DutchNumbersParser.ZEVENTIG:
			case DutchNumbersParser.TACHTIG:
			case DutchNumbersParser.NEGENTIG:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 97;
					this.ones();
					}
					break;

				case 2:
					{
					this.state = 98;
					this.tens();
					}
					break;
				}
				this.state = 101;
				this.match(DutchNumbersParser.HONDERDSTE);
				this.state = 104;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 102;
					this.match(DutchNumbersParser.EN);
					this.state = 103;
					this.ordinal();
					}
					break;
				}
				}
				break;
			case DutchNumbersParser.HONDERD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 106;
				this.match(DutchNumbersParser.HONDERD);
				this.state = 107;
				this.tens_unit_ordinal();
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
		this.enterRule(_localctx, 28, DutchNumbersParser.RULE_thousands);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 110;
				this.ones();
				}
				break;

			case 2:
				{
				this.state = 111;
				this.tens();
				}
				break;

			case 3:
				{
				this.state = 112;
				this.hundreds();
				}
				break;
			}
			this.state = 115;
			this.match(DutchNumbersParser.DUIZEND);
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DutchNumbersParser.EN) {
				{
				this.state = 116;
				this.match(DutchNumbersParser.EN);
				this.state = 117;
				this.number();
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
	public ordinal_thousands(): Ordinal_thousandsContext {
		let _localctx: Ordinal_thousandsContext = new Ordinal_thousandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, DutchNumbersParser.RULE_ordinal_thousands);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 120;
				this.ones();
				}
				break;

			case 2:
				{
				this.state = 121;
				this.tens();
				}
				break;

			case 3:
				{
				this.state = 122;
				this.hundreds();
				}
				break;
			}
			this.state = 125;
			this.match(DutchNumbersParser.DUIZENDSTE);
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 126;
				this.match(DutchNumbersParser.EN);
				this.state = 127;
				this.ordinal();
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
	public millions(): MillionsContext {
		let _localctx: MillionsContext = new MillionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, DutchNumbersParser.RULE_millions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 130;
				this.ones();
				}
				break;

			case 2:
				{
				this.state = 131;
				this.tens();
				}
				break;

			case 3:
				{
				this.state = 132;
				this.hundreds();
				}
				break;
			}
			this.state = 135;
			this.match(DutchNumbersParser.MILJOEN);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DutchNumbersParser.EN) {
				{
				this.state = 136;
				this.match(DutchNumbersParser.EN);
				this.state = 137;
				this.number();
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
	public ordinal_millions(): Ordinal_millionsContext {
		let _localctx: Ordinal_millionsContext = new Ordinal_millionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, DutchNumbersParser.RULE_ordinal_millions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 140;
				this.ones();
				}
				break;

			case 2:
				{
				this.state = 141;
				this.tens();
				}
				break;

			case 3:
				{
				this.state = 142;
				this.hundreds();
				}
				break;
			}
			this.state = 145;
			this.match(DutchNumbersParser.MILJOENSTE);
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 146;
				this.match(DutchNumbersParser.EN);
				this.state = 147;
				this.ordinal();
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\x99\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02,\n\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x034\n\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x05\bA\n\b\x03\t\x03\t\x03\t\x05\tF\n\t\x03\n\x03\n\x03\v\x03\v\x03\f" +
		"\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E^\n\x0E\x03" +
		"\x0E\x03\x0E\x05\x0Eb\n\x0E\x03\x0F\x03\x0F\x05\x0Ff\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0Fk\n\x0F\x03\x0F\x03\x0F\x05\x0Fo\n\x0F\x03\x10\x03" +
		"\x10\x03\x10\x05\x10t\n\x10\x03\x10\x03\x10\x03\x10\x05\x10y\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x05\x11~\n\x11\x03\x11\x03\x11\x03\x11\x05\x11\x83" +
		"\n\x11\x03\x12\x03\x12\x03\x12\x05\x12\x88\n\x12\x03\x12\x03\x12\x03\x12" +
		"\x05\x12\x8D\n\x12\x03\x13\x03\x13\x03\x13\x05\x13\x92\n\x13\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\x97\n\x13\x03\x13\x02\x02\x02\x14\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\b\x03\x02\x03\v\x04\x02" +
		"\")++\x03\x02\f\x15\x04\x02\x17\x1F!!\x06\x02\x16\x16  **,0\x03\x0218" +
		"\x02\xA8\x02+\x03\x02\x02\x02\x043\x03\x02\x02\x02\x065\x03\x02\x02\x02" +
		"\b7\x03\x02\x02\x02\n9\x03\x02\x02\x02\f;\x03\x02\x02\x02\x0E@\x03\x02" +
		"\x02\x02\x10E\x03\x02\x02\x02\x12G\x03\x02\x02\x02\x14I\x03\x02\x02\x02" +
		"\x16K\x03\x02\x02\x02\x18O\x03\x02\x02\x02\x1Aa\x03\x02\x02\x02\x1Cn\x03" +
		"\x02\x02\x02\x1Es\x03\x02\x02\x02 }\x03\x02\x02\x02\"\x87\x03\x02\x02" +
		"\x02$\x91\x03\x02\x02\x02&,\x05\x06\x04\x02\',\x05\x0E\b\x02(,\x05\x1A" +
		"\x0E\x02),\x05\x1E\x10\x02*,\x05\"\x12\x02+&\x03\x02\x02\x02+\'\x03\x02" +
		"\x02\x02+(\x03\x02\x02\x02+)\x03\x02\x02\x02+*\x03\x02\x02\x02,\x03\x03" +
		"\x02\x02\x02-4\x05\b\x05\x02.4\x05\f\x07\x02/4\x05\x10\t\x0204\x05\x1C" +
		"\x0F\x0214\x05 \x11\x0224\x05$\x13\x023-\x03\x02\x02\x023.\x03\x02\x02" +
		"\x023/\x03\x02\x02\x0230\x03\x02\x02\x0231\x03\x02\x02\x0232\x03\x02\x02" +
		"\x024\x05\x03\x02\x02\x0256\t\x02\x02\x026\x07\x03\x02\x02\x0278\t\x03" +
		"\x02\x028\t\x03\x02\x02\x029:\t\x04\x02\x02:\v\x03\x02\x02\x02;<\t\x05" +
		"\x02\x02<\r\x03\x02\x02\x02=A\x05\n\x06\x02>A\x05\x12\n\x02?A\x05\x16" +
		"\f\x02@=\x03\x02\x02\x02@>\x03\x02\x02\x02@?\x03\x02\x02\x02A\x0F\x03" +
		"\x02\x02\x02BF\x05\f\x07\x02CF\x05\x14\v\x02DF\x05\x18\r\x02EB\x03\x02" +
		"\x02\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02F\x11\x03\x02\x02\x02GH\t" +
		"\x06\x02\x02H\x13\x03\x02\x02\x02IJ\t\x07\x02\x02J\x15\x03\x02\x02\x02" +
		"KL\x05\x06\x04\x02LM\x07?\x02\x02MN\x05\x12\n\x02N\x17\x03\x02\x02\x02" +
		"OP\x05\x06\x04\x02PQ\x07?\x02\x02QR\x05\x14\v\x02R\x19\x03\x02\x02\x02" +
		"ST\x05\x06\x04\x02T]\x079\x02\x02U^\x07\x03\x02\x02V^\x07@\x02\x02WX\x07" +
		"?\x02\x02X^\x07\x03\x02\x02YZ\x07?\x02\x02Z^\x07@\x02\x02[\\\x07?\x02" +
		"\x02\\^\x05\x02\x02\x02]U\x03\x02\x02\x02]V\x03\x02\x02\x02]W\x03\x02" +
		"\x02\x02]Y\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^b\x03\x02" +
		"\x02\x02_`\x079\x02\x02`b\x05\x12\n\x02aS\x03\x02\x02\x02a_\x03\x02\x02" +
		"\x02b\x1B\x03\x02\x02\x02cf\x05\x06\x04\x02df\x05\x0E\b\x02ec\x03\x02" +
		"\x02\x02ed\x03\x02\x02\x02fg\x03\x02\x02\x02gj\x07<\x02\x02hi\x07?\x02" +
		"\x02ik\x05\x04\x03\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02ko\x03\x02\x02" +
		"\x02lm\x079\x02\x02mo\x05\x14\v\x02ne\x03\x02\x02\x02nl\x03\x02\x02\x02" +
		"o\x1D\x03\x02\x02\x02pt\x05\x06\x04\x02qt\x05\x0E\b\x02rt\x05\x1A\x0E" +
		"\x02sp\x03\x02\x02\x02sq\x03\x02\x02\x02sr\x03\x02\x02\x02tu\x03\x02\x02" +
		"\x02ux\x07:\x02\x02vw\x07?\x02\x02wy\x05\x02\x02\x02xv\x03\x02\x02\x02" +
		"xy\x03\x02\x02\x02y\x1F\x03\x02\x02\x02z~\x05\x06\x04\x02{~\x05\x0E\b" +
		"\x02|~\x05\x1A\x0E\x02}z\x03\x02\x02\x02}{\x03\x02\x02\x02}|\x03\x02\x02" +
		"\x02~\x7F\x03\x02\x02\x02\x7F\x82\x07=\x02\x02\x80\x81\x07?\x02\x02\x81" +
		"\x83\x05\x04\x03\x02\x82\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83" +
		"!\x03\x02\x02\x02\x84\x88\x05\x06\x04\x02\x85\x88\x05\x0E\b\x02\x86\x88" +
		"\x05\x1A\x0E\x02\x87\x84\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x86" +
		"\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8C\x07;\x02\x02\x8A\x8B" +
		"\x07?\x02\x02\x8B\x8D\x05\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D" +
		"\x03\x02\x02\x02\x8D#\x03\x02\x02\x02\x8E\x92\x05\x06\x04\x02\x8F\x92" +
		"\x05\x0E\b\x02\x90\x92\x05\x1A\x0E\x02\x91\x8E\x03\x02\x02\x02\x91\x8F" +
		"\x03\x02\x02\x02\x91\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x96" +
		"\x07>\x02\x02\x94\x95\x07?\x02\x02\x95\x97\x05\x04\x03\x02\x96\x94\x03" +
		"\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97%\x03\x02\x02\x02\x13+3@E]aej" +
		"nsx}\x82\x87\x8C\x91\x96";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DutchNumbersParser.__ATN) {
			DutchNumbersParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DutchNumbersParser._serializedATN));
		}

		return DutchNumbersParser.__ATN;
	}

}

export class NumberContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_number; }
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


export class OrdinalContext extends ParserRuleContext {
	public ordinal_ones(): Ordinal_onesContext | undefined {
		return this.tryGetRuleContext(0, Ordinal_onesContext);
	}
	public ordinal_teens(): Ordinal_teensContext | undefined {
		return this.tryGetRuleContext(0, Ordinal_teensContext);
	}
	public ordinal_tens(): Ordinal_tensContext | undefined {
		return this.tryGetRuleContext(0, Ordinal_tensContext);
	}
	public ordinal_hundreds(): Ordinal_hundredsContext | undefined {
		return this.tryGetRuleContext(0, Ordinal_hundredsContext);
	}
	public ordinal_thousands(): Ordinal_thousandsContext | undefined {
		return this.tryGetRuleContext(0, Ordinal_thousandsContext);
	}
	public ordinal_millions(): Ordinal_millionsContext | undefined {
		return this.tryGetRuleContext(0, Ordinal_millionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_ordinal; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterOrdinal) {
			listener.enterOrdinal(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitOrdinal) {
			listener.exitOrdinal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitOrdinal) {
			return visitor.visitOrdinal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnesContext extends ParserRuleContext {
	public EEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EEN, 0); }
	public TWEE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWEE, 0); }
	public DRIE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.DRIE, 0); }
	public VIER(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VIER, 0); }
	public VIJF(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VIJF, 0); }
	public ZES(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZES, 0); }
	public ZEVEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZEVEN, 0); }
	public ACHT(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ACHT, 0); }
	public NEGEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.NEGEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_ones; }
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


export class Ordinal_onesContext extends ParserRuleContext {
	public EERSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EERSTE, 0); }
	public TWEEDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWEEDE, 0); }
	public DERDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.DERDE, 0); }
	public VIERDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VIERDE, 0); }
	public VIJFDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VIJFDE, 0); }
	public ZESDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZESDE, 0); }
	public ZEVENDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZEVENDE, 0); }
	public ACHTSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ACHTSTE, 0); }
	public NEGENTSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.NEGENTSTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_ordinal_ones; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterOrdinal_ones) {
			listener.enterOrdinal_ones(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitOrdinal_ones) {
			listener.exitOrdinal_ones(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitOrdinal_ones) {
			return visitor.visitOrdinal_ones(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TeensContext extends ParserRuleContext {
	public TIEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TIEN, 0); }
	public ELF(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ELF, 0); }
	public TWAALF(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWAALF, 0); }
	public DERTIEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.DERTIEN, 0); }
	public VEERTIEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VEERTIEN, 0); }
	public VIJFTIEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VIJFTIEN, 0); }
	public ZESTIEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZESTIEN, 0); }
	public ZEVENTIEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZEVENTIEN, 0); }
	public ACHTTIEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ACHTTIEN, 0); }
	public NEGENTIEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.NEGENTIEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_teens; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterTeens) {
			listener.enterTeens(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitTeens) {
			listener.exitTeens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitTeens) {
			return visitor.visitTeens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ordinal_teensContext extends ParserRuleContext {
	public TIENDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TIENDE, 0); }
	public ELFDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ELFDE, 0); }
	public TWAALFDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWAALFDE, 0); }
	public DERTIENDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.DERTIENDE, 0); }
	public VEERTIENDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VEERTIENDE, 0); }
	public VIJFTIENDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VIJFTIENDE, 0); }
	public ZESTIENDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZESTIENDE, 0); }
	public ZEVENTIENDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZEVENTIENDE, 0); }
	public ACHTTIENDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ACHTTIENDE, 0); }
	public NEGENTIENDE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.NEGENTIENDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_ordinal_teens; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterOrdinal_teens) {
			listener.enterOrdinal_teens(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitOrdinal_teens) {
			listener.exitOrdinal_teens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitOrdinal_teens) {
			return visitor.visitOrdinal_teens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TensContext extends ParserRuleContext {
	public teens(): TeensContext | undefined {
		return this.tryGetRuleContext(0, TeensContext);
	}
	public tens_unit(): Tens_unitContext | undefined {
		return this.tryGetRuleContext(0, Tens_unitContext);
	}
	public tens_with_ones(): Tens_with_onesContext | undefined {
		return this.tryGetRuleContext(0, Tens_with_onesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_tens; }
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


export class Ordinal_tensContext extends ParserRuleContext {
	public ordinal_teens(): Ordinal_teensContext | undefined {
		return this.tryGetRuleContext(0, Ordinal_teensContext);
	}
	public tens_unit_ordinal(): Tens_unit_ordinalContext | undefined {
		return this.tryGetRuleContext(0, Tens_unit_ordinalContext);
	}
	public ordinal_tens_with_ones(): Ordinal_tens_with_onesContext | undefined {
		return this.tryGetRuleContext(0, Ordinal_tens_with_onesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_ordinal_tens; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterOrdinal_tens) {
			listener.enterOrdinal_tens(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitOrdinal_tens) {
			listener.exitOrdinal_tens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitOrdinal_tens) {
			return visitor.visitOrdinal_tens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tens_unitContext extends ParserRuleContext {
	public TWINTIG(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWINTIG, 0); }
	public DERTIG(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.DERTIG, 0); }
	public VEERTIG(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VEERTIG, 0); }
	public VIJFTIG(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VIJFTIG, 0); }
	public ZESTIG(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZESTIG, 0); }
	public ZEVENTIG(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZEVENTIG, 0); }
	public TACHTIG(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TACHTIG, 0); }
	public NEGENTIG(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.NEGENTIG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_tens_unit; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterTens_unit) {
			listener.enterTens_unit(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitTens_unit) {
			listener.exitTens_unit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitTens_unit) {
			return visitor.visitTens_unit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tens_unit_ordinalContext extends ParserRuleContext {
	public TWINTIGSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TWINTIGSTE, 0); }
	public DERTIGSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.DERTIGSTE, 0); }
	public VEERTIGSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VEERTIGSTE, 0); }
	public VIJFTIGSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.VIJFTIGSTE, 0); }
	public ZESTIGSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZESTIGSTE, 0); }
	public ZEVENTIGSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.ZEVENTIGSTE, 0); }
	public TACHTIGSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.TACHTIGSTE, 0); }
	public NEGENTIGSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.NEGENTIGSTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_tens_unit_ordinal; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterTens_unit_ordinal) {
			listener.enterTens_unit_ordinal(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitTens_unit_ordinal) {
			listener.exitTens_unit_ordinal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitTens_unit_ordinal) {
			return visitor.visitTens_unit_ordinal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tens_with_onesContext extends ParserRuleContext {
	public ones(): OnesContext {
		return this.getRuleContext(0, OnesContext);
	}
	public EN(): TerminalNode { return this.getToken(DutchNumbersParser.EN, 0); }
	public tens_unit(): Tens_unitContext {
		return this.getRuleContext(0, Tens_unitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_tens_with_ones; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterTens_with_ones) {
			listener.enterTens_with_ones(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitTens_with_ones) {
			listener.exitTens_with_ones(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitTens_with_ones) {
			return visitor.visitTens_with_ones(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ordinal_tens_with_onesContext extends ParserRuleContext {
	public ones(): OnesContext {
		return this.getRuleContext(0, OnesContext);
	}
	public EN(): TerminalNode { return this.getToken(DutchNumbersParser.EN, 0); }
	public tens_unit_ordinal(): Tens_unit_ordinalContext {
		return this.getRuleContext(0, Tens_unit_ordinalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_ordinal_tens_with_ones; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterOrdinal_tens_with_ones) {
			listener.enterOrdinal_tens_with_ones(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitOrdinal_tens_with_ones) {
			listener.exitOrdinal_tens_with_ones(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitOrdinal_tens_with_ones) {
			return visitor.visitOrdinal_tens_with_ones(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HundredsContext extends ParserRuleContext {
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public HONDERD(): TerminalNode { return this.getToken(DutchNumbersParser.HONDERD, 0); }
	public EEN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EEN, 0); }
	public EEN_VARIANT(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EEN_VARIANT, 0); }
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public tens_unit(): Tens_unitContext | undefined {
		return this.tryGetRuleContext(0, Tens_unitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_hundreds; }
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


export class Ordinal_hundredsContext extends ParserRuleContext {
	public HONDERDSTE(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.HONDERDSTE, 0); }
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public ordinal(): OrdinalContext | undefined {
		return this.tryGetRuleContext(0, OrdinalContext);
	}
	public HONDERD(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.HONDERD, 0); }
	public tens_unit_ordinal(): Tens_unit_ordinalContext | undefined {
		return this.tryGetRuleContext(0, Tens_unit_ordinalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_ordinal_hundreds; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterOrdinal_hundreds) {
			listener.enterOrdinal_hundreds(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitOrdinal_hundreds) {
			listener.exitOrdinal_hundreds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitOrdinal_hundreds) {
			return visitor.visitOrdinal_hundreds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThousandsContext extends ParserRuleContext {
	public DUIZEND(): TerminalNode { return this.getToken(DutchNumbersParser.DUIZEND, 0); }
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	public hundreds(): HundredsContext | undefined {
		return this.tryGetRuleContext(0, HundredsContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_thousands; }
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


export class Ordinal_thousandsContext extends ParserRuleContext {
	public DUIZENDSTE(): TerminalNode { return this.getToken(DutchNumbersParser.DUIZENDSTE, 0); }
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	public hundreds(): HundredsContext | undefined {
		return this.tryGetRuleContext(0, HundredsContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public ordinal(): OrdinalContext | undefined {
		return this.tryGetRuleContext(0, OrdinalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_ordinal_thousands; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterOrdinal_thousands) {
			listener.enterOrdinal_thousands(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitOrdinal_thousands) {
			listener.exitOrdinal_thousands(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitOrdinal_thousands) {
			return visitor.visitOrdinal_thousands(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MillionsContext extends ParserRuleContext {
	public MILJOEN(): TerminalNode { return this.getToken(DutchNumbersParser.MILJOEN, 0); }
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	public hundreds(): HundredsContext | undefined {
		return this.tryGetRuleContext(0, HundredsContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_millions; }
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


export class Ordinal_millionsContext extends ParserRuleContext {
	public MILJOENSTE(): TerminalNode { return this.getToken(DutchNumbersParser.MILJOENSTE, 0); }
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	public hundreds(): HundredsContext | undefined {
		return this.tryGetRuleContext(0, HundredsContext);
	}
	public EN(): TerminalNode | undefined { return this.tryGetToken(DutchNumbersParser.EN, 0); }
	public ordinal(): OrdinalContext | undefined {
		return this.tryGetRuleContext(0, OrdinalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DutchNumbersParser.RULE_ordinal_millions; }
	// @Override
	public enterRule(listener: DutchNumbersListener): void {
		if (listener.enterOrdinal_millions) {
			listener.enterOrdinal_millions(this);
		}
	}
	// @Override
	public exitRule(listener: DutchNumbersListener): void {
		if (listener.exitOrdinal_millions) {
			listener.exitOrdinal_millions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DutchNumbersVisitor<Result>): Result {
		if (visitor.visitOrdinal_millions) {
			return visitor.visitOrdinal_millions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


