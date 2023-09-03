import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <h1>Список продуктов</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Бренд: {product.brand}</p>
            <p>Категория: {product.category}</p>
            <p>Продавец: {product.merchant}</p>
            <p>RAM: {product.attributes.find((attr) => attr.name === 'RAM')?.value}</p>
            <p>ROM: {product.attributes.find((attr) => attr.name === 'ROM')?.value}</p>
            {product.attributes.find((attr) => attr.name === 'FRONT CAMERA') && (
              <p>Фронтальная камера: {product.attributes.find((attr) => attr.name === 'FRONT CAMERA').value}</p>
            )}
            <img src={product.image.url} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
