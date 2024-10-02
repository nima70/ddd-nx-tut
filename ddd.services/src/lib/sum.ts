import { ISum } from 'ddd.core';
import { injectable } from 'inversify';
import 'reflect-metadata';
@injectable()
export class Sum implements ISum {
  async sum(a: number, b: number): Promise<number> {
    return a + b;
  }
}