import { Switch, Route } from 'react-router-dom';

import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';

function Routes() {

  return (
    <Switch>
      <Route
        exact
        path="/"
        component={AllProductsPage}
      />
      <Route
        path="/cart"
        component={CartPage}
      />
    </Switch>
  );
}

export default Routes;
