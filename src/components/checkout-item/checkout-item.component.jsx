import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, quantity, price, imageUrl } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="price">${price}</span>
      <span className="quantity">{quantity}</span>
      <span className="remove-button">&#1005;</span>
    </div>
  );
};

export default CheckoutItem;
