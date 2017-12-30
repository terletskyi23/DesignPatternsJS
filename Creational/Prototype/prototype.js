// Prototype

// 1
//
// function clone(src, out) {
//   for (var attr in src.protoype) {
//     out.prototype[attr] = src.prototype[attr];
//   }
// }

// 2
//
function CustomerPrototype(proto) {
  this.proto = proto;

  this.clone = function () {
    var customer = new Customer();

    customer.name = proto.name;
    customer.lastName = proto.lastName;
    customer.status = proto.status;

    return customer;
  };
}

function Customer(name, lastName, status) {
  this.name = name;
  this.lastName = lastName;
  this.status = status;

  this.info = function () {
    console.log('INFO: name: ' + this.name + ' ' + this.lastName + ', status: ' + this.status);
  };
}


// ===========

console.log('\n= PROTOTYPE =');
console.log('\ninit proto obj');
var proto = new Customer('Vasyl', 'Terletskyi', 'pending');
console.log('make prototype');
var prototype = new CustomerPrototype(proto);

console.log('clone new object');
var customer = prototype.clone();
customer.info();
