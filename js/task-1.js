const categoriesItems = document.querySelectorAll(".item");
const itemTitle = document.querySelectorAll(".item h2");
const categoriesItem = document.querySelectorAll(".categories");

console.log(`Numbers of categories: ${categoriesItems.length}`);
for (let i = 0; i < categoriesItems.length; i++) {
  console.log(`Category: ${itemTitle[i].innerHTML}`);
  console.log(`Elements: ${categoriesItem[i].childElementCount}`);
}


