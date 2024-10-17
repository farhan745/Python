const display = document.getElementById('display');

//Promise
function getData(){
  fetch("http://127.0.0.1:5500/JS/API/Fetch%20API/data.txt")
  .then((res)=> {return res.text()})
  .then ((data)=>{
    display.innerText = data;
  });

}
/*
  //Async/Await
async function getData(){
  try{
    const response = await fetch("http://127.0.0.1:5500/JS/API/Fetch%20API/data.txt");
    const data = await response.text();
    display.innerText = data;
  } catch(error){
    console.error('Error:', error);
  }
}

*/