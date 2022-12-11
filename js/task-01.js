const categories = document.querySelector('#categories');
const category = document.querySelectorAll('.item');

const categoriesChild = categories.children;
console.log(`Number of categories: ${categoriesChild.length}`);

for (const item of category) {
    const headCategory = item.firstElementChild;
    console.log(`Category: ${headCategory.textContent}`);
    const elementCategory = item.lastElementChild;
    console.log(`Elements: ${elementCategory.children.length}`);
}


