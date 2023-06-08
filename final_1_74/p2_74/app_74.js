const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
const supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNndHdneHNqdGJpYmNicnpyZnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMjQ1NjIsImV4cCI6MjAwMTgwMDU2Mn0.josX2sro0EuKc_blcOVWDcThfC6GLsD4pieAWHFS_Gc"

const url = 'https://sgtwgxsjtbibcbrzrfra.supabase.co/rest/v1/menu_74?select=*';

let menu1;

const displayMenuItems = (menu) => {
    let displayMenu = menu.map((item) =>{
      return`
      <article class="menu-item">
      <img src=${item.remote_img} alt=${item.title} class="photo" />
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
      `
    });
    //console.log('displayMenu', displayMenu);
    displayMenu = displayMenu.join('');
    //console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

// const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];


const displayBtn = (menu) => {
    const categories = ['all',...new Set(menu.map(item=>item.category))]
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

  const fetchData = async () => {
   try{
    const response = await fetch(url, {
    method: 'GET',
    headers: {
    apikey: `${supabase_key}`,
    Authorization: `Bearer ${supabase_key}`
    }
    });
    const data = response.json();
    console.log('fetch data', data);
    return data;
   }catch(error){
   console.log(error);
   }
}

  

  window.addEventListener('DOMContentLoaded', async () => {
    menu1 = await fetchData();
    await displayMenuItems(menu1);
    await displayBtn(menu1);
});