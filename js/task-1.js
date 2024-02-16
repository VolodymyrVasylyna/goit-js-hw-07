const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Кількість категорій: ${categoriesItems.length}`);

categoriesItems.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent;
  const categoryElementsCount = categoryItem.querySelectorAll('li').length;

  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryElementsCount}`);
});