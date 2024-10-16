function display(some){
  console.log(some);
  
}
function calculator(a,b,callback){
let sum = a+b;
callback(sum);
}

calculator(2,3,display);