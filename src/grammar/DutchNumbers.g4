/**
 * Dutch Number Parser
 * 
 * Licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
 * You may obtain a copy of the License at https://creativecommons.org/licenses/by-sa/4.0/
 */

grammar DutchNumbers;

// Parser rules
number
    : ones
    | tens
    | hundreds
    | thousands
    | millions
    ;

ordinal
    : ordinal_ones
    | ordinal_teens
    | ordinal_tens
    | ordinal_hundreds
    | ordinal_thousands
    | ordinal_millions
    ;

ones
    : EEN
    | TWEE
    | DRIE
    | VIER
    | VIJF
    | ZES
    | ZEVEN
    | ACHT
    | NEGEN
    ;

ordinal_ones
    : EERSTE
    | TWEEDE
    | DERDE
    | VIERDE
    | VIJFDE
    | ZESDE
    | ZEVENDE
    | ACHTSTE
    | NEGENTSTE
    ;

teens
    : TIEN
    | ELF
    | TWAALF
    | DERTIEN
    | VEERTIEN
    | VIJFTIEN
    | ZESTIEN
    | ZEVENTIEN
    | ACHTTIEN
    | NEGENTIEN
    ;

ordinal_teens
    : TIENDE
    | ELFDE
    | TWAALFDE
    | DERTIENDE
    | VEERTIENDE
    | VIJFTIENDE
    | ZESTIENDE
    | ZEVENTIENDE
    | ACHTTIENDE
    | NEGENTIENDE
    ;

tens
    : teens
    | tens_unit
    | tens_with_ones
    ;

ordinal_tens
    : ordinal_teens
    | tens_unit_ordinal
    | ordinal_tens_with_ones
    ;

tens_unit
    : TWINTIG
    | DERTIG
    | VEERTIG
    | VIJFTIG
    | ZESTIG
    | ZEVENTIG
    | TACHTIG
    | NEGENTIG
    ;

tens_unit_ordinal
    : TWINTIGSTE
    | DERTIGSTE
    | VEERTIGSTE
    | VIJFTIGSTE
    | ZESTIGSTE
    | ZEVENTIGSTE
    | TACHTIGSTE
    | NEGENTIGSTE
    ;

tens_with_ones
    : ones EN tens_unit
    ;

ordinal_tens_with_ones
    : ones EN tens_unit_ordinal
    ;

hundreds
    // Support "tweehonderdeen", "tweehonderdeneen", and other variations with "een" or "één"
    : ones HONDERD (EEN | EEN_VARIANT | EN EEN | EN EEN_VARIANT | EN number)?
    // Support "honderdtien" pattern directly combining hundreds and tens
    | HONDERD tens_unit
    ;

ordinal_hundreds
    // Support "tweehonderdste" and similar combinations
    : (ones | tens) HONDERDSTE (EN ordinal)?
    // Direct hundreds and ordinal tens, e.g., "honderdtwintigste"
    | HONDERD tens_unit_ordinal
    ;

thousands
    : (ones | tens | hundreds) DUIZEND (EN number)?
    ;

ordinal_thousands
    : (ones | tens | hundreds) DUIZENDSTE (EN ordinal)?
    ;

millions
    : (ones | tens | hundreds) MILJOEN (EN number)?
    ;

ordinal_millions
    : (ones | tens | hundreds) MILJOENSTE (EN ordinal)?
    ;

// Lexer rules
EEN: 'een';  // Matching "een"
TWEE: 'twee';
DRIE: 'drie';
VIER: 'vier';
VIJF: 'vijf';
ZES: 'zes';
ZEVEN: 'zeven';
ACHT: 'acht';
NEGEN: 'negen';

TIEN: 'tien';
ELF: 'elf';
TWAALF: 'twaalf';
DERTIEN: 'dertien';
VEERTIEN: 'veertien';
VIJFTIEN: 'vijftien';
ZESTIEN: 'zestien';
ZEVENTIEN: 'zeventien';
ACHTTIEN: 'achttien';
NEGENTIEN: 'negentien';

TWINTIG: 'twintig';

TIENDE: 'tiende';
ELFDE: 'elfde';
TWAALFDE: 'twaalfde';
DERTIENDE: 'dertiende';
VEERTIENDE: 'veertiende';
VIJFTIENDE: 'vijftiende';
ZESTIENDE: 'zestiende';
ZEVENTIENDE: 'zeventiende';
ACHTTIENDE: 'achttiende';

DERTIG: 'dertig';

NEGENTIENDE: 'negentiende';

EERSTE: 'eerste';
TWEEDE: 'tweede';
DERDE: 'derde';
VIERDE: 'vierde';
VIJFDE: 'vijfde';
ZESDE: 'zesde';
ZEVENDE: 'zevende';
ACHTSTE: 'achtste';

VEERTIG: 'veertig';

NEGENTSTE: 'negende';

VIJFTIG: 'vijftig';
ZESTIG: 'zestig';
ZEVENTIG: 'zeventig';
TACHTIG: 'tachtig';
NEGENTIG: 'negentig';

TWINTIGSTE: 'twintigste';
DERTIGSTE: 'dertigste';
VEERTIGSTE: 'veertigste';
VIJFTIGSTE: 'vijftigste';
ZESTIGSTE: 'zestigste';
ZEVENTIGSTE: 'zeventigste';
TACHTIGSTE: 'tachtigste';
NEGENTIGSTE: 'negentigste';

HONDERD: 'honderd';
DUIZEND: 'duizend';
MILJOEN: 'miljoen';

HONDERDSTE: 'honderdste';
DUIZENDSTE: 'duizendste';
MILJOENSTE: 'miljoenste';

EN: 'en';
EEN_VARIANT: 'één';  // Matching "één"

// Define other tokens and rules after the important ones
WS: [ \t\r\n]+ -> skip;
