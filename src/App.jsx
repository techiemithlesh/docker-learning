import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  const api = 'https://dummyjson.com/products'; // Corrected the API URL

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Log fetched data to console
        setProducts(data.products); // Update state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  console.log("Products", products); 

  return (
    <>
      <h1>Learing Docker From Scratch</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.images[0]} alt={product.title} />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Category: {product.category}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
}

export default App;
