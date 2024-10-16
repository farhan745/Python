let ele = document.getElementById('demo');
let ele1 = document.getElementById('demo1');
let ele2 = document.getElementById('demo2');
ele.addEventListener('mouseover',()=>{
  console.log('Hello, World!');
})
ele.addEventListener('click',()=>{
  alert('Shit! It is Click');
})
ele1.addEventListener('click',myFun)
let myFun=()=>{
  console.log(`Button clicked: `);
}
ele1.removeEventListener('click',myFun)