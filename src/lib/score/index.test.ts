import Score from './index';

describe('score', () => {
  test('consturctor', () => {
    const score = new Score({ score: 10 });

    expect(score.getScore()).toBe(10);
  });

  test('wrong', () => {
    const score = new Score({ score: 10 });

    score.wrong();

    expect(score.getScore()).toBe(9);

    score.wrong();

    expect(score.getScore()).toBe(8);

    score.wrong();

    expect(score.getScore()).toBe(7);
  });

  test('initialize', () => {
    const score = new Score({ score: 10 });

    score.wrong();
    score.wrong();
    score.wrong();
    score.initialize();

    expect(score.getScore()).toBe(10);
  });
});