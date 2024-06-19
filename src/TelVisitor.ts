import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import {
    DutchNumbersParser,
    HundredsContext,
    MillionsContext,
    NumberContext,
    OnesContext,
    OrdinalContext,
    Ordinal_hundredsContext,
    Ordinal_millionsContext,
    Ordinal_onesContext,
    Ordinal_teensContext,
    Ordinal_tensContext,
    Ordinal_tens_with_onesContext,
    Ordinal_thousandsContext,
    TeensContext,
    TensContext,
    Tens_unitContext,
    Tens_unit_ordinalContext,
    Tens_with_onesContext,
    ThousandsContext
} from './grammar/generated/DutchNumbersParser';
import { DutchNumbersVisitor } from './grammar/generated/DutchNumbersVisitor';

export class TelVisitor implements DutchNumbersVisitor<number> {

    // Visit method for numbers
    visitNumber(ctx: NumberContext): number {
        if (ctx.ones()) return this.visitOnes(ctx.ones()!);
        if (ctx.teens()) return this.visitTeens(ctx.teens()!);
        if (ctx.tens()) return this.visitTens(ctx.tens()!);
        if (ctx.hundreds()) return this.visitHundreds(ctx.hundreds()!);
        if (ctx.thousands()) return this.visitThousands(ctx.thousands()!);
        if (ctx.millions()) return this.visitMillions(ctx.millions()!);
        return 0;
    }

    // Visit method for ordinals
    visitOrdinal(ctx: OrdinalContext): number {
        if (ctx.ordinal_ones()) return this.visitOrdinal_ones(ctx.ordinal_ones()!);
        if (ctx.ordinal_teens()) return this.visitOrdinal_teens(ctx.ordinal_teens()!);
        if (ctx.ordinal_tens()) return this.visitOrdinal_tens(ctx.ordinal_tens()!);
        if (ctx.ordinal_hundreds()) return this.visitOrdinal_hundreds(ctx.ordinal_hundreds()!);
        if (ctx.ordinal_thousands()) return this.visitOrdinal_thousands(ctx.ordinal_thousands()!);
        if (ctx.ordinal_millions()) return this.visitOrdinal_millions(ctx.ordinal_millions()!);
        return 0;
    }

    // Visit method for ones
    visitOnes(ctx: OnesContext): number {
        if (ctx.EEN()) return 1;
        if (ctx.TWEE()) return 2;
        if (ctx.DRIE()) return 3;
        if (ctx.VIER()) return 4;
        if (ctx.VIJF()) return 5;
        if (ctx.ZES()) return 6;
        if (ctx.ZEVEN()) return 7;
        if (ctx.ACHT()) return 8;
        if (ctx.NEGEN()) return 9;
        return 0;
    }

    // Visit method for ordinal ones
    visitOrdinal_ones(ctx: Ordinal_onesContext): number {
        if (ctx.EERSTE()) return 1;
        if (ctx.TWEEDE()) return 2;
        if (ctx.DERDE()) return 3;
        if (ctx.VIERDE()) return 4;
        if (ctx.VIJFDE()) return 5;
        if (ctx.ZESDE()) return 6;
        if (ctx.ZEVENDE()) return 7;
        if (ctx.ACHTSTE()) return 8;
        if (ctx.NEGENTSTE()) return 9;
        return 0;
    }

    // Visit method for teens
    visitTeens(ctx: TeensContext): number {
        if (ctx.TIEN()) return 10;
        if (ctx.ELF()) return 11;
        if (ctx.TWAALF()) return 12;
        if (ctx.DERTIEN()) return 13;
        if (ctx.VEERTIEN()) return 14;
        if (ctx.VIJFTIEN()) return 15;
        if (ctx.ZESTIEN()) return 16;
        if (ctx.ZEVENTIEN()) return 17;
        if (ctx.ACHTTIEN()) return 18;
        if (ctx.NEGENTIEN()) return 19;
        return 0;
    }

    // Visit method for ordinal teens
    visitOrdinal_teens(ctx: Ordinal_teensContext): number {
        if (ctx.TIENDE()) return 10;
        if (ctx.ELFDE()) return 11;
        if (ctx.TWAALFDE()) return 12;
        if (ctx.DERTIENDE()) return 13;
        if (ctx.VEERTIENDE()) return 14;
        if (ctx.VIJFTIENDE()) return 15;
        if (ctx.ZESTIENDE()) return 16;
        if (ctx.ZEVENTIENDE()) return 17;
        if (ctx.ACHTTIENDE()) return 18;
        if (ctx.NEGENTIENDE()) return 19;
        return 0;
    }

    // Visit method for tens
    visitTens(ctx: TensContext): number {
        if (ctx.teens()) return this.visitTeens(ctx.teens()!);
        if (ctx.tens_unit()) return this.visitTens_unit(ctx.tens_unit()!);
        if (ctx.tens_with_ones()) return this.visitTens_with_ones(ctx.tens_with_ones()!);
        return 0;
    }

