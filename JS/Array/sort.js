/*
//Assending Sort
let arr = [40,1,100,1,5,25,10];
arr.sort(function(a,b){return a-b});

console.log(arr);
//Desending Sort
arr = [40,100,1,5,40,25,10];
arr.sort(function(a,b){return b-a});

console.log(arr);
*/
//forEach

let arr2 = [40,1,100,1,5,25,10];
arr2.forEach(function(element){
    console.log(element);
});
//Reduce
let arr1=arr2.reduce((elements,element)=>{
  return elements + element;
})

console.log(`Total: ${arr1}`);

//Every -> true and false
let arr3 = arr2.every((elements)=>{
  return elements > 0;
})
console.log(`All elements  bigger then 0: ${arr3}`)
//indexOf

let arr4 = [40,1,100,1,5,25,10];
console.log(`Index: ${arr4.indexOf(100)}`);

//Filter

let arr5 = [100,2,3,21,35,60,10,21].filter((elements)=>{
  return elements > 10;
})
console.log(`Filtered: ${arr5}`)

