/*
print rondomly in 1-10
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log( getRandomNumber(1, 10) );
*/

let a = [1,2,3,4,5,6,7,8,9,10,11,12]
let d = a.filter(function (Value) {
  return Value%2==0
})
console.log(d);
