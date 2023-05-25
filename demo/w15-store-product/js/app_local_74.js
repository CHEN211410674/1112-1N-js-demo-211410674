//const url = `https://course-api.com/javascript-store-products`;

const url = './api/products.json'

const pContainer = document.querySelector('.products-container');

let allProducts;
let products ;

const fetchData = async() => {
  try{
    const response = await fetch(url);
    const data = response.json();
    console.log('fetch data', data);
    return data;
  }catch(err){
    console.log(err);
  }
}

const displayProducts = (products) => {
  let displayContent = products.map((product, index) => {
    const {company, name, price} = product.fields;
    let image = `./images/product-${index+1}.jpg`;
    return `
    <div class="single-product">
    <img
      src=${image}
      class="single-product-img img"
      alt=${name}
    />
    <footer>
    <h5 class="name">${name}</h5>
    <span class="price">$${price/100}</span>
    </footer>
    </div>
      `
  }).join('');

  pContainer.innerHTML = displayContent;
}
window.addEventListener('DOMContentLoaded', async () => {
  allProducts = await fetchData();
  console.log('all products', allProducts);
  await displayProducts(allProducts);
});