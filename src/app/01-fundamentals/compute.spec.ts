import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if input is negative', () => {
    let result = compute(-1);
    expect(result).toBe(0);

    result = compute(-2);
    expect(result).not.toBe(-1);
  });

  it('should increment input by 1 if input is positive', () => {
    let result = compute(1);
    expect(result).toBe(2);

    result = compute(344);
    expect(result).toBe(345);

  });
});
