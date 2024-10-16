let payment = true;
function enroll(){
  console.log("Course enrollment is in progress!");
  let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (payment){ //payment is true it's work
        resolve();
      } else{
        reject("Payment failed. Course enrollment aborted.");
      }
    },2000)
  })
  return promise;
}
function progress(marks){
  console.log("Course on Progress");
  let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if(marks>80){
      resolve('Congrates');
    }
    else{
      reject("Marks not reached. Course progress aborted.");
    }
  },3000)  
})
  return promise;
}
function certificate(){
  console.log("Prepareing your Certificate!");
  let promise = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("Congratulations! Certificate is ready.");
  },1000)
})
  return promise;
}

enroll()
 .then(progress(90))
 .then(certificate)
 .then((value)=>{       //When all is succesfull its work 
   console.log(value);
 })
 .catch(error=>console.error(error))

