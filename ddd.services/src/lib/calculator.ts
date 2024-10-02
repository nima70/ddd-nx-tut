import { ICalculator, IMultiply, ISum } from 'ddd.core';
import { injectable, inject } from 'inversify';
import { TYPES } from 'ddd.core';
import 'reflect-metadata';
@injectable()
export class Calculator implements ICalculator {
  private _multiply: IMultiply;
  private _sum: ISum;
  constructor(
    @inject(TYPES.IMultiply) multiply: IMultiply,
    @inject(TYPES.ISum) sum: ISum
  ) {
    this._multiply = multiply;
    this._sum = sum;
  }
  async multiply(a: number, b: number): Promise<number> {
    return this._multiply.multiply(a, b);
  }
  async sum(a: number, b: number): Promise<number> {
    return this._sum.sum(a, b);
  }
}
