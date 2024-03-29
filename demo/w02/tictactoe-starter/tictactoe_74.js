const o ='o';
const x ='x';
let turn = 0; 
let done = false;

const resetBtn = document.querySelector('#reset');

const allLi = document.querySelectorAll('#board li');

const container = document.querySelector('#container');

const checkwin = (player) => {  //Arrow Function

 let p = [];
 allLi.forEach((item) =>{
    p.push(item.classList.contains(player));
 });
 console.log('p', p);

 const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;

   if(
     (p1 && p2 && p3) ||
     (p4 && p5 && p6) ||
     (p7 && p8 && p9) ||
     (p1 && p4 && p7) ||
     (p2 && p5 && p8) ||
     (p3 && p6 && p9) ||
     (p1 && p5 && p9) ||
     (p3 && p5 && p7)

   )
    return true;
else
  return false;

}

const reset = () => {
  allLi.forEach((item) => {
    item.textContent = '+'; 
    item.classList = ''; //顏色拿掉
    container.style.backgroundColor = '#666'; //style改變css
    turn = 0;
    done = false;
  });
}

const winMessage = (player) => {
    if(player === 'o'){
 container.style.backgroundColor = 'rgba(144, 238, 144, 0.5)';
}else {
    container.style.backgroundColor = 'rgba(240, 118, 128, 0.726)';
}
alert(`player ${player} wins`);
}

allLi.forEach( (item) => {
    item.addEventListener('click', () =>{
        if(item.classList.contains('disabled'))
        {
            alert('Already filled');//函式用來彈出對話視窗
        } 
        else if (!done)
        {
            if(turn % 2 === 0){
                item.textContent = 'o';
                item.classList.add('o', 'disabled');
                if(checkwin('o')){
                    winMessage('o');
                    done = true;
                }
            } 
            if (turn % 2 === 1) 
            {
                item.textContent = 'x';
                item.classList.add('x', 'disabled'); 
                if(checkwin(x)){
                    winMessage(x);
                    done = true;
                }
            }
            if (turn <8)
                turn++;
            else
                alert('tie');
        }
        

    } );
});


//console.log('checkwin(o)', checkwin('o'));
//console.log('checkwin(x)', checkwin('x'));

resetBtn.addEventListener('click', reset);