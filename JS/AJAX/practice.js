function sendRequest(method,url,data){
  let promise = new Promise((resolve,reject)=>{
    const xhr= new XMLHttpRequest();
    xhr.onload = function(){
      resolve(JSON.parse(this.responseText));
    };
    xhr.onerror=function(){
      reject(new Error("Request failed"));
    }
    xhr.open(method,url);
    xhr.send(data);
  })
  return promise;
}

function getData(){
  sendRequest("POST",'https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
    
  })
}
function sendData(){
  
}
const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
getButton.addEventListener("click", sendData);