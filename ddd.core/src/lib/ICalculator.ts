export interface ICalculator {
    multiply(a: number, b: number): Promise<number>;
    sum(a: number, b: number): Promise<number>;
  }