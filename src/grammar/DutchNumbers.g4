/**
 * Dutch Number Parser
 * 
 * Licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
 * You may obtain a copy of the License at https://creativecommons.org/licenses/by-sa/4.0/
 */

grammar DutchNumbers;

// Entry point
number
    :    ones
    |    tens
    |    hundreds
    |    thousands
    |    millions
    ;

ones
    : 'een'      { $value = 1; }
    | 'twee'     { $value = 2; }
    | 'drie'     { $value = 3; }
    | 'vier'     { $value = 4; }
    | 'vijf'     { $value = 5; }
    | 'zes'      { $value = 6; }
    | 'zeven'    { $value = 7; }
    | 'acht'     { $value = 8; }
    | 'negen'    { $value = 9; }
    ;

teens
    : 'tien'     { $value = 10; }
    | 'elf'      { $value = 11; }
    | 'twaalf'   { $value = 12; }
    | 'dertien'  { $value = 13; }
    | 'veertien' { $value = 14; }
    | 'vijftien' { $value = 15; }
    | 'zestien'  { $value = 16; }
    | 'zeventien'{ $value = 17; }
    | 'achttien' { $value = 18; }
    | 'negentien'{ $value = 19; }
    ;

tens
    : teens
    | tens_unit
    | tens_with_ones
    ;

tens_unit
    : 'twintig'  { $value = 20; }
    | 'dertig'   { $value = 30; }
    | 'veertig'  { $value = 40; }
    | 'vijftig'  { $value = 50; }
    | 'zestig'   { $value = 60; }
    | 'zeventig' { $value = 70; }
    | 'tachtig'  { $value = 80; }
    | 'negentig' { $value = 90; }
    ;

tens_with_ones
    : ones 'en' tens_unit
    ;

hundreds
    : (ones | tens) 'honderd' ('en' number)?
    ;

thousands
    : (ones | tens | hundreds) 'duizend' ('en' number)?
    ;

millions
    : (ones | tens | hundreds) 'miljoen' ('en' number)?
    ;
