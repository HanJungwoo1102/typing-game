import Problem from '../problem';
import Result from './index';

const problem1 = new Problem({ second: 5, text: 'aaaa' });
const problem2 = new Problem({ second: 10, text: 'bbbb' });
const problem3 = new Problem({ second: 15, text: 'cccc' });

const problems = [problem1, problem2, problem3];

describe('result', () => {
  test('consturctor', () => {
    const result = new Result(problems.length);

    expect(result.getScore()).toBe(3);
    expect(result.getAvgTime()).toBe(0);
  });

  test('reulst add', () => {
    const result = new Result(problems.length);

    result.addRightResult(problem1, 3);

    expect(result.getAvgTime()).toBe(2);
    expect(result.getScore()).toBe(3);

    result.addRightResult(problem2, 5);

    expect(result.getAvgTime()).toBe(3.5);
    expect(result.getScore()).toBe(3);

    result.addRightResult(problem3, 7);

    expect(result.getAvgTime()).toBe(5);
    expect(result.getScore()).toBe(3);
  });

  test('reulst add wrong', () => {
    const result = new Result(problems.length);

    result.addWrontResult();

    expect(result.getAvgTime()).toBe(0);
    expect(result.getScore()).toBe(2);

    result.addWrontResult();

    expect(result.getAvgTime()).toBe(0);
    expect(result.getScore()).toBe(1);

    result.addWrontResult();

    expect(result.getAvgTime()).toBe(0);
    expect(result.getScore()).toBe(0);
  });

  test('initialize', () => {
    const result = new Result(problems.length);

    result.addRightResult(problem1, 3);
    result.addRightResult(problem2, 5);
    result.addRightResult(problem3, 7);
    
    result.initialize();

    expect(result.getScore()).toBe(3);
    expect(result.getAvgTime()).toBe(0);
  });
});