/* eslint-disable no-shadow */
import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShopIcon className="shop-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

/* 
  mapStateToProps is called regardless if the property we destructured
  changed or not, i.e toggleCartDropdown changes but mapStateToProps is executed
  regardless because the new Store state is a new object when compared to 
  the old Store state
*/
const mapStateToProps = ({ cart: { cartItems } }) => ({
  // example of redux selector, we are manipulating data to get a new
  // custom property
  itemCount: cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
