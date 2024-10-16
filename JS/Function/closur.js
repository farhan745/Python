function add1() {
  let counter = 0;
  return function () {
    counter += 1;
   
  };
};
const add = add1();
console.dir(add);

add();

