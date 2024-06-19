// Generated from src/grammar/DutchNumbers.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class DutchNumbersLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"EEN", "TWEE", "DRIE", "VIER", "VIJF", "ZES", "ZEVEN", "ACHT", "NEGEN", 
		"TIEN", "ELF", "TWAALF", "DERTIEN", "VEERTIEN", "VIJFTIEN", "ZESTIEN", 
		"ZEVENTIEN", "ACHTTIEN", "NEGENTIEN", "TWINTIG", "TIENDE", "ELFDE", "TWAALFDE", 
		"DERTIENDE", "VEERTIENDE", "VIJFTIENDE", "ZESTIENDE", "ZEVENTIENDE", "ACHTTIENDE", 
		"DERTIG", "NEGENTIENDE", "EERSTE", "TWEEDE", "DERDE", "VIERDE", "VIJFDE", 
		"ZESDE", "ZEVENDE", "ACHTSTE", "VEERTIG", "NEGENTSTE", "VIJFTIG", "ZESTIG", 
		"ZEVENTIG", "TACHTIG", "NEGENTIG", "TWINTIGSTE", "DERTIGSTE", "VEERTIGSTE", 
		"VIJFTIGSTE", "ZESTIGSTE", "ZEVENTIGSTE", "TACHTIGSTE", "NEGENTIGSTE", 
		"HONDERD", "DUIZEND", "MILJOEN", "HONDERDSTE", "DUIZENDSTE", "MILJOENSTE", 
		"EN", "EEN_VARIANT", "WS",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DutchNumbersLexer._LITERAL_NAMES, DutchNumbersLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DutchNumbersLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(DutchNumbersLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "DutchNumbers.g4"; }

	// @Override
	public get ruleNames(): string[] { return DutchNumbersLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return DutchNumbersLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return DutchNumbersLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return DutchNumbersLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02A\u027F\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 " +
		"\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x031\x031\x031\x031\x031\x031\x03" +
		"1\x031\x031\x031\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x036\x036\x036\x036\x036\x036\x036\x036\x03" +
		"6\x036\x036\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x038\x038\x038\x038\x038\x038\x038\x038\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03@\x06@\u027A\n@\r@\x0E@\u027B" +
		"\x03@\x03@\x02\x02\x02A\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
		"\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02" +
		"\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I" +
		"\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x02" +
		"1a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02" +
		"=y\x02>{\x02?}\x02@\x7F\x02A\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02\u027F" +
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
		"\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02" +
		"\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02" +
		"\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02" +
		"\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02" +
		"!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03" +
		"\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02" +
		"\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x02" +
		"5\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02" +
		"\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02" +
		"\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03" +
		"\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02" +
		"\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02" +
		"W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02" +
		"\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02" +
		"\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03" +
		"\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02" +
		"\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02" +
		"y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03" +
		"\x02\x02\x02\x03\x81\x03\x02\x02\x02\x05\x85\x03\x02\x02\x02\x07\x8A\x03" +
		"\x02\x02\x02\t\x8F\x03\x02\x02\x02\v\x94\x03\x02\x02\x02\r\x99\x03\x02" +
		"\x02\x02\x0F\x9D\x03\x02\x02\x02\x11\xA3\x03\x02\x02\x02\x13\xA8\x03\x02" +
		"\x02\x02\x15\xAE\x03\x02\x02\x02\x17\xB3\x03\x02\x02\x02\x19\xB7\x03\x02" +
		"\x02\x02\x1B\xBE\x03\x02\x02\x02\x1D\xC6\x03\x02\x02\x02\x1F\xCF\x03\x02" +
		"\x02\x02!\xD8\x03\x02\x02\x02#\xE0\x03\x02\x02\x02%\xEA\x03\x02\x02\x02" +
		"\'\xF3\x03\x02\x02\x02)\xFD\x03\x02\x02\x02+\u0105\x03\x02\x02\x02-\u010C" +
		"\x03\x02\x02\x02/\u0112\x03\x02\x02\x021\u011B\x03\x02\x02\x023\u0125" +
		"\x03\x02\x02\x025\u0130\x03\x02\x02\x027\u013B\x03\x02\x02\x029\u0145" +
		"\x03\x02\x02\x02;\u0151\x03\x02\x02\x02=\u015C\x03\x02\x02\x02?\u0163" +
		"\x03\x02\x02\x02A\u016F\x03\x02\x02\x02C\u0176\x03\x02\x02\x02E\u017D" +
		"\x03\x02\x02\x02G\u0183\x03\x02\x02\x02I\u018A\x03\x02\x02\x02K\u0191" +
		"\x03\x02\x02\x02M\u0197\x03\x02\x02\x02O\u019F\x03\x02\x02\x02Q\u01A7" +
		"\x03\x02\x02\x02S\u01AF\x03\x02\x02\x02U\u01B7\x03\x02\x02\x02W\u01BF" +
		"\x03\x02\x02\x02Y\u01C6\x03\x02\x02\x02[\u01CF\x03\x02\x02\x02]\u01D7" +
		"\x03\x02\x02\x02_\u01E0\x03\x02\x02\x02a\u01EB\x03\x02\x02\x02c\u01F5" +
		"\x03\x02\x02\x02e\u0200\x03\x02\x02\x02g\u020B\x03\x02\x02\x02i\u0215" +
		"\x03\x02\x02\x02k\u0221\x03\x02\x02\x02m\u022C\x03\x02\x02\x02o\u0238" +
		"\x03\x02\x02\x02q\u0240\x03\x02\x02\x02s\u0248\x03\x02\x02\x02u\u0250" +
		"\x03\x02\x02\x02w\u025B\x03\x02\x02\x02y\u0266\x03\x02\x02\x02{\u0271" +
		"\x03\x02\x02\x02}\u0274\x03\x02\x02\x02\x7F\u0279\x03\x02\x02\x02\x81" +
		"\x82\x07g\x02\x02\x82\x83\x07g\x02\x02\x83\x84\x07p\x02\x02\x84\x04\x03" +
		"\x02\x02\x02\x85\x86\x07v\x02\x02\x86\x87\x07y\x02\x02\x87\x88\x07g\x02" +
		"\x02\x88\x89\x07g\x02\x02\x89\x06\x03\x02\x02\x02\x8A\x8B\x07f\x02\x02" +
		"\x8B\x8C\x07t\x02\x02\x8C\x8D\x07k\x02\x02\x8D\x8E\x07g\x02\x02\x8E\b" +
		"\x03\x02\x02\x02\x8F\x90\x07x\x02\x02\x90\x91\x07k\x02\x02\x91\x92\x07" +
		"g\x02\x02\x92\x93\x07t\x02\x02\x93\n\x03\x02\x02\x02\x94\x95\x07x\x02" +
		"\x02\x95\x96\x07k\x02\x02\x96\x97\x07l\x02\x02\x97\x98\x07h\x02\x02\x98" +
		"\f\x03\x02\x02\x02\x99\x9A\x07|\x02\x02\x9A\x9B\x07g\x02\x02\x9B\x9C\x07" +
		"u\x02\x02\x9C\x0E\x03\x02\x02\x02\x9D\x9E\x07|\x02\x02\x9E\x9F\x07g\x02" +
		"\x02\x9F\xA0\x07x\x02\x02\xA0\xA1\x07g\x02\x02\xA1\xA2\x07p\x02\x02\xA2" +
		"\x10\x03\x02\x02\x02\xA3\xA4\x07c\x02\x02\xA4\xA5\x07e\x02\x02\xA5\xA6" +
		"\x07j\x02\x02\xA6\xA7\x07v\x02\x02\xA7\x12\x03\x02\x02\x02\xA8\xA9\x07" +
		"p\x02\x02\xA9\xAA\x07g\x02\x02\xAA\xAB\x07i\x02\x02\xAB\xAC\x07g\x02\x02" +
		"\xAC\xAD\x07p\x02\x02\xAD\x14\x03\x02\x02\x02\xAE\xAF\x07v\x02\x02\xAF" +
		"\xB0\x07k\x02\x02\xB0\xB1\x07g\x02\x02\xB1\xB2\x07p\x02\x02\xB2\x16\x03" +
		"\x02\x02\x02\xB3\xB4\x07g\x02\x02\xB4\xB5\x07n\x02\x02\xB5\xB6\x07h\x02" +
		"\x02\xB6\x18\x03\x02\x02\x02\xB7\xB8\x07v\x02\x02\xB8\xB9\x07y\x02\x02" +
		"\xB9\xBA\x07c\x02\x02\xBA\xBB\x07c\x02\x02\xBB\xBC\x07n\x02\x02\xBC\xBD" +
		"\x07h\x02\x02\xBD\x1A\x03\x02\x02\x02\xBE\xBF\x07f\x02\x02\xBF\xC0\x07" +
		"g\x02\x02\xC0\xC1\x07t\x02\x02\xC1\xC2\x07v\x02\x02\xC2\xC3\x07k\x02\x02" +
		"\xC3\xC4\x07g\x02\x02\xC4\xC5\x07p\x02\x02\xC5\x1C\x03\x02\x02\x02\xC6" +
		"\xC7\x07x\x02\x02\xC7\xC8\x07g\x02\x02\xC8\xC9\x07g\x02\x02\xC9\xCA\x07" +
		"t\x02\x02\xCA\xCB\x07v\x02\x02\xCB\xCC\x07k\x02\x02\xCC\xCD\x07g\x02\x02" +
		"\xCD\xCE\x07p\x02\x02\xCE\x1E\x03\x02\x02\x02\xCF\xD0\x07x\x02\x02\xD0" +
		"\xD1\x07k\x02\x02\xD1\xD2\x07l\x02\x02\xD2\xD3\x07h\x02\x02\xD3\xD4\x07" +
		"v\x02\x02\xD4\xD5\x07k\x02\x02\xD5\xD6\x07g\x02\x02\xD6\xD7\x07p\x02\x02" +
		"\xD7 \x03\x02\x02\x02\xD8\xD9\x07|\x02\x02\xD9\xDA\x07g\x02\x02\xDA\xDB" +
		"\x07u\x02\x02\xDB\xDC\x07v\x02\x02\xDC\xDD\x07k\x02\x02\xDD\xDE\x07g\x02" +
		"\x02\xDE\xDF\x07p\x02\x02\xDF\"\x03\x02\x02\x02\xE0\xE1\x07|\x02\x02\xE1" +
		"\xE2\x07g\x02\x02\xE2\xE3\x07x\x02\x02\xE3\xE4\x07g\x02\x02\xE4\xE5\x07" +
		"p\x02\x02\xE5\xE6\x07v\x02\x02\xE6\xE7\x07k\x02\x02\xE7\xE8\x07g\x02\x02" +
		"\xE8\xE9\x07p\x02\x02\xE9$\x03\x02\x02\x02\xEA\xEB\x07c\x02\x02\xEB\xEC" +
		"\x07e\x02\x02\xEC\xED\x07j\x02\x02\xED\xEE\x07v\x02\x02\xEE\xEF\x07v\x02" +
		"\x02\xEF\xF0\x07k\x02\x02\xF0\xF1\x07g\x02\x02\xF1\xF2\x07p\x02\x02\xF2" +
		"&\x03\x02\x02\x02\xF3\xF4\x07p\x02\x02\xF4\xF5\x07g\x02\x02\xF5\xF6\x07" +
		"i\x02\x02\xF6\xF7\x07g\x02\x02\xF7\xF8\x07p\x02\x02\xF8\xF9\x07v\x02\x02" +
		"\xF9\xFA\x07k\x02\x02\xFA\xFB\x07g\x02\x02\xFB\xFC\x07p\x02\x02\xFC(\x03" +
		"\x02\x02\x02\xFD\xFE\x07v\x02\x02\xFE\xFF\x07y\x02\x02\xFF\u0100\x07k" +
		"\x02\x02\u0100\u0101\x07p\x02\x02\u0101\u0102\x07v\x02\x02\u0102\u0103" +
		"\x07k\x02\x02\u0103\u0104\x07i\x02\x02\u0104*\x03\x02\x02\x02\u0105\u0106" +
		"\x07v\x02\x02\u0106\u0107\x07k\x02\x02\u0107\u0108\x07g\x02\x02\u0108" +
		"\u0109\x07p\x02\x02\u0109\u010A\x07f\x02\x02\u010A\u010B\x07g\x02\x02" +
		"\u010B,\x03\x02\x02\x02\u010C\u010D\x07g\x02\x02\u010D\u010E\x07n\x02" +
		"\x02\u010E\u010F\x07h\x02\x02\u010F\u0110\x07f\x02\x02\u0110\u0111\x07" +
		"g\x02\x02\u0111.\x03\x02\x02\x02\u0112\u0113\x07v\x02\x02\u0113\u0114" +
		"\x07y\x02\x02\u0114\u0115\x07c\x02\x02\u0115\u0116\x07c\x02\x02\u0116" +
		"\u0117\x07n\x02\x02\u0117\u0118\x07h\x02\x02\u0118\u0119\x07f\x02\x02" +
		"\u0119\u011A\x07g\x02\x02\u011A0\x03\x02\x02\x02\u011B\u011C\x07f\x02" +
		"\x02\u011C\u011D\x07g\x02\x02\u011D\u011E\x07t\x02\x02\u011E\u011F\x07" +
		"v\x02\x02\u011F\u0120\x07k\x02\x02\u0120\u0121\x07g\x02\x02\u0121\u0122" +
		"\x07p\x02\x02\u0122\u0123\x07f\x02\x02\u0123\u0124\x07g\x02\x02\u0124" +
		"2\x03\x02\x02\x02\u0125\u0126\x07x\x02\x02\u0126\u0127\x07g\x02\x02\u0127" +
		"\u0128\x07g\x02\x02\u0128\u0129\x07t\x02\x02\u0129\u012A\x07v\x02\x02" +
		"\u012A\u012B\x07k\x02\x02\u012B\u012C\x07g\x02\x02\u012C\u012D\x07p\x02" +
		"\x02\u012D\u012E\x07f\x02\x02\u012E\u012F\x07g\x02\x02\u012F4\x03\x02" +
		"\x02\x02\u0130\u0131\x07x\x02\x02\u0131\u0132\x07k\x02\x02\u0132\u0133" +
		"\x07l\x02\x02\u0133\u0134\x07h\x02\x02\u0134\u0135\x07v\x02\x02\u0135" +
		"\u0136\x07k\x02\x02\u0136\u0137\x07g\x02\x02\u0137\u0138\x07p\x02\x02" +
		"\u0138\u0139\x07f\x02\x02\u0139\u013A\x07g\x02\x02\u013A6\x03\x02\x02" +
		"\x02\u013B\u013C\x07|\x02\x02\u013C\u013D\x07g\x02\x02\u013D\u013E\x07" +
		"u\x02\x02\u013E\u013F\x07v\x02\x02\u013F\u0140\x07k\x02\x02\u0140\u0141" +
		"\x07g\x02\x02\u0141\u0142\x07p\x02\x02\u0142\u0143\x07f\x02\x02\u0143" +
		"\u0144\x07g\x02\x02\u01448\x03\x02\x02\x02\u0145\u0146\x07|\x02\x02\u0146" +
		"\u0147\x07g\x02\x02\u0147\u0148\x07x\x02\x02\u0148\u0149\x07g\x02\x02" +
		"\u0149\u014A\x07p\x02\x02\u014A\u014B\x07v\x02\x02\u014B\u014C\x07k\x02" +
		"\x02\u014C\u014D\x07g\x02\x02\u014D\u014E\x07p\x02\x02\u014E\u014F\x07" +
		"f\x02\x02\u014F\u0150\x07g\x02\x02\u0150:\x03\x02\x02\x02\u0151\u0152" +
		"\x07c\x02\x02\u0152\u0153\x07e\x02\x02\u0153\u0154\x07j\x02\x02\u0154" +
		"\u0155\x07v\x02\x02\u0155\u0156\x07v\x02\x02\u0156\u0157\x07k\x02\x02" +
		"\u0157\u0158\x07g\x02\x02\u0158\u0159\x07p\x02\x02\u0159\u015A\x07f\x02" +
		"\x02\u015A\u015B\x07g\x02\x02\u015B<\x03\x02\x02\x02\u015C\u015D\x07f" +
		"\x02\x02\u015D\u015E\x07g\x02\x02\u015E\u015F\x07t\x02\x02\u015F\u0160" +
		"\x07v\x02\x02\u0160\u0161\x07k\x02\x02\u0161\u0162\x07i\x02\x02\u0162" +
		">\x03\x02\x02\x02\u0163\u0164\x07p\x02\x02\u0164\u0165\x07g\x02\x02\u0165" +
		"\u0166\x07i\x02\x02\u0166\u0167\x07g\x02\x02\u0167\u0168\x07p\x02\x02" +
		"\u0168\u0169\x07v\x02\x02\u0169\u016A\x07k\x02\x02\u016A\u016B\x07g\x02" +
		"\x02\u016B\u016C\x07p\x02\x02\u016C\u016D\x07f\x02\x02\u016D\u016E\x07" +
		"g\x02\x02\u016E@\x03\x02\x02\x02\u016F\u0170\x07g\x02\x02\u0170\u0171" +
		"\x07g\x02\x02\u0171\u0172\x07t\x02\x02\u0172\u0173\x07u\x02\x02\u0173" +
		"\u0174\x07v\x02\x02\u0174\u0175\x07g\x02\x02\u0175B\x03\x02\x02\x02\u0176" +
		"\u0177\x07v\x02\x02\u0177\u0178\x07y\x02\x02\u0178\u0179\x07g\x02\x02" +
		"\u0179\u017A\x07g\x02\x02\u017A\u017B\x07f\x02\x02\u017B\u017C\x07g\x02" +
		"\x02\u017CD\x03\x02\x02\x02\u017D\u017E\x07f\x02\x02\u017E\u017F\x07g" +
		"\x02\x02\u017F\u0180\x07t\x02\x02\u0180\u0181\x07f\x02\x02\u0181\u0182" +
		"\x07g\x02\x02\u0182F\x03\x02\x02\x02\u0183\u0184\x07x\x02\x02\u0184\u0185" +
		"\x07k\x02\x02\u0185\u0186\x07g\x02\x02\u0186\u0187\x07t\x02\x02\u0187" +
		"\u0188\x07f\x02\x02\u0188\u0189\x07g\x02\x02\u0189H\x03\x02\x02\x02\u018A" +
		"\u018B\x07x\x02\x02\u018B\u018C\x07k\x02\x02\u018C\u018D\x07l\x02\x02" +
		"\u018D\u018E\x07h\x02\x02\u018E\u018F\x07f\x02\x02\u018F\u0190\x07g\x02" +
		"\x02\u0190J\x03\x02\x02\x02\u0191\u0192\x07|\x02\x02\u0192\u0193\x07g" +
		"\x02\x02\u0193\u0194\x07u\x02\x02\u0194\u0195\x07f\x02\x02\u0195\u0196" +
		"\x07g\x02\x02\u0196L\x03\x02\x02\x02\u0197\u0198\x07|\x02\x02\u0198\u0199" +
		"\x07g\x02\x02\u0199\u019A\x07x\x02\x02\u019A\u019B\x07g\x02\x02\u019B" +
		"\u019C\x07p\x02\x02\u019C\u019D\x07f\x02\x02\u019D\u019E\x07g\x02\x02" +
		"\u019EN\x03\x02\x02\x02\u019F\u01A0\x07c\x02\x02\u01A0\u01A1\x07e\x02" +
		"\x02\u01A1\u01A2\x07j\x02\x02\u01A2\u01A3\x07v\x02\x02\u01A3\u01A4\x07" +
		"u\x02\x02\u01A4\u01A5\x07v\x02\x02\u01A5\u01A6\x07g\x02\x02\u01A6P\x03" +
		"\x02\x02\x02\u01A7\u01A8\x07x\x02\x02\u01A8\u01A9\x07g\x02\x02\u01A9\u01AA" +
		"\x07g\x02\x02\u01AA\u01AB\x07t\x02\x02\u01AB\u01AC\x07v\x02\x02\u01AC" +
		"\u01AD\x07k\x02\x02\u01AD\u01AE\x07i\x02\x02\u01AER\x03\x02\x02\x02\u01AF" +
		"\u01B0\x07p\x02\x02\u01B0\u01B1\x07g\x02\x02\u01B1\u01B2\x07i\x02\x02" +
		"\u01B2\u01B3\x07g\x02\x02\u01B3\u01B4\x07p\x02\x02\u01B4\u01B5\x07f\x02" +
		"\x02\u01B5\u01B6\x07g\x02\x02\u01B6T\x03\x02\x02\x02\u01B7\u01B8\x07x" +
		"\x02\x02\u01B8\u01B9\x07k\x02\x02\u01B9\u01BA\x07l\x02\x02\u01BA\u01BB" +
		"\x07h\x02\x02\u01BB\u01BC\x07v\x02\x02\u01BC\u01BD\x07k\x02\x02\u01BD" +
		"\u01BE\x07i\x02\x02\u01BEV\x03\x02\x02\x02\u01BF\u01C0\x07|\x02\x02\u01C0" +
		"\u01C1\x07g\x02\x02\u01C1\u01C2\x07u\x02\x02\u01C2\u01C3\x07v\x02\x02" +
		"\u01C3\u01C4\x07k\x02\x02\u01C4\u01C5\x07i\x02\x02\u01C5X\x03\x02\x02" +
		"\x02\u01C6\u01C7\x07|\x02\x02\u01C7\u01C8\x07g\x02\x02\u01C8\u01C9\x07" +
		"x\x02\x02\u01C9\u01CA\x07g\x02\x02\u01CA\u01CB\x07p\x02\x02\u01CB\u01CC" +
		"\x07v\x02\x02\u01CC\u01CD\x07k\x02\x02\u01CD\u01CE\x07i\x02\x02\u01CE" +
		"Z\x03\x02\x02\x02\u01CF\u01D0\x07v\x02\x02\u01D0\u01D1\x07c\x02\x02\u01D1" +
		"\u01D2\x07e\x02\x02\u01D2\u01D3\x07j\x02\x02\u01D3\u01D4\x07v\x02\x02" +
		"\u01D4\u01D5\x07k\x02\x02\u01D5\u01D6\x07i\x02\x02\u01D6\\\x03\x02\x02" +
		"\x02\u01D7\u01D8\x07p\x02\x02\u01D8\u01D9\x07g\x02\x02\u01D9\u01DA\x07" +
		"i\x02\x02\u01DA\u01DB\x07g\x02\x02\u01DB\u01DC\x07p\x02\x02\u01DC\u01DD" +
		"\x07v\x02\x02\u01DD\u01DE\x07k\x02\x02\u01DE\u01DF\x07i\x02\x02\u01DF" +
		"^\x03\x02\x02\x02\u01E0\u01E1\x07v\x02\x02\u01E1\u01E2\x07y\x02\x02\u01E2" +
		"\u01E3\x07k\x02\x02\u01E3\u01E4\x07p\x02\x02\u01E4\u01E5\x07v\x02\x02" +
		"\u01E5\u01E6\x07k\x02\x02\u01E6\u01E7\x07i\x02\x02\u01E7\u01E8\x07u\x02" +
		"\x02\u01E8\u01E9\x07v\x02\x02\u01E9\u01EA\x07g\x02\x02\u01EA`\x03\x02" +
		"\x02\x02\u01EB\u01EC\x07f\x02\x02\u01EC\u01ED\x07g\x02\x02\u01ED\u01EE" +
		"\x07t\x02\x02\u01EE\u01EF\x07v\x02\x02\u01EF\u01F0\x07k\x02\x02\u01F0" +
		"\u01F1\x07i\x02\x02\u01F1\u01F2\x07u\x02\x02\u01F2\u01F3\x07v\x02\x02" +
		"\u01F3\u01F4\x07g\x02\x02\u01F4b\x03\x02\x02\x02\u01F5\u01F6\x07x\x02" +
		"\x02\u01F6\u01F7\x07g\x02\x02\u01F7\u01F8\x07g\x02\x02\u01F8\u01F9\x07" +
		"t\x02\x02\u01F9\u01FA\x07v\x02\x02\u01FA\u01FB\x07k\x02\x02\u01FB\u01FC" +
		"\x07i\x02\x02\u01FC\u01FD\x07u\x02\x02\u01FD\u01FE\x07v\x02\x02\u01FE" +
		"\u01FF\x07g\x02\x02\u01FFd\x03\x02\x02\x02\u0200\u0201\x07x\x02\x02\u0201" +
		"\u0202\x07k\x02\x02\u0202\u0203\x07l\x02\x02\u0203\u0204\x07h\x02\x02" +
		"\u0204\u0205\x07v\x02\x02\u0205\u0206\x07k\x02\x02\u0206\u0207\x07i\x02" +
		"\x02\u0207\u0208\x07u\x02\x02\u0208\u0209\x07v\x02\x02\u0209\u020A\x07" +
		"g\x02\x02\u020Af\x03\x02\x02\x02\u020B\u020C\x07|\x02\x02\u020C\u020D" +
		"\x07g\x02\x02\u020D\u020E\x07u\x02\x02\u020E\u020F\x07v\x02\x02\u020F" +
		"\u0210\x07k\x02\x02\u0210\u0211\x07i\x02\x02\u0211\u0212\x07u\x02\x02" +
		"\u0212\u0213\x07v\x02\x02\u0213\u0214\x07g\x02\x02\u0214h\x03\x02\x02" +
		"\x02\u0215\u0216\x07|\x02\x02\u0216\u0217\x07g\x02\x02\u0217\u0218\x07" +
		"x\x02\x02\u0218\u0219\x07g\x02\x02\u0219\u021A\x07p\x02\x02\u021A\u021B" +
		"\x07v\x02\x02\u021B\u021C\x07k\x02\x02\u021C\u021D\x07i\x02\x02\u021D" +
		"\u021E\x07u\x02\x02\u021E\u021F\x07v\x02\x02\u021F\u0220\x07g\x02\x02" +
		"\u0220j\x03\x02\x02\x02\u0221\u0222\x07v\x02\x02\u0222\u0223\x07c\x02" +
		"\x02\u0223\u0224\x07e\x02\x02\u0224\u0225\x07j\x02\x02\u0225\u0226\x07" +
		"v\x02\x02\u0226\u0227\x07k\x02\x02\u0227\u0228\x07i\x02\x02\u0228\u0229" +
		"\x07u\x02\x02\u0229\u022A\x07v\x02\x02\u022A\u022B\x07g\x02\x02\u022B" +
		"l\x03\x02\x02\x02\u022C\u022D\x07p\x02\x02\u022D\u022E\x07g\x02\x02\u022E" +
		"\u022F\x07i\x02\x02\u022F\u0230\x07g\x02\x02\u0230\u0231\x07p\x02\x02" +
		"\u0231\u0232\x07v\x02\x02\u0232\u0233\x07k\x02\x02\u0233\u0234\x07i\x02" +
		"\x02\u0234\u0235\x07u\x02\x02\u0235\u0236\x07v\x02\x02\u0236\u0237\x07" +
		"g\x02\x02\u0237n\x03\x02\x02\x02\u0238\u0239\x07j\x02\x02\u0239\u023A" +
		"\x07q\x02\x02\u023A\u023B\x07p\x02\x02\u023B\u023C\x07f\x02\x02\u023C" +
		"\u023D\x07g\x02\x02\u023D\u023E\x07t\x02\x02\u023E\u023F\x07f\x02\x02" +
		"\u023Fp\x03\x02\x02\x02\u0240\u0241\x07f\x02\x02\u0241\u0242\x07w\x02" +
		"\x02\u0242\u0243\x07k\x02\x02\u0243\u0244\x07|\x02\x02\u0244\u0245\x07" +
		"g\x02\x02\u0245\u0246\x07p\x02\x02\u0246\u0247\x07f\x02\x02\u0247r\x03" +
		"\x02\x02\x02\u0248\u0249\x07o\x02\x02\u0249\u024A\x07k\x02\x02\u024A\u024B" +
		"\x07n\x02\x02\u024B\u024C";
	private static readonly _serializedATNSegment1: string =
		"\x07l\x02\x02\u024C\u024D\x07q\x02\x02\u024D\u024E\x07g\x02\x02\u024E" +
		"\u024F\x07p\x02\x02\u024Ft\x03\x02\x02\x02\u0250\u0251\x07j\x02\x02\u0251" +
		"\u0252\x07q\x02\x02\u0252\u0253\x07p\x02\x02\u0253\u0254\x07f\x02\x02" +
		"\u0254\u0255\x07g\x02\x02\u0255\u0256\x07t\x02\x02\u0256\u0257\x07f\x02" +
		"\x02\u0257\u0258\x07u\x02\x02\u0258\u0259\x07v\x02\x02\u0259\u025A\x07" +
		"g\x02\x02\u025Av\x03\x02\x02\x02\u025B\u025C\x07f\x02\x02\u025C\u025D" +
		"\x07w\x02\x02\u025D\u025E\x07k\x02\x02\u025E\u025F\x07|\x02\x02\u025F" +
		"\u0260\x07g\x02\x02\u0260\u0261\x07p\x02\x02\u0261\u0262\x07f\x02\x02" +
		"\u0262\u0263\x07u\x02\x02\u0263\u0264\x07v\x02\x02\u0264\u0265\x07g\x02" +
		"\x02\u0265x\x03\x02\x02\x02\u0266\u0267\x07o\x02\x02\u0267\u0268\x07k" +
		"\x02\x02\u0268\u0269\x07n\x02\x02\u0269\u026A\x07l\x02\x02\u026A\u026B" +
		"\x07q\x02\x02\u026B\u026C\x07g\x02\x02\u026C\u026D\x07p\x02\x02\u026D" +
		"\u026E\x07u\x02\x02\u026E\u026F\x07v\x02\x02\u026F\u0270\x07g\x02\x02" +
		"\u0270z\x03\x02\x02\x02\u0271\u0272\x07g\x02\x02\u0272\u0273\x07p\x02" +
		"\x02\u0273|\x03\x02\x02\x02\u0274\u0275\x07\xEB\x02\x02\u0275\u0276\x07" +
		"\xEB\x02\x02\u0276\u0277\x07p\x02\x02\u0277~\x03\x02\x02\x02\u0278\u027A" +
		"\t\x02\x02\x02\u0279\u0278\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02" +
		"\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027D\x03" +
		"\x02\x02\x02\u027D\u027E\b@\x02\x02\u027E\x80\x03\x02\x02\x02\x04\x02" +
		"\u027B\x03\b\x02\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			DutchNumbersLexer._serializedATNSegment0,
			DutchNumbersLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DutchNumbersLexer.__ATN) {
			DutchNumbersLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DutchNumbersLexer._serializedATN));
		}

		return DutchNumbersLexer.__ATN;
	}

}

