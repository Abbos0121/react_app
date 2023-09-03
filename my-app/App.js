import React from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const productsData = [
  ];

  return (
    <div className="App">
      <ProductList products={productsData} />
    </div>
  );
}

export default App;
