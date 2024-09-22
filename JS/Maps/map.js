//Maps
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits);
//Maps->Set
let f = new Map();
f.set("Jackfruits", 500);
f.set("Mangoes", 700);
f.set("Lemons", 400);

console.log(f);
//Size

console.log("Size: " + f.size);

//Delete

f.delete("Jackfruits");
console.log("Delete Jackfruits: ");
console.log(f);

//Has()

console.log("Has Mangoes: " + f.has("Mangoes"));
console.log("Has Bananas: " + f.has("Bananas"));

f.forEach((value, key) => {
  console.log(key, value);
});

for (let x of f.entries()) {
  console.log(x);
}
