module.exports.exercise1 = function exercise1() {
  let __value_ = 0;
  const Counter = function(value) {
    __value_ = value;
  }

  Counter.prototype.getValue = function () {
    return __value_;
  };

  return { Counter };
};

module.exports.exercise2 = function exercise2() {
  let __value_ = 0;
  const Counter = function(value) {
    __value_ = value;
  }

  Counter.prototype.getValue = function () {
    return __value_;
  };

};
