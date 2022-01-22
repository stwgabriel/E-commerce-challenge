import styled, { keyframes } from 'styled-components';

const scrollUp = keyframes`

  0% {

    opacity: .5;
    transform: translateY(2rem);
  }
  100% {

    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`

 min-height: 100vh;
 max-width: 192rem;

 margin:0 auto;
`;

const Header = styled.header`

 background: #fff;
 box-shadow: 0px 0px 2.5rem #00000015;

 display: flex;
 align-items: center;
 justify-content: space-between;

 min-height: 10rem;
 width: 100%;

 padding: 1rem 2rem;

 position: sticky;
 top: 0;
 left: 0;

 z-index: 500;

 h1#logo-frexco {

  img {
    width: 12rem;
  }
 }

 .left-menu {

  display: flex;
  align-items: center;
 }

 #cart {

  background: transparent;
  border:none;
  border-radius: 1rem;

  margin-right: 2rem;
  padding: .7rem 1.5rem;

  position: relative;

  transition: background .3s ease-in;

  .cart-count {

    background: #89bd23;
    border-radius: 1rem;
    color: #fff;
    box-shadow: 0 0 1rem #0002;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -5%;
    left: 50%;

    height: 2rem;
    width: 2rem;
  }

  &:hover {

    background: #00000015;
  }
 }

 .sign-buttons {

  a {

    color: #333;
    text-decoration: none;
    font-size: 1.6rem;

    &:hover {

      text-decoration: underline;
    }
  }

  span {

    margin: 0 .5rem;
  }
 }
`;

const ProductsContainer = styled.section`

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  min-height: fit-content;

  padding: 4rem 2rem;
  margin: 0 auto;
`;

const ProductContainer = styled.div`

  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 2rem #0002;
  cursor: pointer;
  outline: solid .3rem #f8f8f2;

  width: 30rem;

  margin: 0 2rem 4rem;

  overflow: hidden;

  &:first-of-type {

    margin: none;
  }

  .image-container {

    height: 18rem;
    overflow: hidden;
  }

  img {

    width: 100%;
    height: auto;

    object-fit: cover;

    margin: 0 auto;

    transform: scale(70%);
  }

  .product-info {

    display: flex;

    flex-direction: column;

    padding: 1rem;
  }

  header {

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: .8rem;

    z-index: 0;

    .item-price {

      position: sticky;
      top: 0;
      right: 1rem;

      z-index: 100;

      min-width: fit-content;
    }

    h3 {

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: clip;
      max-width: 20rem;
      max-height: 6rem;

      position: relative;

      overflow: hidden;

      .float-text {

        background: #fff;
        border-radius: 0 1rem 1rem 0;

        position: absolute;
        top: 50%;
        left: -1rem;

        transform: translateY(-50%);

        display: none;
        align-items: center;
        justify-content: flex-start;

        min-height: 4rem;
        width: max-content;
        max-width: 30rem;

        padding: 0 1rem;

        z-index: 200;
      }

      &:hover {

        overflow: visible;
        max-width: 50rem;
        min-width: 50rem;

        .float-text {

          display: flex;
        }
      }
    }
  }

  footer {

    display: flex;
  }

  hr {

    background: #3336;
    border: none;
    border-radius: 1rem;

    height: 2.4rem;
    width: .2rem;

    margin: auto;
  }

  .product-cart-control {

    background: transparent;
    border: none;
    color: #89bd23;

    max-width: 6rem;

    flex: 1;

    transition: background .3s;

    img {

      height: auto;
      width: 2rem;
    }

    &:hover {

      background: #00000015;
    }
  }

  .add-to-cart {

    background: #89bd23;
    border: none;
    color: #f8f8f2;
    font-weight: 600;

    flex: 1;

    padding: 1.4rem 0;

    transition: background .3s;

    &:hover {

      background: #8bc34a;
    }
  }
`;

const ModalOverlay = styled.div`

  background: #0002;

  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;

  position: fixed;
  inset: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1000;
`;

const ModalContainer = styled.div`

  background: #f8f8f2;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;

  width: min(95%, 50rem);
  height: 50rem;

  padding: 3rem 3rem 2rem;

  animation: ${scrollUp} .2s backwards;

  .cart-modal__header {

    margin-bottom: 1rem;

    .top-row {

      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      margin-bottom: 1rem;
    }

    .closeModal {

      background: transparent;
      border: none;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1.2rem;

      transition: background .3s ease-in;

      &:hover {

        background: #00000020;
      }

      img {

        width: 1.4rem;
      }
    }

    hr {

      background: #3335;
      border: none;
      border-radius: 1rem;

      height: .2rem;
      width: 100%;
    }
  }

  .cart-items-list {

    flex: 1;

    header {

      font-weight: 600;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: .8rem 0;
    }

    ul {

      max-height: 30rem;
      overflow-x: hidden;
      overflow-y: auto;

      &.empty {

        &::after {

          content: 'Cart is empty!';

          display: flex;
          align-items: center;
          justify-content: center;

          height: 20rem;
          width: 100%;
        }
      }
    }

    .cart-item {

      display: flex;
      align-items: center;

      height: 6rem;

      margin-top: 1rem;

      .cart-item__image {

        border-radius: 1rem;

        height: 5.6rem;
        width: 5.6rem;

        margin-right: 1rem;

        overflow: hidden;

        img {

          object-fit: cover;

          height: 100%;
          width: 100%;
        }
      }

      .cart-item__info {

        flex: 1;

        padding: .5rem 0;

        h4 {

          margin-bottom: .5rem;
        }

        .pricing {

          display: flex;
          align-items: center;

          div {

            display: flex;
            align-items: flex-end;

            margin-right: .4rem;
          }
        }

        span {

          margin-right: .5rem;
        }

        input {

          border: solid .3rem #89bd23;
          border-radius: 1rem;
          outline: none;

          width: 4rem;

          padding: .2rem 0 .2rem .4rem;
          margin: 0 .2rem ;
        }
      }

      .delete-item {

        background: transparent;
        border: none;
        border-radius: 1rem;

        height: 4rem;
        width: 4rem;

        transition: background .3s ease-in;

        &:hover {

          background: #00000020;
        }
      }

      &:first-child {

        margin-top: 0;
      }
    }
  }

  .go-to-cart {

    background: #89bd23;
    border: none;
    border-radius: 1rem;
    color: #f8f8f2;
    font-size: 1.4rem;
    font-weight: 600;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 4rem;
    width: 100%;

    transition: background .3s ease-in;

    &:hover {

      background: #8bc34a;
    }
  }
`;

export {
  PageContainer,
  Header,
  ProductsContainer,
  ProductContainer,
  ModalOverlay,
  ModalContainer,
};
