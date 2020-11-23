import Problem from '../problem';
import Result from './index';

const problem1 = new Problem({ second: 5, text: 'aaaa' });
const problem2 = new Problem({ second: 10, text: 'bbbb' });
const problem3 = new Problem({ second: 15, text: 'cccc' });

describe('result', () => {
  test('consturctor', () => {
    const result = new Result();

    expect(result.getScore()).toBe(0);
    expect(result.getAvgTime()).toBe(0);
  });

  test('reulst add', () => {
    const result = new Result();

    result.add(problem1, 3);

    expect(result.getAvgTime()).toBe(2);
    expect(result.getScore()).toBe(1);

    result.add(problem2, 5);

    expect(result.getAvgTime()).toBe(3.5);
    expect(result.getScore()).toBe(2);

    result.add(problem3, 7);

    expect(result.getAvgTime()).toBe(5);
    expect(result.getScore()).toBe(3);
  });

  test('initialize', () => {
    const result = new Result();

    result.add(problem1, 3);
    result.add(problem2, 5);
    result.add(problem3, 7);
    
    result.initialize();

    expect(result.getAvgTime()).toBe(0);
    expect(result.getScore()).toBe(0);
  });
});