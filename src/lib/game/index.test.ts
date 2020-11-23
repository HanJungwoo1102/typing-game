import Game from './index';
import Problem from '../problem';

const problems = [
  new Problem({ text: 'aaaa', second: 5 }),
  new Problem({ text: 'bbbb', second: 10 }),
  new Problem({ text: 'cccc', second: 15 }),
]

describe('game', () => {
  test('consturctor', () => {
    const game = new Game({ problems });

    const problem = game.getCurrentProblem();

    expect(problem).toBe(undefined);
  });

  test('next problem', () => {
    const game = new Game({ problems });

    game.nextProblem();

    const problem1 = game.getCurrentProblem();

    expect(problem1.getText()).toBe('aaaa');
    expect(problem1.getSecond()).toBe(5);

    game.nextProblem();

    const problem2 = game.getCurrentProblem();

    expect(problem2.getText()).toBe('bbbb');
    expect(problem2.getSecond()).toBe(10);
  });

  test('has next problem', () => {
    const game = new Game({ problems });

    game.nextProblem();

    expect(game.hasNextProblem()).toBe(true);

    game.nextProblem();

    expect(game.hasNextProblem()).toBe(true);

    game.nextProblem();

    expect(game.hasNextProblem()).toBe(false);
  });

  test('is right', () => {
    const game = new Game({ problems });

    game.nextProblem();

    expect(game.isRight('aaaa')).toBe(true);
    expect(game.isRight('zzzz')).toBe(false);
  });
});