let obj = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  },
  friend:{
    frd1:"doe",
    frd2:"Cho",
    frd2F:{
      f1:"Hho",
      f2:"Joo"
    }
  }
}
console.log(obj);
obj.greet();


