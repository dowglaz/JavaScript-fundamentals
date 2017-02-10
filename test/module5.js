const expect = require('chai').expect;

let module5;

if (process.argv.includes('--cheat')) {
  module5 = require('../lib/solutions/module5.js');
} else {
  module5 = require('../lib/module5.js');
}

const solution1 = module5.exercise1();
const solution2 = module5.exercise2();

// Tests
describe('Module5/Exercise1', function () {
  it('Should return counter value through #getValue', function () {
    const counter = new solution1.Counter(0);
    expect(counter.getValue()).to.be.eq(0);
  });
});

describe('Module5/Exercise2', function () {
  it('Should increment values through #increment', function () {
    const counterA = new solution2.Counter(0);
    const counterB = new solution2.Counter(10);

    counterA.increment();
    expect(counterA.getValue()).to.be.eq(1);

    counterB.increment();
    expect(counterB.getValue()).to.be.eq(11);
  });

  it('Should increment values through #decrement', function () {
    const counterA = new solution2.Counter(0);
    const counterB = new solution2.Counter(10);

    counterA.decrement();
    expect(counterA.getValue()).to.be.eq(-1);

    counterB.decrement();
    expect(counterB.getValue()).to.be.eq(9);
  });
});
