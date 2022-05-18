const num = document.getElementsByClassName('num');
const numArray = Array.from(num);
const clear = document.getElementById('clear');
const ops = document.getElementsByClassName('ops');
const opsArray = Array.from(ops);
const viewer = document.getElementById('viewer');
let result = 0;
let currentOp;
let firstNumber;
let secondNumber = 0;

opsArray.forEach((op) => {
  op.addEventListener('click', () => {
    console.log(op.textContent);
    viewer.textContent += op.textContent;
    currentOp = op.textContent;
  });
});

numArray.forEach((number) => {
  //Mostra quando cada botão for clicado
  number.addEventListener('click', () => {
    if (firstNumber === undefined) {
      //Atribui o numero clicado a variavel do primeiro numero
      firstNumber = parseInt(number.textContent);

      //Imprime no visor o numero clicado
      viewer.textContent = firstNumber;
      console.log(firstNumber);
      return;
    }
    //Atribui o numero clicado a variavel do primeiro numero
    secondNumber = parseInt(number.textContent);
    console.log(secondNumber);

    if (currentOp == '*') {
      result = firstNumber * secondNumber;
      console.log(result);
    } else if (currentOp == '/') {
      result = firstNumber / secondNumber;
      console.log(result);
    } else if (currentOp == '+') {
      result = firstNumber + secondNumber;
      console.log(result);
    } else if (currentOp == '-') {
      result = firstNumber - secondNumber;
      console.log(result);
    }
    //Imprime no visor o numero clicado
    viewer.textContent = result;
  });
});

//Botão de limpar
clear.addEventListener('click', () => {
  viewer.textContent = 0;
  firstNumber = undefined;
  secondNumber = undefined;
});
