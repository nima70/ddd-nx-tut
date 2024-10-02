import { injectable } from 'inversify';
import { IMultiply } from 'ddd.core';
import 'reflect-metadata';

@injectable()
export class Multiply implements IMultiply {
  async multiply(a: number, b: number): Promise<number> {
    return a * b;
  }
}