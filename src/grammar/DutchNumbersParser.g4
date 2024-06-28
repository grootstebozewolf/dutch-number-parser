parser grammar DutchNumbersParser;

options { tokenVocab=DutchNumbersLexer; }

number
    : large_number
    | simple
    | compound
    ;

simple
    : unit
    | teen
    | tens
    ;

unit
    : ONE
    | TWO
    | THREE
    | FOUR
    | FIVE
    | SIX
    | SEVEN
    | EIGHT
    | NINE
    ;

teen
    : TEN
    | ELEVEN
    | TWELVE
    | THIRTEEN
    | FOURTEEN
    | FIFTEEN
    | SIXTEEN
    | SEVENTEEN
    | EIGHTEEN
    | NINETEEN
    ;

tens
    : TWENTY
    | THIRTY
    | FORTY
    | FIFTY
    | SIXTY
    | SEVENTY
    | EIGHTY
    | NINETY
    ;

compound
    : tens unit
    | unit EN tens
    | TWO_PLURAL tens
    | THREE_PLURAL tens
    ;

large_number
    : (unit HUNDRED (EN? number)?) 
    | (unit THOUSAND (EN? number)?)
    | (unit MILLION (EN? number)?)
    | (unit BILLION (EN? number)?)
    | HUNDRED (EN? number)?
    | THOUSAND (EN? number)?
    ;
