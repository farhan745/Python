let x;
try{
    x = 5/0;
   if (x===Infinity){
    throw {
      message:"Error",
      name:"ZeroDivisionError"
    };
   }
   else{
    console.log(x);
   }
}
catch(err){
  console.log(err);
}
finally{
  console.log("Finally block executed");
}

//Range Error
let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  console.log(err.name);
  
}

//Reference error
let x1 = 5;
try {
  x1 = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  console.log();
  
}

