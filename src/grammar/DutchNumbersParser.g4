parser grammar DutchNumbersParser;

options { tokenVocab=DutchNumbersLexer; }

number
    : whole_number EOF
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
    : TWO_PLURAL (TWENTY | THIRTY | FORTY | FIFTY | SIXTY | SEVENTY | EIGHTY | NINETY)
    | THREE_PLURAL (TWENTY | THIRTY | FORTY | FIFTY | SIXTY | SEVENTY | EIGHTY | NINETY)
    | (ones EN)? (TWENTY | THIRTY | FORTY | FIFTY | SIXTY | SEVENTY | EIGHTY | NINETY)
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
    : (ones|tens)? HUNDRED (EN? (ones|tens))?
    ;

thousands
    : (ones|tens|hundreds)? THOUSAND (EN? (ones|tens|hundreds))?
    ;

millions
    : (ones|tens|hundreds)? MILLION (EN (ones|tens|hundreds))?
    ;

billions
    : (ones|tens|hundreds|thousands)? BILLION (EN (ones|tens|hundreds|thousands))?
    ;
