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