/*Join Array*/

let arr = ["a", "b", "c", "d", "e", "f", "g"];
let as = arr.join("*");

console.log(as); // Output: a*b*c*d*e*f*g
/*Pop Array*/
arr.pop();

console.log(arr); // Output: a*b*c*d*e*f
/*Push Array*/
arr.push("a");
console.log(arr); // Output: a*b*c*d*e*f*a

/*Shift Array-> First elements Remove*/

arr.shift();

console.log(arr); // Output: b*c*d*e*f*a

/*Unshift Array - > insert 1st element*/

arr.unshift("z");

console.log(arr); // Output: z*b*c*d*e*f*a

/*Slice Array*/

let slicedArr = arr.slice(1, 4);

console.log(slicedArr); // Output: b*c*d

/*Splice Array*/

as=arr.splice(1, 3, "x", "y", "z");

console.log(as); // Output: z*x*y*d

/*Reverse Array*/
as =[1,2,3,4,5]
as.reverse();

console.log(as); // Output: d*y*x*z*b

/*Sort Array*/

as = [1,5,3,2,4]
as.sort();

console.log(as); // Output: 1*2*3*4*5
