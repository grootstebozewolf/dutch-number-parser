parser grammar DutchNumbersParser;

options { tokenVocab=DutchNumbersLexer; }

number
    : whole_number
    ;

whole_number
    : ones
    | tens
    | hundreds
    | thousands
    | millions
    | billions
    ;

ones
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

tens
    : TWO_PLURAL ones
    | THREE_PLURAL ones
    | (ones EN)? ( TWENTY | THIRTY | FORTY | FIFTY | SIXTY | SEVENTY | EIGHTY | NINETY) 
    | TEN
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

hundreds
    : HUNDRED
    | ones HUNDRED (EN? tens)?
    ;

thousands
    : THOUSAND
    | ones THOUSAND (EN? ones)?
    | ones THOUSAND (EN? hundreds)?
    | ones THOUSAND (EN? tens)?
    ;

millions
    : ones MILLION (EN? thousands?)?
    ;

billions
    : ones BILLION (EN? millions?)?
    ;
