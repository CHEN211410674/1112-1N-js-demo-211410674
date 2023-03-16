import {menu} from './data.js'


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
    //console.log('displayMenu', displayMenu);
    displayMenu = displayMenu.join('');
    //console.log('displayMenu after join', displayMenu);
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

  const filtersBtns = btnContainer.querySelectorAll('.filter-btn');
  console.log('filterBtns', filtersBtns);
  filtersBtns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        console.log('data-id', e.currentTarget.dataset.id);
        const category = e.currentTarget.dataset.id;
        const filterMenu = menu.filter( (item) => item.category === category);
        console.log('filterMenu', filterMenu);
        if(category === 'all'){
          console.log('all', menu)
          displayMenuItems(menu);
        }else{
          console.log(category, filterMenu);
          displayMenuItems(filterMenu);
        }
      });
  });
  }

  

  window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayBtn(categories);
})

