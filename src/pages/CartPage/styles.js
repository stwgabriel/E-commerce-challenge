import styled from 'styled-components';

const Container = styled.div`

  main {

    background: #fff;
    box-shadow: 0 0 1.5rem #0001;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;

    width: min(100%, 90rem);
    min-height: 40rem;

    padding: 4rem;
    margin: 8rem auto 5rem;

    .cart__header {

      border-bottom: solid .2rem ;

      padding-bottom: 1rem;
      margin-bottom: 5rem;

      a {

        color: #333;
        font-size: 1.8rem;
        text-decoration: none;

        display: block;

        margin-bottom: 2rem;

        transition: font-size .3s ease-in;

        &:hover {

          font-size: 1.9rem;
          font-weight: 700;
        }
      }

      .bottom-row {

        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    ul {

      flex: 1;
    }

    .cart-item {

      font-size:1.8rem;

      display: flex;
      align-items: center;

      height: fit-content;

      margin: 1rem 0;

      .cart-item__image {

        border-radius: 1rem;

        height: 8rem;
        width: 8rem;

        margin-right: 2rem;

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

          font-size: 2rem;
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
          font-size:1.8rem;
          outline: none;

          width: 6rem;

          padding: .2rem 0 .2rem .4rem;
          margin: 0 .2rem ;
        }
      }

      .delete-item {

        background: transparent;
        border: none;
        border-radius: 1rem;

        height: 6rem;
        width: 6rem;

        margin: auto;

        transition: background .3s ease-in;

        img {

          width: 30%;
        }

        &:hover {

          background: #00000010;
        }
      }

      &:first-child {

        margin-top: 0;
      }
    }

    button {

      background: #89bd23;
      border: none;
      border-radius: 1rem;
      color: #f8f8f2;
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;
      bottom: 0;

      height: 6rem;
      width: 100%;

      margin-top: 5rem;

      transition: background .3s ease-in;

      &:hover {

        background: #8bc34a;
      }
    }
  }

  @media (max-width: 700px) {

    main {

      padding: 4rem 2rem;
      margin: 5rem auto;

      .cart-item {

        .cart-item__info {

          input {

            width:4.5rem;
          }
        }
      }
    }
  }
`;

const Header = styled.header`

 background: #fff;
 box-shadow: 0px 0px 2.5rem #00000015;

 display: flex;
 align-items: center;
 justify-content: center;

 min-height: 10rem;
 width: 100%;

 padding: 1rem 2rem;

 z-index: 500;

 h1#logo-frexco {

  img {

    width: 12rem;
  }
 }
`;

export { Container, Header };
