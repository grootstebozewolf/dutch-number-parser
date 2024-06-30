/**
 * Dutch Number Parser
 * 
 * Licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
 * You may obtain a copy of the License at https://creativecommons.org/licenses/by-sa/4.0/
 */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DutchNumbersVisitor } from './grammar/generated/DutchNumbersVisitor';
import { DutchNumbersLexer } from './grammar/generated/DutchNumbersLexer';
import {
  NumberContext,
  Whole_numberContext,
  OnesContext,
  TensContext,
  HundredsContext,
  ThousandsContext,
  MillionsContext,
  BillionsContext,
  TriljonsContext,
  QuadrilionsContext,
  QuintilionsContext,
  SextilionsContext
} from './grammar/generated/DutchNumbers';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

export class TelVisitor extends AbstractParseTreeVisitor<number> implements DutchNumbersVisitor<number> {
  protected defaultResult() {
    return 0;
  }

  visitNumber(ctx: NumberContext): number {
    return this.visit(ctx.whole_number());
  }

  visitWhole_number(ctx: Whole_numberContext): number {
    if (ctx.ones()) return this.visit(ctx.ones()!);
    if (ctx.tens()) return this.visit(ctx.tens()!);
    if (ctx.hundreds()) return this.visit(ctx.hundreds()!);
    if (ctx.thousands()) return this.visit(ctx.thousands()!);
    if (ctx.millions()) return this.visit(ctx.millions()!);
    if (ctx.billions()) return this.visit(ctx.billions()!);
    if (ctx.triljons()) return this.visit(ctx.triljons()!);
    if (ctx.quadrilions()) return this.visit(ctx.quadrilions()!);
    if (ctx.quintilions()) return this.visit(ctx.quintilions()!);
    if (ctx.sextilions()) return this.visit(ctx.sextilions()!);
    return 0;
  }

  visitOnes(ctx: OnesContext): number {
    return this.getValueFromTerminal(ctx.getChild(0) as TerminalNode) || 0;
  }

  visitTens(ctx: TensContext): number {
    let result = 0;
    let ones = 0;
    let tens = 0;
  
    for (let i = 0; i < ctx.childCount; i++) {
      const child = ctx.getChild(i);
      if (child instanceof TerminalNode) {
        const value = this.getValueFromTerminal(child);
        if (value !== null) {
          if (value >= 20) {
            tens = value;
          } else if (value < 10) {
            ones = value;
          } else {
            result = value;
          }
        }
      } else if (child instanceof OnesContext) {
        ones = this.visit(child);
      }
    }
  
    if (result === 0) {
      result = tens + ones;
    }
  
    return result;
  }

  visitHundreds(ctx: HundredsContext): number {
    let result = 0;
    for (let i = 0; i < ctx.childCount; i++) {
      const child = ctx.getChild(i);
      if (child instanceof TerminalNode) {
        const value = this.getValueFromTerminal(child);
        if (value !== null) {
          result = result === 0 ? value : result * value;
        }
      } else {
        result += this.visit(child);
      }
    }
    return result;
  }

  visitThousands(ctx: ThousandsContext): number {
    let result = 0;
    let multiplier = 1;
    for (let i = 0; i < ctx.childCount; i++) {
      const child = ctx.getChild(i);
      if (child instanceof TerminalNode) {
        const value = this.getValueFromTerminal(child);
        if (value === 1000) {
          result = (result === 0 ? 1 : result) * value;
        } else if (value !== null) {
          multiplier *= value;
        }
      } else {
        result += this.visit(child);
      }
    }
    return result * multiplier;
  }
  
  visitMillions(ctx: MillionsContext): number {
    let result = 0;
    let multiplier = 1;
    
    for (let i = 0; i < ctx.childCount; i++) {
      const child = ctx.getChild(i);
      if (child instanceof TerminalNode) {
        const value = this.getValueFromTerminal(child);
        if (value === 1000000) {
          result = (result === 0 ? 1 : result) * value;
        } else if (value !== null) {
          multiplier *= value;
        }
      } else {
        const childValue = this.visit(child);
        if (result === 0) {
          result = childValue;
        } else {
          result += childValue;
        }
      }
    }
    
    return result * multiplier;
  }

  visitBillions(ctx: BillionsContext): number {
    let result = 0;
    let multiplier = 1;
    
    for (let i = 0; i < ctx.childCount; i++) {
      const child = ctx.getChild(i);
      if (child instanceof TerminalNode) {
        const value = this.getValueFromTerminal(child);
        if (value === 1000000000) {
          result = (result === 0 ? 1 : result) * value;
        } else if (value !== null) {
          multiplier *= value;
        }
      } else {
        const childValue = this.visit(child);
        if (result === 0) {
          result = childValue;
        } else {
          result += childValue;
        }
      }
    }
    
    return result * multiplier;
  }

  visitTriljons(ctx: TriljonsContext): number {
    let result = 1000000000000;
    for (let i = 0; i < ctx.childCount; i++) {
      const child = ctx.getChild(i);
      if (child instanceof TerminalNode) {
        const value = this.getValueFromTerminal(child);
        if (value !== null && value !== 1000000000000) {
          result *= value;
        }
      } else {
        result += this.visit(child);
      }
    }
    return result;
  }

  visitQuadrilions(ctx: QuadrilionsContext): number {
    let result = 1000000000000000;
    for (let i = 0; i < ctx.childCount; i++) {
      const child = ctx.getChild(i);
      if (child instanceof TerminalNode) {
        const value = this.getValueFromTerminal(child);
        if (value !== null && value !== 1000000000000000) {
          result *= value;
        }
      } else {
        result += this.visit(child);
      }
    }
    return result;
  }

  visitQuintilions(ctx: QuintilionsContext): number {
    let result = 1000000000000000000;
    for (let i = 0; i < ctx.childCount; i++) {
      const child = ctx.getChild(i);
      if (child instanceof TerminalNode) {
        const value = this.getValueFromTerminal(child);
        if (value !== null && value !== 1000000000000000000) {
          result *= value;
        }
      } else {
        result += this.visit(child);
      }
    }
    return result;
  }

  visitSextilions(ctx: SextilionsContext): number {
    let result = 1000000000000000000000;
    for (let i = 0; i < ctx.childCount; i++) {
      const child = ctx.getChild(i);
      if (child instanceof TerminalNode) {
        const value = this.getValueFromTerminal(child);
        if (value !== null && value !== 1000000000000000000000) {
          result *= value;
        }
      } else {
        result += this.visit(child);
      }
    }
    return result;
  }

  // Convert terminal nodes to their corresponding numerical values
  private getValueFromTerminal(node: TerminalNode): number | null {
    const type = node.symbol.type;
    if (type >= DutchNumbersLexer.ONE && type <= DutchNumbersLexer.SEXTILION) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 1000000, 1000000000,
              1000000000000, 1000000000000000, 1000000000000000000, 1000000000000000000000][type - DutchNumbersLexer.ONE];
    }
    return null;
  }
}