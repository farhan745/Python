let set1 = new Set([1,2,3,9,8,1,"a","b","a"]);
console.log(set1);
set1.add('Why');
console.log(set1);

//Set Method
answer = set1.has('b');
console.log(`Answer: ${answer}`);

 //for Each
 set1.forEach((value) => {
  console.log(value);
});