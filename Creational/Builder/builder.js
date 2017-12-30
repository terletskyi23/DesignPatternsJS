// Builder

function Garage() {
    this.construct = function(builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

// It's better to have the Main Builder than we can extend him by crete the new concrete builder.
// but.. --\_('_')_/--
function CarBuilder() {
    this.car = null;

    this.step1 = function() {
        this.car = new Car();
    };

    this.step2 = function() {
        this.car.addParts();
    };

    this.get = function() {
        return this.car;
    };
}

function TruckBuilder() {
    this.truck = null;

    this.step1 = function() {
        this.truck = new Truck();
    };

    this.step2 = function() {
        this.truck.addParts();
    };

    this.get = function() {
        return this.truck;
    };
}

// And of course we can have just only one big class(Machine for example)
// and set different params using the concrete builder
function Car() {
    this.doors = 0;

    this.addParts = function() {
        this.doors = 4;
    };

    this.info = function() {
        console.log("I am a " + this.doors + "-door car");
    };
}

function Truck() {
    this.doors = 0;

    this.addParts = function() {
        this.doors = 2;
    };

    this.info = function() {
        console.log("I am a " + this.doors + "-door truck");
    };
}


// ===========

console.log('\n= BUILDER =');
var garage = new Garage();

console.log('\ninit builders');
var carBuilder = new CarBuilder(),
    truckBuilder = new TruckBuilder();

console.log('create objects using builders');
var car = garage.construct(carBuilder),
    truck = garage.construct(truckBuilder);

console.log('\nthe new car');
car.info();
console.log('\nthe new truck');
truck.info();
