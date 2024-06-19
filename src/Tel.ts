/**
 * Dutch Number Parser
 * 
 * Licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
 * You may obtain a copy of the License at https://creativecommons.org/licenses/by-sa/4.0/
 */

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;

public class Tel {

    // Public parse method to convert Dutch numbers to integers
    public static int parse(String input) throws Exception {
        // Set Up ANTLR to Parse the Input
        DutchNumbersLexer lexer = new DutchNumbersLexer(CharStreams.fromString(input));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        DutchNumbersParser parser = new DutchNumbersParser(tokens);

        // Parse the input to create a parse tree
        ParseTree tree = parser.number(); // Change 'number' to the appropriate starting rule if needed

        // Instantiate the Visitor (now private)
        DutchNumbersVisitor visitor = new DutchNumbersVisitor();

        // Apply the Visitor to the Parse Tree
        return visitor.visit(tree);
    }

    // Private inner visitor class to handle the actual tree traversal and evaluation
    private static class DutchNumbersVisitor extends DutchNumbersBaseVisitor<Integer> {

        @Override
        public Integer visitOnes(DutchNumbersParser.OnesContext ctx) {
            if (ctx.EEN() != null) return 1;
            if (ctx.TWEE() != null) return 2;
            if (ctx.DRIE() != null) return 3;
            if (ctx.VIER() != null) return 4;
            if (ctx.VIJF() != null) return 5;
            if (ctx.ZES() != null) return 6;
            if (ctx.ZEVEN() != null) return 7;
            if (ctx.ACHT() != null) return 8;
            if (ctx.NEGEN() != null) return 9;
            return 0;
        }

        @Override
        public Integer visitOrdinal_ones(DutchNumbersParser.Ordinal_onesContext ctx) {
            if (ctx.EERSTE() != null) return 1;
            if (ctx.TWEEDE() != null) return 2;
            if (ctx.DERDE() != null) return 3;
            if (ctx.VIERDE() != null) return 4;
            if (ctx.VIJFDE() != null) return 5;
            if (ctx.ZESDE() != null) return 6;
            if (ctx.ZEVENDE() != null) return 7;
            if (ctx.ACHTSTE() != null) return 8;
            if (ctx.NEGENTSTE() != null) return 9;
            return 0;
        }

        @Override
        public Integer visitTeens(DutchNumbersParser.TeensContext ctx) {
            if (ctx.TIEN() != null) return 10;
            if (ctx.ELF() != null) return 11;
            if (ctx.TWAALF() != null) return 12;
            if (ctx.DERTIEN() != null) return 13;
            if (ctx.VEERTIEN() != null) return 14;
            if (ctx.VIJFTIEN() != null) return 15;
            if (ctx.ZESTIEN() != null) return 16;
            if (ctx.ZEVENTIEN() != null) return 17;
            if (ctx.ACHTTIEN() != null) return 18;
            if (ctx.NEGENTIEN() != null) return 19;
            return 0;
        }

        @Override
        public Integer visitOrdinal_teens(DutchNumbersParser.Ordinal_teensContext ctx) {
            if (ctx.TIENDE() != null) return 10;
            if (ctx.ELFDE() != null) return 11;
            if (ctx.TWAALFDE() != null) return 12;
            if (ctx.DERTIENDE() != null) return 13;
            if (ctx.VEERTIENDE() != null) return 14;
            if (ctx.VIJFTIENDE() != null) return 15;
            if (ctx.ZESTIENDE() != null) return 16;
            if (ctx.ZEVENTIENDE() != null) return 17;
            if (ctx.ACHTTIENDE() != null) return 18;
            if (ctx.NEGENTIENDE() != null) return 19;
            return 0;
        }

        @Override
        public Integer visitTens(DutchNumbersParser.TensContext ctx) {
            if (ctx.teens() != null) return visit(ctx.teens());
            if (ctx.tens_unit() != null) return visit(ctx.tens_unit());
            if (ctx.tens_with_ones() != null) return visit(ctx.tens_with_ones());
            return 0;
        }

