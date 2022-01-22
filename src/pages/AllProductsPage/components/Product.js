import { useState } from 'react';
import PropTypes from 'prop-types';

import { ProductContainer } from '../styles';

import plusIcon from '../../../assets/images/icons/plus.svg';
import minusIcon from '../../../assets/images/icons/minus.svg';

function Product({
  id,
  itemImage,
  itemName,
  itemPrice,
  itemPortion,
  individualPrice,
  selectedAmount,
  handleItemAddition,
}) {

  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [selectedItemAmount, setSelectedItemAmount] = useState(selectedAmount);

  function handlePreviewModal() {

    setIsPreviewModalOpen(!isPreviewModalOpen);
  }

  function handleIncreaseSelectedAmout() {

    setSelectedItemAmount((prevState) => {

      let newValue = prevState;
      newValue += 1;
      return newValue;
    });
  }
  function handleDecreaseSelectedAmout() {

    setSelectedItemAmount((prevState) => {

      if (prevState <= 1) { return 1; }

      let newValue = prevState;
      newValue -= 1;
      return newValue;
    });
  }

  function handleAddToCart() {

    handleItemAddition({

      itemId: Number(id),
      itemImage,
      itemName,
      itemPrice,
      itemPortion,
      individualPrice,
      selectedAmount: Number(selectedItemAmount),
      handleItemAddition,
    });
    setSelectedItemAmount(1);
  }

  return (
    <ProductContainer
      key={id}
      title={itemName}
      onClick={() => { handlePreviewModal(); }}
    >

      <header className="image-container">
        <img src={itemImage} alt="product" />
      </header>

      <div className="product-info">

        <header>

          <h3>
            {itemName}
            <span className="float-text">
              {itemName}
            </span>
          </h3>

          <span className="item-price">
            <b>
              {selectedItemAmount > 0 && (
                `${selectedItemAmount}x`
              )}
              {' '}
              R$
              {itemPrice.toFixed(2)}
            </b>
          </span>

        </header>

        <span>{itemPortion}</span>

        <span>
          Preço Individual: R$
          {' '}
          {individualPrice.toFixed(2)}
        </span>
      </div>

      <footer>
        <button
          type="button"
          title="remove Product"
          className="product-cart-control"
          onClick={handleDecreaseSelectedAmout}
        >
          <img src={minusIcon} alt="minus" />
        </button>
        <hr />
        <button
          type="button"
          title="Add Product"
          className="product-cart-control"
          onClick={handleIncreaseSelectedAmout}
        >
          <img src={plusIcon} alt="plus" />
        </button>
        <button
          title="add to cart"
          className="add-to-cart"
          type="button"
          onClick={handleAddToCart}
        >
          Add to cart: $
          {selectedItemAmount > 0 ? (itemPrice * selectedItemAmount).toFixed(2) : itemPrice}
        </button>
      </footer>
    </ProductContainer>
  );
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  selectedAmount: PropTypes.number.isRequired,
  individualPrice: PropTypes.number.isRequired,
  itemPortion: PropTypes.string.isRequired,
  handleItemAddition: PropTypes.func.isRequired,
};

export default Product;
