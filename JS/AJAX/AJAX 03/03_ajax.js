function loadData(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    //console.log('finished');
    
    const container = document.getElementById('demo');
    container.innerHTML = this.responseText;
    //console.log(this.getAllResponseHeaders());
    console.log(this.getResponseHeader('etag'));
    
  }
  xhr.open("GET",'data.txt',false);//true -> asyncronus //false->syncronus
  xhr.send();
  //console.log('Hello');
  
}
