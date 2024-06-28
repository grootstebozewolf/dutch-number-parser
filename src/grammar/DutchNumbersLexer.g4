lexer grammar DutchNumbersLexer;

ONE: 'een';
TWO: 'twee';
THREE: 'drie';
FOUR: 'vier';
FIVE: 'vijf';
SIX: 'zes';
SEVEN: 'zeven';
EIGHT: 'acht';
NINE: 'negen';
TEN: 'tien';
ELEVEN: 'elf';
TWELVE: 'twaalf';
THIRTEEN: 'dertien';
FOURTEEN: 'veertien';
FIFTEEN: 'vijftien';
SIXTEEN: 'zestien';
SEVENTEEN: 'zeventien';
EIGHTEEN: 'achttien';
NINETEEN: 'negentien';
TWENTY: 'twintig';
THIRTY: 'dertig';
FORTY: 'veertig';
FIFTY: 'vijftig';
SIXTY: 'zestig';
SEVENTY: 'zeventig';
EIGHTY: 'tachtig';
NINETY: 'negentig';
HUNDRED: 'honderd';
THOUSAND: 'duizend';
MILLION: 'miljoen';
BILLION: 'miljard';
TWO_PLURAL: 'tweeën';
THREE_PLURAL: 'drieën';
EN: 'en';

WS          : [ \t\r\n]+ -> skip ; // Skip whitespace
