// const url = 'https://chinese-food-db.p.rapidapi.com/';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be29625424mshd7539069170c2fdp1f06d9jsn8b03c9a54c32',
		'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
	},
};

fetch(
	'https://chinese-food-db.p.rapidapi.com/',
	options
)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
