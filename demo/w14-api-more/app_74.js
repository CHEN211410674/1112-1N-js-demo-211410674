const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const url = 'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php';
try {
	const response = await fetch(url);
	const data = await response.json();
	console.log('data', data.leagues);
  displayItems(data.leagues);
} catch (error) {
	console.error(error);
}
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { strLeague } = item;
      return `<p>${strLeague}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};


