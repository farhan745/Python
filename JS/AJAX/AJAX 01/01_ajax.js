function loadData(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    const container = document.getElementById('demo');
    container.innerHTML = xhr.responseText;
  }
  xhr.open("GET",'data.txt');
  xhr.send();
}