        @Override
        public Integer visitOrdinal_tens(DutchNumbersParser.Ordinal_tensContext ctx) {
            if (ctx.ordinal_teens() != null) return visit(ctx.ordinal_teens());
            if (ctx.tens_unit_ordinal() != null) return visit(ctx.tens_unit_ordinal());
            if (ctx.ordinal_tens_with_ones() != null) return visit(ctx.ordinal_tens_with_ones());
            return 0;
        }

        @Override
        public Integer visitTens_unit(DutchNumbersParser.Tens_unitContext ctx) {
            if (ctx.TWINTIG() != null) return 20;
            if (ctx.DERTIG() != null) return 30;
            if (ctx.VEERTIG() != null) return 40;
            if (ctx.VIJFTIG() != null) return 50;
            if (ctx.ZESTIG() != null) return 60;
            if (ctx.ZEVENTIG() != null) return 70;
            if (ctx.TACHTIG() != null) return 80;
            if (ctx.NEGENTIG() != null) return 90;
            return 0;
        }

        @Override
        public Integer visitTens_unit_ordinal(DutchNumbersParser.Tens_unit_ordinalContext ctx) {
            if (ctx.TWINTIGSTE() != null) return 20;
            if (ctx.DERTIGSTE() != null) return 30;
            if (ctx.VEERTIGSTE() != null) return 40;
            if (ctx.VIJFTIGSTE() != null) return 50;
            if (ctx.ZESTIGSTE() != null) return 60;
            if (ctx.ZEVENTIGSTE() != null) return 70;
            if (ctx.TACHTIGSTE() != null) return 80;
            if (ctx.NEGENTIGSTE() != null) return 90;
            return 0;
        }

        @Override
        public Integer visitTens_with_ones(DutchNumbersParser.Tens_with_onesContext ctx) {
            return visit(ctx.ones()) + visit(ctx.tens_unit());
        }

        @Override
        public Integer visitOrdinal_tens_with_ones(DutchNumbersParser.Ordinal_tens_with_onesContext ctx) {
            return visit(ctx.ones()) + visit(ctx.tens_unit_ordinal());
        }

        @Override
        public Integer visitHundreds(DutchNumbersParser.HundredsContext ctx) {
            int baseValue = visit(ctx.ones()) * 100;
            if (ctx.number() != null) {
                baseValue += visit(ctx.number());
            }
            return baseValue;
        }

        @Override
        public Integer visitOrdinal_hundreds(DutchNumbersParser.Ordinal_hundredsContext ctx) {
            int baseValue = visit(ctx.ones()) * 100;
            if (ctx.ordinal() != null) {
                baseValue += visit(ctx.ordinal());
            }
            return baseValue;
        }

        @Override
        public Integer visitThousands(DutchNumbersParser.ThousandsContext ctx) {
            int baseValue = visit(ctx.ones()) * 1000;
            if (ctx.number() != null) {
                baseValue += visit(ctx.number());
            }
            return baseValue;
        }

        @Override
        public Integer visitOrdinal_thousands(DutchNumbersParser.Ordinal_thousandsContext ctx) {
            int baseValue = visit(ctx.ones()) * 1000;
            if (ctx.ordinal() != null) {
                baseValue += visit(ctx.ordinal());
            }
            return baseValue;
        }

        @Override
        public Integer visitMillions(DutchNumbersParser.MillionsContext ctx) {
            int baseValue = visit(ctx.ones()) * 1000000;
            if (ctx.number() != null) {
                baseValue += visit(ctx.number());
            }
            return baseValue;
        }

        @Override
        public Integer visitOrdinal_millions(DutchNumbersParser.Ordinal_millionsContext ctx) {
            int baseValue = visit(ctx.ones()) * 1000000;
            if (ctx.ordinal() != null) {
                baseValue += visit(ctx.ordinal());
            }
            return baseValue;
        }
    }
}
