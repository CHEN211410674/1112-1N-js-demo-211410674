const url = `https://course-api.com/javascript-store-products`;

let products;

const fetchData = async ()=>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('data', data);
        return data;
    //   displayItems(data.meals);
    } catch (error) {
        console.error(error);
    }  
}

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name, image , price} = item.fields;
      return `
      <div class="single-product">
      <img src=${image[0].url} class="single-product-img img" alt="albany table">
      <footer>
        <h5 class="name">${name}</h5>
        <span class="price">${price}</span>
      </footer>
    </div>
      `;
    })
    .join('');
   const container = document.querySelector('.products-container')
  container.innerHTML = displayData;
};


window.addEventListener('DOMContentLoaded', async () => {
    products = await fetchData();
    await displayItems(products);
});