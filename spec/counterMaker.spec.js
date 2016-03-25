'use strict';

var counterMaker = require('../lib/counterMaker.js');

describe('Creates a functioning counter', () => {
  it('Creates a counter object', () => {
    let counter = counterMaker();
    expect(typeof counter).toBe('object');
  });
  it('getCurrent() on a new counter returns 0', () => {
    let counter = counterMaker();
    expect(counter.getCurrent()).toBe(0);
  });
  it('tick() on a new object returns 1', () => {
    let counter = counterMaker();
    expect(counter.tick()).toBe(1);
  });
  it('after tick()ing 3 times, getCurrent returns 3', () => {
    let counter = counterMaker();
    counter.tick();
    counter.tick();
    counter.tick();
    expect(counter.getCurrent()).toBe(3);
  });
  it('multiple counters do not interfere with each other', () => {
    let counter1 = counterMaker();
    let counter2 = counterMaker();
    counter1.tick();
    counter2.tick();
    counter2.tick();
    counter1.tick();
    expect(counter2.getCurrent()).toBe(counter1.getCurrent());
  });
});

describe('Optional arguments work properly', () => {
  it('Sets the count on a new Counter to startVal', () => {
    let counter = counterMaker(30);
    expect(counter.getCurrent()).toBe(30);
  });
  it('Ticks by the amount passed as increment', () => {
    let counter = counterMaker(0,5);
    counter.tick();
    counter.tick();
    expect(counter.getCurrent()).toBe(10);
  });
});

describe('Tick function times parameter functions properly', () => {
  it('Ticks 100 times if passed 100 as an argument', () => {
    let counter = counterMaker();
    counter.tick(100);
    expect(counter.getCurrent()).toBe(100);
  });
});
