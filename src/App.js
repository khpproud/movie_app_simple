import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
	return (
		<div>
			<h2>I like {name}!</h2>
			<h4>{rating} / 10.0</h4>
			<img src={picture} alt={name} />
		</div>
	);
}

const foodLikes = [
	{
		name: 'Pizza',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/440px-Supreme_pizza.jpg',
		rating: 8.9
	},
	{
		name: 'Bibimbap',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/440px-Dolsot-bibimbap.jpg',
		rating: 7.3
	},
	{
		name: 'Ramen',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Korea_Ramyeon.jpg/440px-Korea_Ramyeon.jpg',
		rating: 6.8
	},
	{
		name: 'Chicken',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fried-Chicken-Set.jpg/440px-Fried-Chicken-Set.jpg',
		rating: 9.6
	}
];

function renderFood(dish, index) {
	return <Food key={index} name={dish.name} picture={dish.image} rating={dish.rating} />;
}

function App() {
	// {foodLikes.map((dish, index) => <Food key={index} name={dish.name} picture={dish.image} />)}
	const [ count, setCount ] = useState(0);

	// like `componentDidMount`
	useEffect(() => {
		console.log('component rendered!!!');
	}, []);

	// like `componentDidUpdate`
	useEffect(
		() => {
			console.log('count updated!!!');
		},
		[ count ]
	);

	const add = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};

	// return <div>{foodLikes.map(renderFood)}</div>;
	return (
		<div>
			<h1>The number is {count}</h1>
			<button onClick={add}>Add</button>
			<button onClick={minus}>Minus</button>
		</div>
	);
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	rating: PropTypes.number
};

export default App;
