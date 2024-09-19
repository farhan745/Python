function Person(first, last, age, eye) {
  this.firstN = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather =new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");
console.log(myFather);
function Person1(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function(as) {
    return this.firstName + " " + this.lastName+" "+as
  };
}

// Create a Person object
const myFather1 = new Person1("John2", "Doe2", 90, "blue");
console.log(myFather1);
console.log(myFather1.fullName(80));

