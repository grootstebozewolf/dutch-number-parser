import { ParseTree, RuleNode, TerminalNode, ErrorNode } from 'antlr4ts/tree';
import { DutchNumbersParserVisitor } from './grammar/generated/DutchNumbersParserVisitor';
import { NumberContext, SimpleContext, UnitContext, TeenContext, TensContext, CompoundContext, Large_numberContext } from './grammar/generated/DutchNumbersParser';

export class TelVisitor implements DutchNumbersParserVisitor<number> {
    visit(tree: ParseTree): number {
        if (tree instanceof NumberContext) {
            return this.visitNumber(tree);
        } else {
            throw new Error('Unsupported parse tree node');
        }
    }

    visitNumber(ctx: NumberContext): number {
        if (ctx.simple()) {
            return this.visitSimple(ctx.simple()!);
        } else if (ctx.compound()) {
            return this.visitCompound(ctx.compound()!);
        } else if (ctx.large_number()) {
            return this.visitLarge_number(ctx.large_number()!);
        }
        throw new Error('Invalid number context');
    }

    visitSimple(ctx: SimpleContext): number {
        if (ctx.unit()) {
            return this.visitUnit(ctx.unit()!);
        } else if (ctx.teen()) {
            return this.visitTeen(ctx.teen()!);
        } else if (ctx.tens()) {
            return this.visitTens(ctx.tens()!);
        }
        throw new Error('Invalid simple context');
    }

    visitUnit(ctx: UnitContext): number {
        if (ctx.ONE()) return 1;
        if (ctx.TWO()) return 2;
        if (ctx.THREE()) return 3;
        if (ctx.FOUR()) return 4;
        if (ctx.FIVE()) return 5;
        if (ctx.SIX()) return 6;
        if (ctx.SEVEN()) return 7;
        if (ctx.EIGHT()) return 8;
        if (ctx.NINE()) return 9;
        throw new Error('Invalid unit context');
    }

    visitTeen(ctx: TeenContext): number {
        if (ctx.TEN()) return 10;
        if (ctx.ELEVEN()) return 11;
        if (ctx.TWELVE()) return 12;
        if (ctx.THIRTEEN()) return 13;
        if (ctx.FOURTEEN()) return 14;
        if (ctx.FIFTEEN()) return 15;
        if (ctx.SIXTEEN()) return 16;
        if (ctx.SEVENTEEN()) return 17;
        if (ctx.EIGHTEEN()) return 18;
        if (ctx.NINETEEN()) return 19;
        throw new Error('Invalid teen context');
    }

    visitTens(ctx: TensContext): number {
        if (ctx.TWENTY()) return 20;
        if (ctx.THIRTY()) return 30;
        if (ctx.FORTY()) return 40;
        if (ctx.FIFTY()) return 50;
        if (ctx.SIXTY()) return 60;
        if (ctx.SEVENTY()) return 70;
        if (ctx.EIGHTY()) return 80;
        if (ctx.NINETY()) return 90;
        throw new Error('Invalid tens context');
    }

    visitCompound(ctx: CompoundContext): number {
        if (ctx.tens() && ctx.unit()) {
            return this.visitTens(ctx.tens()!) + this.visitUnit(ctx.unit()!);
        } else if (ctx.unit() && ctx.EN() && ctx.tens()) {
            return this.visitUnit(ctx.unit()!) + this.visitTens(ctx.tens()!);
        } else if (ctx.TWO_PLURAL() && ctx.tens()) {
            return 2 + this.visitTens(ctx.tens()!);
        } else if (ctx.THREE_PLURAL() && ctx.tens()) {
            return 3 + this.visitTens(ctx.tens()!);
        }
        throw new Error('Invalid compound context');
    }

    visitLarge_number(ctx: Large_numberContext): number {
        let value = 0;

        if (ctx.unit()) {
            value += this.visitUnit(ctx.unit()!);
        }

        if (ctx.HUNDRED()) {
            value = (value === 0 ? 1 : value) * 100;
            if (ctx.number()) {
                value += this.visitNumber(ctx.number()!);
            }
        } else if (ctx.THOUSAND()) {
            value = (value === 0 ? 1 : value) * 1000;
            if (ctx.number()) {
                value += this.visitNumber(ctx.number()!);
            }
        } else if (ctx.MILLION()) {
            value = (value === 0 ? 1 : value) * 1000000;
            if (ctx.number()) {
                value += this.visitNumber(ctx.number()!);
            }
        } else if (ctx.BILLION()) {
            value = (value === 0 ? 1 : value) * 1000000000;
            if (ctx.number()) {
                value += this.visitNumber(ctx.number()!);
            }
        }

        return value;
    }

    visitChildren(node: RuleNode): number {
        let result = 0;
        for (let i = 0; i < node.childCount; i++) {
            const child = node.getChild(i);
            result += this.visit(child);
        }
        return result;
    }

    visitTerminal(node: TerminalNode): number {
        return 0;
    }

    visitErrorNode(node: ErrorNode): number {
        throw new Error(`Error at node: ${node.text}`);
    }
}
