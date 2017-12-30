// Abstract Factory

function RedColor() {}
RedColor.prototype.create = function () {
  this.color = '#ff0000';
  return this;
}

function GreenColor() {}
GreenColor.prototype.create = function () {
  this.color = '#00ff00';
  return this;
}

function BlueColor() {}
BlueColor.prototype.create = function () {
  this.color = '#0000ff';
  return this;
}

var AbstractFactoryGenerator = function() {
  this.types = {};

  this.create = function(type) {
    if (this.types[type]) {
      return new this.types[type]().create();
    } else {
      console.error(type, "type doesn't exist!");
    }
  }

  this.register = function(type, cls) {
    if (cls.prototype.create) {
      this.types[type] = cls;
    }
  }
};


// ===========

console.log('\ncreate abstarct factory');
var colorFactory = new AbstractFactoryGenerator();

console.log('\nregister RED', colorFactory);
colorFactory.register('red', RedColor);

console.log('create red color obj', colorFactory.create('red'));

console.log('\nregister GREEN', colorFactory);
colorFactory.register('green', GreenColor);

console.log('create green color obj', colorFactory.create('green'));

console.log('create yellow color obj', colorFactory.create('yellow'));
