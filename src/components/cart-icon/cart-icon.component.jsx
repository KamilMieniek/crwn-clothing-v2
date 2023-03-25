import { ReactComponent as ShoppingCartIcon } from '../../assets/cart.svg';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';
function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleisCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleisCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      <span>{cartCount}</span>
    </div>
  );
}

export default CartIcon;
