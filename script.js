const num = document.getElementsByClassName('num');
const numArray = Array.from(num);

const ops = document.getElementsByClassName('ops');
const opsArray = Array.from(ops);

numArray.forEach((number) => {
  number.addEventListener('click', () => {
    console.log(number.innerHTML);
  });
});

opsArray.forEach((op) => {
  op.addEventListener('click', () => {
    console.log(op.innerHTML);
  });
});
