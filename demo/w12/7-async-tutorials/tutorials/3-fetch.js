const btn = document.querySelector('.btn');
const url = './api/people.json';

btn.addEventListener('click', async()=>{
    const data = await getData(url);
    await displayData(data);
});

const getData = async(url) =>{
    try{
      const response = await fetch(url);
      const data = response.json();
      console.log('resp', response);
      console.log('getdata', data);
      return data;
    }catch(error){
      console.log(error);
    }
}

const displayData = async (data) => {
    console.log('data', data);
    const displayContent = data.map((item) =>{
        return `<p> ${item.name} </p>`
    }).join(''); 
    const divElement = document.createElement('div');
    divElement.innerHTML = displayContent;
    document.body.appendChild(divElement);
}
