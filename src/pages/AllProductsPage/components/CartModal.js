import { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { ModalOverlay, ModalContainer } from '../styles';

import closeIcon from '../../../assets/images/icons/close.svg';
import trashIcon from '../../../assets/images/icons/trash.svg';

import clickToExit from '../../../utils/clickToExit';
import { CartContext } from '../../../contexts/CartContext';

function CartModal({ renderModal, handleRenderModal }) {

  if (!renderModal) return null;

  function handleClick(event) {

    if (clickToExit(event.target, 'click-to-exit')) {
      handleRenderModal();
    }
  }

  const { cartItems, handleInputChange, handleItemDeletion } = useContext(CartContext);

  let total = 0;

  const totalPrice = cartItems.reduce((acc, item) => {

    const totalItemPrice = item.itemPrice * item.selectedAmount;

    total += totalItemPrice;
    return total.toFixed(2);
  }, 0);

  useEffect(() => {

    document.addEventListener('click', handleClick);

    return () => { document.removeEventListener('click', handleClick); };
  }, []);

  return ReactDOM.createPortal(

    <ModalOverlay className="click-to-exit">
      <ModalContainer>

        <header className="cart-modal__header">
          <div className="top-row">
            <h2>Carrinho</h2>
            <button
              type="button"
              className="closeModal"
              onClick={handleRenderModal}
            >
              <img src={closeIcon} alt="close" />
            </button>
          </div>

          <hr />
        </header>

        <main className="cart-items-list">
          <header>

            <span>
              {cartItems.length}
              {' '}
              items
            </span>
            <span>
              Total: R$
              {totalPrice}
            </span>
          </header>

          <ul
            className={cartItems.length === 0 ? 'empty' : ''}
          >

            {cartItems.map((item) => (

              <li key={item.itemId} className="cart-item">

                <div className="cart-item__image">
                  <img src={item.itemImage} alt="product" />
                </div>

                <div className="cart-item__info">

                  <h4>{item.itemName}</h4>

                  <div className="pricing">

                    <div>
                      <input
                        type="number"
                        value={item.selectedAmount}
                        onChange={handleInputChange}
                        name={item.itemName}
                        data-key={item.itemId}
                        id="product-amout"
                      />
                      x
                    </div>

                    <span>
                      {' '}
                      R$
                      {item.itemPrice}
                      :
                      {' '}
                    </span>

                    <span>
                      <b>
                        R$
                        {(item.itemPrice * item.selectedAmount).toFixed(2)}
                      </b>
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  data-key={item.itemId}
                  className="delete-item"
                  onClick={handleItemDeletion}
                >
                  <img src={trashIcon} className="no-events" alt="trash" />
                </button>
              </li>
            ))}

          </ul>
        </main>

        <footer>
          <Link
            type="button"
            className="go-to-cart"
            to="/cart"
          >
            Ir para o carrinho
          </Link>
        </footer>
      </ModalContainer>
    </ModalOverlay>,
    document.getElementById('modal-root'),
  );
}

CartModal.proptypes = {

  renderModal: PropTypes.bool.isRequired,
  handleRenderModal: PropTypes.func.isRequired,
};

export default CartModal;
