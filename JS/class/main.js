class Car{
  constructor(name,year){
    this.name = name;
    this.year = year;
  }
  why(name){
    console.log(`${this.name} is a ${name} car.`);
  }
}

const car1 = new Car('Toyota',1937);  
const car2 = new Car('BMW',2018);  
const car3 = new Car('Suzuki',1998);  
    console.log(car1); 
    console.log(car2); 
    console.log(car3); 
    car2.why('Kala');//Method
