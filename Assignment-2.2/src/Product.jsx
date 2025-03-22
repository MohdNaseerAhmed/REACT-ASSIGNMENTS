import React from 'react';

const Product = ({ image, name, brand, price }) => {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-brand">Brand: {brand}</p>
      <p className="product-price">${price}</p>
    </div>
  );
};

export default Product;