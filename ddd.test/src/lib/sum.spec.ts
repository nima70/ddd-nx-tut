import { ISum } from 'ddd.core';
import { Sum } from 'ddd.services';

describe('Sum', () => {
  it('should sum', async () => {
    const sum: ISum = new Sum();
    const result = await sum.sum(1, 2);
    expect(result).toBe(3);
  });
});