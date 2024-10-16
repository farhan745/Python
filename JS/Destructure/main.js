let person={
  firstName:"John Doe",
  lastName:"Smith",
  age:30,
  address:{
    street:"123 Main St",
    city:"New York",
    state:"NY",
    build:{
      number:123,
      floor:2,
      room:101
    }
  }
}

//console.log(person);
//destructuring
let {firstName,lastName,address:{street,city,build:{number,floor,room}}} = person;//-
console.log(room);

//Array
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2,fruit3] = fruits;

console.log(fruit1,fruit2,fruit3);

let {[0]:f1,[2]:f3,[3]:f4}=fruits;
console.log(f1,f3,f4);

