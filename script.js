let choice1;
let choice2;
let choice3;
let done;

function checkFoods(classFoods) {
  choice1 = document.querySelector(classFoods);

  const buttonChecked1 = document.querySelector('.checked1');

  if (buttonChecked1 !== null) {
    buttonChecked1.classList.remove('checked1');
  }

  const button1 = document.querySelector(classFoods);
  button1.classList.add('checked1');

  checkdone();
}

function checkDrinks(classDrinks) {
  choice2 = document.querySelector(classDrinks);

  const buttonChecked2 = document.querySelector('.checked2');

  if (buttonChecked2 !== null) {
    buttonChecked2.classList.remove('checked2');
  }

  const button2 = document.querySelector(classDrinks);
  button2.classList.add('checked2');

  checkdone();
}

function checkDesserts(classDesserts) {
  choice3 = document.querySelector(classDesserts);

  const buttonChecked3 = document.querySelector('.checked3');

  if (buttonChecked3 !== null) {
    buttonChecked3.classList.remove('checked3');
  }

  const button3 = document.querySelector(classDesserts);
  button3.classList.add('checked3');

  checkdone();
}


function checkdone() {
  if(choice1 && choice2 && choice3) {
    const button = document.querySelector('.order-button');
    button.innerHTML = "Fechar pedido";
    button.classList.add('hidden');
  }
}

function total () {
  let type1 = document.querySelector(".checked .food-type").textContent;
  let type2 = document.querySelector(".checked2 .drink-type").textContent;
  let type3 = document.querySelector(".checked3 .dessert-type").textContent;

  let foods = document.querySelector(".checked .food-prices").textContent;
  let drinks = document.querySelector(".checked2 .drink-prices").textContent;
  let desserts = document.querySelector(".checked3 .dessert-prices").textContent;

  foods = parseFloat(foods.replace(",", "."));
  drinks = parseFloat(drinks.replace(",", "."));
  desserts = parseFloat(desserts.replace(",", "."));

  let result = (foods + drinks + desserts).toFixed(2);

  let link = 'https://wa.me/?link=';
  let textmessage =
  `Olá gostaria de fazer o pedido: + "\n" + -Prato: ${type1} + "\n" + -Bebida: ${type2}+ "\n" + -Sobremesa: ${type3} + "\n" + -Total:R$ ${result}`

  let encoded = encodeURIComponent(textmessage)
  window.open(link + textmessage, "_blank")
}
