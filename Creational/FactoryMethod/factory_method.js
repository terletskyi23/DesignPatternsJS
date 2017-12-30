// Factory Method

var RedColor = function() { this.color = '#ff0000'; },
    GreenColor = function() { this.color = '#00ff00'; },
    BlueColor = function() { this.color = '#0000ff'; };

var FactoryGenerator = function() {
  this.create = function(color) {
    var uColor = color.toUpperCase();

    switch(uColor) {
      case 'RED':
        return new RedColor();
      case 'GREEN':
        return new GreenColor();
      case 'BLUE':
        return new BlueColor();
    }
  }
};


// ===========

console.log('\ncreate factory');
var colorFactory = new FactoryGenerator();

console.log('create red color obj', colorFactory.create('REd'));
console.log('create green color obj', colorFactory.create('Green'));
console.log('create blue color obj', colorFactory.create('BLUE'));
