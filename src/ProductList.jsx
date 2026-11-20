import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice.js';

const plants = [
  { id: 'snake', name: 'Snake Plant', category: 'Air Purifying', cost: 18, image: 'https://images.unsplash.com/photo-1593691503783-7f5b7b3f4f6b?auto=format&fit=crop&w=800&q=80', description: 'Hardy greenery that suits many spaces.' },
  { id: 'peace', name: 'Peace Lily', category: 'Air Purifying', cost: 22, image: 'https://images.unsplash.com/photo-1593691503783-7f5b7b3f4f6b?auto=format&fit=crop&w=800&q=80', description: 'Elegant leaves and graceful blooms.' },
  { id: 'pothos', name: 'Golden Pothos', category: 'Air Purifying', cost: 15, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80', description: 'Trailing foliage for shelves and corners.' },
  { id: 'lavender', name: 'Lavender', category: 'Aromatic', cost: 16, image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=800&q=80', description: 'A fragrant plant with lovely purple flowers.' },
  { id: 'mint', name: 'Mint', category: 'Aromatic', cost: 9, image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37a3?auto=format&fit=crop&w=800&q=80', description: 'Fresh, fragrant leaves for sunny windowsills.' },
  { id: 'rosemary', name: 'Rosemary', category: 'Aromatic', cost: 12, image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=800&q=80', description: 'A woody herb with a fresh scent.' },
  { id: 'aloe', name: 'Aloe Vera', category: 'Succulents', cost: 14, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80', description: 'A sculptural succulent for bright spaces.' },
  { id: 'jade', name: 'Jade Plant', category: 'Succulents', cost: 19, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80', description: 'Compact succulent with rounded leaves.' },
  { id: 'echeveria', name: 'Echeveria', category: 'Succulents', cost: 11, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80', description: 'A colorful rosette-shaped succulent.' }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div className="product-list">
      {categories.map(category => (
        <section className="category-section" key={category}>
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants.filter(plant => plant.category === category).map(plant => (
              <article className="plant-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} loading="lazy" />
                <div className="plant-info">
                  <span className="plant-category">{plant.category}</span>
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="plant-bottom">
                    <strong>${plant.cost.toFixed(2)}</strong>
                    <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}