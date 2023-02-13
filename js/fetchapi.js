const SHOE_API = "https://fakestoreapi.com/products";
const WOMEN_API =
  "https://fakestoreapi.com/products/category/women's%20clothing";

const shoeDisplay = document.querySelector(".display-products");

shoeAPI(SHOE_API);

async function shoeAPI(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
  displayProducts(data);
}

function displayProducts(product) {
  shoeDisplay.innerHTML = "";

  product.forEach((displayedProduct) => {
    const { title, image, price } = displayedProduct;

    const elContainer = document.createElement("div");
    elContainer.classList.add("card");
    elContainer.innerHTML = `
        <a src="">
            <img class="product-img" src="${image}">
            <div class="product-name">${title}</div>
            <div class="product-rate">Price:$ ${price}</div>
        </a>
      `;

    shoeDisplay.appendChild(elContainer);
  });
}
