import Counter from './index';

describe('counter', () => {
  test('consturctor', () => {
    const counter = new Counter(10);
    expect(counter.getCount()).toBe(10);
  });

  test('set', () => {
    const counter = new Counter();
    counter.setCount(10);
    expect(counter.getCount()).toBe(10);
  });

  test('count down', () => {
    const counter = new Counter(10);

    counter.countDown();
    counter.countDown();
    counter.countDown();

    expect(counter.getCount()).toBe(7);
    expect(counter.isEnd()).toBe(false);
  });

  test('count end', () => {
    const counter = new Counter(3);

    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();

    expect(counter.isEnd()).toBe(true);
    expect(counter.getCount()).toBe(0);
  });
});