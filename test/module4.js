const expect = require('chai').expect;

let module4;

if(process.argv.includes('--cheat')) {
  module4 = require('../lib/solutions/module4.js');
} else {
  module4 = require('../lib/module4.js');
}

const solution1 = module4.exercise1();
const solution2 = module4.exercise2();

// Shared
const doHumanTests = function (Human) {
  it('should have name', function () {
    expect(Human).to.have.property('name');
  });

  it('should have age', function (Human) {
    expect(Human).to.have.property('age');
  });
};

// Tests
describe('Module4/Exercise1', function () {
  describe('Human', function() {
    doHumanTests(solution1.Human);
  });
});

describe('Module4/Exercise2', function () {
  describe('SuperHuman', function () {
    doHumanTests(solution2.SuperHuman);

    it('should have a powerType', function () {
      expect(solution2.SuperHuman).to.have.property('powerType');
    });

    it('should have a strength', function () {
      expect(solution2.SuperHuman).to.have.property('strength');
    });
  });
});

describe('Module4/Exercise3', function () {

});

describe('Module4/Exercise4', function () {

});

describe('Module4/Exercise5', function () {

});

describe('Module4/Exercise6', function () {

});

describe('Module4/Exercise7', function () {

});
