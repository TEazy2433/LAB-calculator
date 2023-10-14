(function)

  let display = document.querySelector('.display');
  let buttons = document.querySelectorAll('.calculator_key');
  let key--operator = document.querySelector('key--operator');
  let key--enter = document.querySelector('.key--enter');

buttons.forEach(function(button){
  button.addEventListener('click',function(=){
    let value = e.target.dataset.num;
    screen.value +- value;

  }
})
