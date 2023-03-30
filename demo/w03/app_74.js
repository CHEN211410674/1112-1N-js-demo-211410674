// local reviews data
const reviews = [
  {
    id: 1,
    name: '陳宜真',
    job: 'web developer',
    img: 'https://sgtwgxsjtbibcbrzrfra.supabase.co/storage/v1/object/public/demo-74/md_1N_img/125075.jpg',
    text: '我不想延畢',
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },

];

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


let currentItem = 0;

// function showReview() {

// }

const showReview = (person) => {
  const item = reviews[person];
  console.log('item', item);
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', () => {
  showReview(currentItem);
}); //在DOM結構被完整的讀取跟解析後就會被觸發，不須等待外部資源讀取完成

//nextbtn

nextBtn.addEventListener('click', () => {
  currentItem++; //0123...
  if(currentItem >= reviews.length) {
    currentItem = 0; //跳回第一個
  }
  // console.log('currentItem', review[currentItem]);
  showReview(currentItem);
});

//prevbtn

prevBtn.addEventListener('click', () => {
  currentItem--;
  if(currentItem <0) {
    currentItem =reviews.length-1;
  }
  showReview(currentItem);
});

randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);//floor返回不大於参数（<=）的最大整数 ，比如1.4，floor的结果是1
  showReview(currentItem);
});