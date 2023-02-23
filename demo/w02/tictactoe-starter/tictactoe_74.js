const resetBtn = document.querySelector('#reset');

const allLi = document.querySelectorAll('#board li');
console.log('allLi', allLi);

const checkwin = (player) => {

 let p = [];
 allLi.forEach((item) =>{
    p.push(item.classList.contains(player));
 });
 console.log('p', p);

 const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;

   if(
     (p1 && p2 && p3) ||
     (p4 && p5 && p6) ||
     (p7 && p8 && p9) 

   )
    return true;
else
  return false;

}

const reset = () => {
  allLi.forEach((item) => {
    item.textContent = '+';
    item.classList = '';
  });
}

console.log('checkwin(o)', checkwin('o'));
console.log('checkwin(x)', checkwin('x'));

resetBtn.addEventListener('click', reset);