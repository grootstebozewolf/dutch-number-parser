import { ParseTree, RuleNode, TerminalNode, ErrorNode } from 'antlr4ts/tree';
import { DutchNumbersParserVisitor } from './grammar/generated/DutchNumbersParserVisitor';
import { NumberContext, Whole_numberContext, OnesContext, TensContext, HundredsContext, ThousandsContext, MillionsContext, BillionsContext } from './grammar/generated/DutchNumbersParser';

abstract class ExpressionNode {
    abstract evaluate(): number;
}

class ValueNode extends ExpressionNode {
    constructor(private value: number) {
        super();
    }

    evaluate(): number {
        return this.value;
    }
}

class AddNode extends ExpressionNode {
    constructor(private left: ExpressionNode, private right: ExpressionNode) {
        super();
    }

    evaluate(): number {
        return this.left.evaluate() + this.right.evaluate();
    }
}

class MultiplyNode extends ExpressionNode {
    constructor(private left: ExpressionNode, private right: ExpressionNode) {
        super();
    }

    evaluate(): number {
        return this.left.evaluate() * this.right.evaluate();
    }
}

export class TelVisitor implements DutchNumbersParserVisitor<ExpressionNode> {
    visit(tree: ParseTree): ExpressionNode {
        if (tree instanceof NumberContext) {
            return this.visitNumber(tree);
        } else {
            throw new Error('Unsupported parse tree node');
        }
    }

    visitNumber(ctx: NumberContext): ExpressionNode {
        let result: ExpressionNode = new ValueNode(0);

        if (ctx.whole_number()) {
            result = new AddNode(result, this.visitWhole_number(ctx.whole_number()));
        }

        return result;
    }

    visitWhole_number(ctx: Whole_numberContext): ExpressionNode {
        if (ctx.ones()) {
            return this.visitOnes(ctx.ones()!);  // Use the first element in the ones array
        } else if (ctx.tens()) {
            return this.visitTens(ctx.tens()!);
        } else if (ctx.hundreds()) {
            return this.visitHundreds(ctx.hundreds()!);
        } else if (ctx.thousands()) {
            return this.visitThousands(ctx.thousands()!);
        } else if (ctx.millions()) {
            return this.visitMillions(ctx.millions()!);
        } else if (ctx.billions()) {
            return this.visitBillions(ctx.billions()!);
        } else {
            throw new Error('Invalid whole_number context');
        }
    }

    visitOnes(ctx: OnesContext): ExpressionNode {
        if (ctx.ONE()) return new ValueNode(1);
        if (ctx.TWO()) return new ValueNode(2);
        if (ctx.THREE()) return new ValueNode(3);
        if (ctx.FOUR()) return new ValueNode(4);
        if (ctx.FIVE()) return new ValueNode(5);
        if (ctx.SIX()) return new ValueNode(6);
        if (ctx.SEVEN()) return new ValueNode(7);
        if (ctx.EIGHT()) return new ValueNode(8);
        if (ctx.NINE()) return new ValueNode(9);
        throw new Error('Invalid ones context');
    }

    visitTens(ctx: TensContext): ExpressionNode {
        if (ctx.TWENTY()) return new ValueNode(20);
        if (ctx.THIRTY()) return new ValueNode(30);
        if (ctx.FORTY()) return new ValueNode(40);
        if (ctx.FIFTY()) return new ValueNode(50);
        if (ctx.SIXTY()) return new ValueNode(60);
        if (ctx.SEVENTY()) return new ValueNode(70);
        if (ctx.EIGHTY()) return new ValueNode(80);
        if (ctx.NINETY()) return new ValueNode(90);
        if (ctx.TEN()) return new ValueNode(10);
        if (ctx.ELEVEN()) return new ValueNode(11);
        if (ctx.TWELVE()) return new ValueNode(12);
        if (ctx.THIRTEEN()) return new ValueNode(13);
        if (ctx.FOURTEEN()) return new ValueNode(14);
        if (ctx.FIFTEEN()) return new ValueNode(15);
        if (ctx.SIXTEEN()) return new ValueNode(16);
        if (ctx.SEVENTEEN()) return new ValueNode(17);
        if (ctx.EIGHTEEN()) return new ValueNode(18);
        if (ctx.NINETEEN()) return new ValueNode(19);
        if (ctx.TWO_PLURAL() && ctx.TWENTY()) return new AddNode(new ValueNode(2), new ValueNode(20));
        if (ctx.THREE_PLURAL() && ctx.THIRTY()) return new AddNode(new ValueNode(3), new ValueNode(30));
        throw new Error('Invalid tens context');
    }

    visitHundreds(ctx: HundredsContext): ExpressionNode {
        let value = ctx.HUNDRED() ? new ValueNode(100) : this.visitOnes(ctx.ones()!);
        if (ctx.HUNDRED()) {
            value = new MultiplyNode(value, new ValueNode(100));
            if (ctx.tens()) {
                value = new AddNode(value, this.visitTens(ctx.tens()!));
            }
        }
        return value;
    }

    visitThousands(ctx: ThousandsContext): ExpressionNode {
        let value = ctx.THOUSAND() ? new ValueNode(1000) : this.visitOnes(ctx.ones(0));
        if (ctx.THOUSAND()) {
            value = new MultiplyNode(value, new ValueNode(1000));
            if (ctx.hundreds()) {
                value = new AddNode(value, this.visitHundreds(ctx.hundreds()!));
            } else if (ctx.tens()) {
                value = new AddNode(value, this.visitTens(ctx.tens()!));
            } else if (ctx.ones()) {
                value = new AddNode(value, this.visitOnes(ctx.ones(0)));
            }
        }
        return value;
    }

    visitMillions(ctx: MillionsContext): ExpressionNode {
        let value = this.visitOnes(ctx.ones()!);
        if (ctx.MILLION()) {
            value = new MultiplyNode(value, new ValueNode(1000000));
            if (ctx.thousands()) {
                value = new AddNode(value, this.visitThousands(ctx.thousands()!));
            }
        }
        return value;
    }

    visitBillions(ctx: BillionsContext): ExpressionNode {
        let value = this.visitOnes(ctx.ones()!);
        if (ctx.BILLION()) {
            value = new MultiplyNode(value, new ValueNode(1000000000));
            if (ctx.millions()) {
                value = new AddNode(value, this.visitMillions(ctx.millions()!));
            }
        }
        return value;
    }

    visitChildren(node: RuleNode): ExpressionNode {
        let result = new ValueNode(0) as ExpressionNode;
        for (let i = 0; i < node.childCount; i++) {
            const child = node.getChild(i);
            result = new AddNode(result, this.visit(child));
        }
        return result;
    }

    visitTerminal(node: TerminalNode): ExpressionNode {
        return new ValueNode(0);
    }

    visitErrorNode(node: ErrorNode): ExpressionNode {
        throw new Error(`Error at node: ${node.text}`);
    }
}
