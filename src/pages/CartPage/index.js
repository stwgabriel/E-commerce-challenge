import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import { Container, Header } from './styles';

import frexcoLogo from '../../assets/images/logo-frexco.png';
import trashIcon from '../../assets/images/icons/trash.svg';

function CartPage() {

  const { cartItems, handleInputChange, handleItemDeletion } = useContext(CartContext);

  let total = 0;

  const totalPrice = cartItems.reduce((acc, item) => {

    const totalItemPrice = item.itemPrice * item.selectedAmount;

    total += totalItemPrice;
    return total.toFixed(2);
  }, 0);

  return (
    <Container>
      <Header>
        <h1 id="logo-frexco">
          <img src={frexcoLogo} alt="Frexco" />
        </h1>
      </Header>

      <main>
        <div className="cart__header">

          <Link to="/"> &lt;- Voltar</Link>
          <div className="bottom-row">
            <h1>Carrinho</h1>
            <b>
              Total R$
              {' '}
              {totalPrice}
            </b>
          </div>
        </div>

        <ul>
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

        <button type="button">Checkout</button>
      </main>
    </Container>
  );
}

export default CartPage;
