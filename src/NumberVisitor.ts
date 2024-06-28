import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DutchNumbersParserVisitor } from './grammar/generated/DutchNumbersParserVisitor';
import {
  NumberContext,
  Whole_numberContext,
  OnesContext,
  TensContext,
  HundredsContext,
  ThousandsContext,
  MillionsContext,
  BillionsContext,
} from './grammar/generated/DutchNumbersParser';

export class NumberVisitor extends AbstractParseTreeVisitor<number> implements DutchNumbersParserVisitor<number> {

  protected defaultResult(): number {
    return 0;
  }

  visitNumber(ctx: NumberContext): number {
    return this.visit(ctx.whole_number());
  }

  visitWhole_number(ctx: Whole_numberContext): number {
    if (ctx.ones()) {
      return this.visit(ctx.ones()!);
    } else if (ctx.tens()) {
      return this.visit(ctx.tens()!);
    } else if (ctx.hundreds()) {
      return this.visit(ctx.hundreds()!);
    } else if (ctx.thousands()) {
      return this.visit(ctx.thousands()!);
    } else if (ctx.millions()) {
      return this.visit(ctx.millions()!);
    } else if (ctx.billions()) {
      return this.visit(ctx.billions()!);
    } else {
      return 0;
    }
  }

  visitOnes(ctx: OnesContext): number {
    const text = ctx.text;
    switch (text) {
      case 'een': return 1;
      case 'twee': return 2;
      case 'drie': return 3;
      case 'vier': return 4;
      case 'vijf': return 5;
      case 'zes': return 6;
      case 'zeven': return 7;
      case 'acht': return 8;
      case 'negen': return 9;
      default: return 0;
    }
  }

  visitTens(ctx: TensContext): number {
    let base = 0;
    if (ctx.TWENTY()) base = 20;
    if (ctx.THIRTY()) base = 30;
    if (ctx.FORTY()) base = 40;
    if (ctx.FIFTY()) base = 50;
    if (ctx.SIXTY()) base = 60;
    if (ctx.SEVENTY()) base = 70;
    if (ctx.EIGHTY()) base = 80;
    if (ctx.NINETY()) base = 90;
    if (ctx.TEN()) base = 10;
    if (ctx.ELEVEN()) base = 11;
    if (ctx.TWELVE()) base = 12;
    if (ctx.THIRTEEN()) base = 13;
    if (ctx.FOURTEEN()) base = 14;
    if (ctx.FIFTEEN()) base = 15;
    if (ctx.SIXTEEN()) base = 16;
    if (ctx.SEVENTEEN()) base = 17;
    if (ctx.EIGHTEEN()) base = 18;
    if (ctx.NINETEEN()) base = 19;

    const onesValue = ctx.ones() ? this.visit(ctx.ones()!) : 0;

    if (ctx.TWO_PLURAL()) {
      return base + 2;
    } else if (ctx.THREE_PLURAL()) {
      return base + 3;
    }
    return onesValue + base;
  }

  visitHundreds(ctx: HundredsContext): number {
    const base = ctx.ones() ? this.visit(ctx.ones(0)) * 100 : 100;
    const rest = ctx.ones(1) ? this.visit(ctx.ones(1)) :
                 ctx.tens() ? this.visit(ctx.tens(0)) : 0;
    return base + rest;
  }

  visitThousands(ctx: ThousandsContext): number {
    const base = ctx.ones() ? this.visit(ctx.ones(0)) * 1000 : 1000;
    const rest = ctx.ones(1) ? this.visit(ctx.ones(1)) :
                 ctx.tens() ? this.visit(ctx.tens(0)) :
                 ctx.hundreds() ? this.visit(ctx.hundreds(0)) : 0;
    return base + rest;
  }

  visitMillions(ctx: MillionsContext): number {
    const base = ctx.ones() ? this.visit(ctx.ones(0)) * 1000000 : 1000000;
    const rest = ctx.ones(1) ? this.visit(ctx.ones(1)) :
                 ctx.tens() ? this.visit(ctx.tens(0)) :
                 ctx.hundreds() ? this.visit(ctx.hundreds(0)) : 0;
    return base + rest;
  }

  visitBillions(ctx: BillionsContext): number {
    const base = ctx.ones() ? this.visit(ctx.ones(0)) * 1000000000 : 1000000000;
    const rest = ctx.ones(1) ? this.visit(ctx.ones(1)) :
                 ctx.tens() ? this.visit(ctx.tens(0)) :
                 ctx.hundreds() ? this.visit(ctx.hundreds(0)) :
                 ctx.thousands() ? this.visit(ctx.thousands(0)) : 0;
    return base + rest;
  }
}
