const supabase_url = 'https://erogcveccbzsyhbgputf.supabase.co';
const supabase_key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyb2djdmVjY2J6c3loYmdwdXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwMzk4NTksImV4cCI6MjAwMTYxNTg1OX0.s4aSbXTAxSVuLnW6t6zcsJk-GaIYOvh_Ozp_p477xig';

// var supa = supabase.createClient(url, key);
// console.log('database', supa);

// import menu from './data.js';

let url = 'https://erogcveccbzsyhbgputf.supabase.co/rest/v1/menu_xx?select=*';

let menu;

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const fetchData = async () => {
  try {
    // let { data, error } = await supa.from('menu_xx').select('*');
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        apikey: `${supabase_key}`,
        Authorization: `Bearer ${supabase_key}`,
      },
    });
    const data = await response.json();
    console.log('menu data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayMenuItems = (menu) => {
  let displayMenu = menu.map((item) => {
    return `
       <article class="menu-item">
       <img src=${item.img} alt=${item.title} class="photo" />
       <div class="item-info">
         <header>
           <h4>${item.title}</h4>
           <h4 class="price">${item.price}</h4>
         </header>
         <p class="item-text">
           ${item.descrip}
         </p>
       </div>
     </article>
       `;
  });
  // console.log('displayMenu before join', displayMenu);
  displayMenu = displayMenu.join('');
  // console.log('displayMenu after join', displayMenu);
  sectionCenter.innerHTML = displayMenu;
};

// const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];
// const categories = ['all', ...new Set(menu.map((item) => item.category))];

const displayMenuButtons = () => {
  const categories = ['all', ...new Set(menu.map((item) => item.category))];
  let menuButtons = categories.map((category) => {
    return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
  });
  // console.log('displayButtons before join', menuButtons);
  menuButtons = menuButtons.join('');
  // console.log('displayButtons after join\n', menuButtons);
  btnContainer.innerHTML = menuButtons;

  const filterBtns = document.querySelectorAll('.filter-btn');
  console.log('filterBtns', filterBtns);
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log('data-id', e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const filterMenu = menu.filter((item) => item.category === category);
      if (category === 'all') {
        console.log('all', menu);
        displayMenuItems(menu);
      } else {
        console.log(category, filterMenu);
        displayMenuItems(filterMenu);
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', async () => {
  // console.log('1');
  // let { data, error } = await supabase.from('menu_xx').select('*');
  // console.log('data', data);
  menu = await fetchData();
  await displayMenuItems(menu);
  await displayMenuButtons();
});
