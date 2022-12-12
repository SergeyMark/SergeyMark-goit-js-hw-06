const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navigation = document.querySelector('#ingredients');
const createLi = document.createElement('li');

createLi.classList.add('item');

console.log(createLi);




// for (const ingredient of ingredients) {
//     const navElement = document.createElement('li');
//     navElement.classList.add("item");
//     navElement.textContent = ingredient;
//     navigation.append(navElement);
// }

// console.log(navigation);

