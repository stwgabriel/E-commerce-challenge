/* eslint-disable no-return-assign */
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  function handleItemAddition(itemToBeAdded) {

    let isOnCart = false;

    setCartItems((prevState) => {

      prevState.forEach((item) => {

        if (item.itemId === itemToBeAdded.itemId) {
          isOnCart = true;
        }
      });

      if (isOnCart) {

        return prevState.map((item) => {

          if (item.itemId === itemToBeAdded.itemId) {

            const newItem = item;
            newItem.selectedAmount += itemToBeAdded.selectedAmount;
            return newItem;
          }
          return item;
        });
      }

      const newItem = itemToBeAdded;
      if (newItem.selectedAmount <= 0) {
        newItem.selectedAmount = 1;
      }
      return [...prevState, newItem];
    });
  }
  function handleItemDeletion(event) {

    setCartItems(
      (prevState) => prevState.filter((item) => (item.itemId !== Number(event.target.getAttribute('data-key')))),
    );
  }

  function handleInputChange(event) {

    setCartItems((prevState) => {

      if (Number(event.target.value) === 0) {
        return prevState.filter((item) => (item.itemId !== Number(event.target.getAttribute('data-key'))));
      }

      return prevState.map((item) => {

        if (item.itemId === Number(event.target.getAttribute('data-key'))) {

          const modifiedArray = item;
          modifiedArray.selectedAmount = Number(event.target.value);
          return modifiedArray;
        }
        return item;
      });
    });
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      cartLength: cartItems.length,
      handleInputChange,
      handleItemAddition,
      handleItemDeletion,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {

  children: PropTypes.node.isRequired,
};

export default CartProvider;
export { CartContext };
