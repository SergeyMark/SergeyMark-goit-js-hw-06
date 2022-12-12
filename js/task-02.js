const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navigation = document.querySelector('#ingredients');

const createdLi = ingredients.map(ingredient =>{
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = ingredient;

    return li;
});

navigation.append(...createdLi);

console.log(navigation);

