class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello!!"+x;
  }
}

const myCar = new Car("Ford");
console.log(Car.hello(myCar));
