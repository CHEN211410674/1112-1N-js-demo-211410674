const menu = [
    {
    id: 1,
    title: 'yogurt',
    category: 'breakfast',
    price: 9.9,
    img: './images/yogurt.jpg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odit.'
    },
    {
    id: 2,
    title: 'pasta',
    category: 'lunch',
    price: 13.99,
    img: './images/lunch.jpg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odit.'
    },
    {
    id: 3,
    title: 'vegetable',
    category: 'dinner',
    price: 15.99,
    img: './images/dinner.jpg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odit.'
    },
    {
    id: 4,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.59,
    img: './images/item-1.jpeg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odit.'
    },
    {
    id: 5,
    title: 'dinner double',
    category: 'dinner',
    price: 13.99,
    img: './images/item-2.jpeg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odit.'
    },
    {
    id: 6,
    title: 'godzilla milkshake',
    category: 'shake',
    price: 13.99,
    img: './images/item-3.jpeg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odit.'
    },
    
];


// const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];
const categories = ['all',...new Set(menu.map(item=>item.category))]
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const displayMenuItems = (menu) => {
    let displayMenu = menu.map((item) =>{
      return`
      <article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>
      `
    });
    console.log('displayMenu', displayMenu);
    displayMenu = displayMenu.join('');
    console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

const displayBtn = (categories) => {
    let Btn= categories.map((item) =>{
      return`
      <button type="button" class="filter-btn" data-id=${item}>${item}</button>
        </button>
      `
    })
    Btn = Btn.join('');
    btnContainer.innerHTML = Btn;
    console.log(Btn)
  }
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayBtn(categories);
})

