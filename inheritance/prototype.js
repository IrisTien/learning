function Car() {
  this.name = 'Car';
  this.wheels = 4;
}

function Truck() {
  this.container = true;
}

Truck.prototype = new Car();

const truck1 = new Truck();
console.log(truck1.name);