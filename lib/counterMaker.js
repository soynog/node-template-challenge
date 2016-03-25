'use strict';

// Creates counter objects, each of which has two methods:
// getCurrent(), which returns the current counter value without incrementing, and
// tick(), which increments the counter and returns its new value.
const counterMaker = function(startVal,increment) {
  return {
    count: startVal || 0,
    increment: increment || 1,
    getCurrent: function() {
      return this.count;
    },
    tick: function(x) {
      x = x || 1;
      for (var i = 0; i < x; i++) {
        this.count += this.increment;
      }
      return this.count;
    }
  };
};

module.exports = counterMaker;
