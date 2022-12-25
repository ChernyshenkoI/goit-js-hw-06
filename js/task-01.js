
let catNumber = 0;
let listCategories = document.getElementsByClassName("item");
 catNumber = listCategories.length;
 console.log("Categories number: " + catNumber)

for (let listCategory of listCategories) {
   console.log("Category: " +  listCategory.childNodes[1].innerText);
   console.log("Elements: " +  listCategory.childNodes[3].children.length);

}


// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5