    // Visit method for ordinal tens
    visitOrdinal_tens(ctx: Ordinal_tensContext): number {
        if (ctx.ordinal_teens()) return this.visitOrdinal_teens(ctx.ordinal_teens()!);
        if (ctx.tens_unit_ordinal()) return this.visitTens_unit_ordinal(ctx.tens_unit_ordinal()!);
        if (ctx.ordinal_tens_with_ones()) return this.visitOrdinal_tens_with_ones(ctx.ordinal_tens_with_ones()!);
        return 0;
    }

    // Visit method for tens unit
    visitTens_unit(ctx: Tens_unitContext): number {
        if (ctx.TWINTIG()) return 20;
        if (ctx.DERTIG()) return 30;
        if (ctx.VEERTIG()) return 40;
        if (ctx.VIJFTIG()) return 50;
        if (ctx.ZESTIG()) return 60;
        if (ctx.ZEVENTIG()) return 70;
        if (ctx.TACHTIG()) return 80;
        if (ctx.NEGENTIG()) return 90;
        return 0;
    }

    // Visit method for ordinal tens unit
    visitTens_unit_ordinal(ctx: Tens_unit_ordinalContext): number {
        if (ctx.TWINTIGSTE()) return 20;
        if (ctx.DERTIGSTE()) return 30;
        if (ctx.VEERTIGSTE()) return 40;
        if (ctx.VIJFTIGSTE()) return 50;
        if (ctx.ZESTIGSTE()) return 60;
        if (ctx.ZEVENTIGSTE()) return 70;
        if (ctx.TACHTIGSTE()) return 80;
        if (ctx.NEGENTIGSTE()) return 90;
        return 0;
    }

    // Visit method for tens with ones
    visitTens_with_ones(ctx: Tens_with_onesContext): number {
        return this.visitOnes(ctx.ones()!) + this.visitTens_unit(ctx.tens_unit()!);
    }

    // Visit method for ordinal tens with ones
    visitOrdinal_tens_with_ones(ctx: Ordinal_tens_with_onesContext): number {
        return this.visitOnes(ctx.ones()!) + this.visitTens_unit_ordinal(ctx.tens_unit_ordinal()!);
    }

    // Visit method for hundreds
    visitHundreds(ctx: HundredsContext): number {
        let baseValue = this.visitOnes(ctx.ones()!) * 100;
        if (ctx.number()) {
            baseValue += this.visitNumber(ctx.number()!);
        }
        return baseValue;
    }

    // Visit method for ordinal hundreds
    visitOrdinal_hundreds(ctx: Ordinal_hundredsContext): number {
        let baseValue = this.visitOnes(ctx.ones()!) * 100;
        if (ctx.ordinal()) {
            baseValue += this.visitOrdinal(ctx.ordinal()!);
        }
        return baseValue;
    }

    // Visit method for thousands
    visitThousands(ctx: ThousandsContext): number {
        let baseValue = this.visitOnes(ctx.ones()!) * 1000;
        if (ctx.number()) {
            baseValue += this.visitNumber(ctx.number()!);
        }
        return baseValue;
    }

    // Visit method for ordinal thousands
    visitOrdinal_thousands(ctx: Ordinal_thousandsContext): number {
        let baseValue = this.visitOnes(ctx.ones()!) * 1000;
        if (ctx.ordinal()) {
            baseValue += this.visitOrdinal(ctx.ordinal()!);
        }
        return baseValue;
    }

    // Visit method for millions
    visitMillions(ctx: MillionsContext): number {
        let baseValue = this.visitOnes(ctx.ones()!) * 1000000;
        if (ctx.number()) {
            baseValue += this.visitNumber(ctx.number()!);
        }
        return baseValue;
    }

    // Visit method for ordinal millions
    visitOrdinal_millions(ctx: Ordinal_millionsContext): number {
        let baseValue = this.visitOnes(ctx.ones()!) * 1000000;
        if (ctx.ordinal()) {
            baseValue += this.visitOrdinal(ctx.ordinal()!);
        }
        return baseValue;
    }

    // Visit method for the entire parse tree
    visit(tree: ParseTree): number {
        if (tree instanceof NumberContext) {
            return this.visitNumber(tree);
        }
        if (tree instanceof OrdinalContext) {
            return this.visitOrdinal(tree);
        }
        return 0;
    }

    // Visit children nodes
    visitChildren(node: RuleNode): number {
        let result = 0;
        for (let i = 0; i < node.childCount; i++) {
            const child = node.getChild(i);
            result += this.visit(child);
        }
        return result;
    }

    // Visit terminal nodes
    visitTerminal(node: TerminalNode): number {
        return 0;
    }

    // Visit error nodes
    visitErrorNode(node: ErrorNode): number {
        throw new Error(`Error at node: ${node.text}`);
    }
}
