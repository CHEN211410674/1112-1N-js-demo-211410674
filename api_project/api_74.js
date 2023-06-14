const url = "https://chinese-food-db.p.rapidapi.com/";

const pContainer = document.querySelector('.products-container');
const companyBtns = document.querySelectorAll('.company-btn');

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "be29625424mshd7539069170c2fdp1f06d9jsn8b03c9a54c32",
    "X-RapidAPI-Host": "chinese-food-db.p.rapidapi.com",
  },
};

// const fetchData = () => {
//   fetch("https://chinese-food-db.p.rapidapi.com/", options)
//     .then((response) => response.json())
//     .catch((err) => console.error(err));
// };

let allProducts;
let products;

const fetchData = async () => {
  try{
     const response = await fetch(`https://chinese-food-db.p.rapidapi.com/`, options);
     const data = response.json();
     console.log('fetch data', data);
     return data;
  }catch(err){
    console.log(err);
  }
}


const displayItems = (items) => {
	const displayData = items
	  .map((item) => {
		const { id, title, image } = item;
		return `
	  <div class="single-product">
	  <img src=${image} class="single-product-img img" alt="albany table">
	  <footer>
		  <h5 class="id">${id}</h5>
		  <span class="title">${title}</span>
	  </footer>
	  </div>
	  `;
	  })
	  .join("");
	const container = document.querySelector(".products-container");
	container.innerHTML = displayData;
};

    companyBtns.forEach((btn) => {
	btn.addEventListener('click', (e) =>{
		const companyId = e.currentTarget.dataset.id;
		console.log('companyId', companyId);
		if(companyId === 'all'){
		  console.log('all companyId', allProducts);
		  displayProducts(allProducts);
		} else if(companyId === 'easy'){
		  console.log('easy companyId', easyproducts);
		  displayProducts(products);
		}
	});
  });

window.addEventListener('DOMContentLoaded', async () => {
    allProducts = await fetchData();
    console.log('all products', allProducts);
    await displayItems(allProducts);
});