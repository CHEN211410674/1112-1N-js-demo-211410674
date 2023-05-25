const showClassDemo = (week) => {
    const showDemo = document.querySelector('.banner-section');
    switch(week){
        case 'w1':
          showDemo.innerHTML = `<iframe src='./demo/w01/index.html' width="100%" height="100%"/>`;
          break;
        case 'w1-md':
          showDemo.innerHTML = `<iframe src='./demo/md/w01/w01_74.html' width="100%" height="100%"/>`;
          break;
        case 'w2':
          showDemo.innerHTML = `<iframe src='./demo/w02/tictactoe-starter/tictactoe_74.html' width="100%" height="100%"/>`;
          break;
        case 'w2-md':
          showDemo.innerHTML = `<iframe src='./demo/md/w02/w02_74.html' width="100%" height="100%"/>`;
          break;
        case 'w3':
          showDemo.innerHTML = `<iframe src='./demo/w03/index.html' width="100%" height="100%"/>`;
          break;
        case 'w3-md':
          showDemo.innerHTML = `<iframe src='./demo/md/w03/w03_74.html' width="100%" height="100%"/>`;
          break;
        case 'w4':
          showDemo.innerHTML = `<iframe src='./demo/w04_menu/index.html' width="100%" height="100%"/>`;
          break;
        case 'w4-md':
          showDemo.innerHTML = `<iframe src='./demo/md/w04/w04_74.html' width="100%" height="100%"/>`;
          break;
        case 'w5-1':
          showDemo.innerHTML = `<iframe src='./demo/w05/menu_starter_74/index.html' width="100%" height="100%"/>`;
          break;
        case 'w5-2':
          showDemo.innerHTML = `<iframe src='./demo/w05-modal-starter/index.html' width="100%" height="100%"/>`;
          break;
        case 'w5-md':
          showDemo.innerHTML = `<iframe src='./demo/md/w05/w05_74.html' width="100%" height="100%"/>`;
          break;
        case 'w6':
          showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_74/p3_74.html' width="100%" height="100%"/>`;
          break;
        case 'w6-md':
          showDemo.innerHTML = `<iframe src='./demo/md/w06/w06_74.html' width="100%" height="100%"/>`;
          break;
        case 'p1':
          showDemo.innerHTML = `<iframe src='./demo/w09/midprep_stud_74/p1_bmi_74/p1_74.html' width="100%" height="100%"/>`;
          break;
        case 'p2':
          showDemo.innerHTML = `<iframe src='./demo/w09/midprep_stud_74/p2_counter_74/index.html' width="100%" height="100%"/>`;
          break;
        case 'p3':
          showDemo.innerHTML = `<iframe src='./demo/w09/midprep_stud_74/p3_tour_74/index.html' width="100%" height="100%"/>`;
          break;
        case 'w09-md':
          showDemo.innerHTML = `<iframe src='./demo/md/w09/w09_74.html' width="100%" height="100%"/>`;
          break;
        case 'w15':
          showDemo.innerHTML = `<iframe src='./demo/w15-store-product/index.html' width="100%" height="100%"/>`;
          break;  
    }
}