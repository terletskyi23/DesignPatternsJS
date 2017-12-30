// Singleton

var SingletonGenerator = (function() {
  var instance;

  function init() {
    var value = 0;

    // make some methods
    function method() {
      console.log('do something.. ');
      // ...
    }

    function getValue() {
      console.log('value = ', value);

      return value;
    }

    function randomIncrease() {
      value += _generaterRandomNumber();
    }

    // private method
    function _generaterRandomNumber() {
      var startNumber = 1,
          endNumber = 9;

      var rn = Math.floor(Math.random() * endNumber) + startNumber;
      console.log('random number = ', rn);

      return rn;
    }

    return {
      getValue: getValue,
      randomIncrease: randomIncrease,
      /* whatever */
      method: method,
    };
  }

  return {
    getInstance: function() {
      if(!instance) { instance = init(); }

      return instance;
    }
  }
});


// ===========

console.log('\ncreate singleton instance');
var singletonInstance = SingletonGenerator().getInstance();
singletonInstance.getValue()

console.log('increase the value on the random number');
singletonInstance.randomIncrease()
singletonInstance.getValue();

console.log('and one more time');
singletonInstance.randomIncrease()
singletonInstance.getValue();

console.log('\ncreate again');
var secondSingletonInstance = SingletonGenerator().getInstance();
console.log('still have the same instance with the same data!');
singletonInstance.getValue();
