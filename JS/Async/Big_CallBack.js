let payment = true;
function enroll(callback){
  console.log("Course enrollment is in progress!");
  setTimeout(()=>{
    if (payment){ //payment is true it's work
      callback();
    }else{
      console.log("Payment failed. Course enrollment aborted.");
    }
  },2000)
}
function progress(callback,marks){
  console.log("Course on Progress");
  setTimeout(()=>{
    if(marks>80){
      callback();
    }
    else{
      console.log("Marks not reached. Course progress aborted.");
    }
  },3000)  
}
function certificate(){
  console.log("Prepareing your Certificate!");
  setTimeout(()=>{
    console.log("Congratulations! Certificate is ready.");
  })
  
}

enroll(()=>{
  progress(()=>{
    certificate();  //callback function of progress function when marks reached 80%
  },81)
})