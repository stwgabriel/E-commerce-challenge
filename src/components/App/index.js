import Routes from '../../routes';
import CartProvider from '../../contexts/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes />
      </CartProvider>
    </div>
  );
}

export default App;
