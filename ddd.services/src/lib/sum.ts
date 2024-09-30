import { ISum } from 'ddd.core';

export class Sum implements ISum {
  async sum(a: number, b: number): Promise<number> {
    return a + b;
  }
}