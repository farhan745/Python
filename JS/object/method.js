/*let person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // Output: John Doe
let person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};

// Add a Method
person1.name= function() {
  return this.firstName + " " + this.lastName;
};
console.log(person1.name())
*/
let fruits = {Bananas:300, Oranges:200, Apples:500}; 
go(fruits)
function go(fruits){
for (let [x,y] of Object.entries(fruits)){
  console.log(x,y);
}
}
console.log(Object.keys(fruits));
console.log(Object.values(fruits));
// Create Target Object
//ASSIGN
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};
let obj1=Object.assign(person1, person2);
console.log(obj1);
console.log(`Entries: ${Object.entries(person1)}`);//Entris -> key & value

const fruits1 = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits1);

console.log(`fromEntris: ${myObj}`);

