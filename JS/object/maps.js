
let x = new Map([
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York']
])
x.set('nationality','English')
console.log(x);
let x1=x.has('name');

console.log(x1);

function test(x){
  console.log(x);
}
let x4 = [1,2,3,4];
test(x4);