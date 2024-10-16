const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Add a Property
 Object.defineProperty(person, "year", {value:"2008"});
console.log(person.year);
Object.defineProperty(person, "language", {value : "NO"});
console.log(person.language);
console.log((Object.getOwnPropertyNames(person)));

//Practice
// Define an Object
const obj = {counter:0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 10;
obj.subtract = 1;
obj.increment;
obj.decrement;

console.log(obj.counter); // Output: 4