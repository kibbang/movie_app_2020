import React from 'react';
import PropTypes from 'prop-types'; 

const food = [
  {
    id: 1,
    name: 'cow',
    rating: 5
  },

  {
    id: 2,
    name: 'pig',
    rating: 3.6

  },

  {
    id: 3,
    name: 'apple',
    rating: 2.7

  },

  {
    id: 4,
    name: 'banana',
    rating: 4

  },

  {
    id: 5,
    name: 'fish',
    rating: 3.9

  },
]
 
function Food({ name, rating }){
  return (
    <div>
      <h1>I love {name}</h1>
      <h2>{rating} / 5.0</h2>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {food.map(dish=>(
        <Food key = { dish.id } name = { dish.name } rating= { dish.rating } />
      ))}
    </div>
  );
}

export default App;
