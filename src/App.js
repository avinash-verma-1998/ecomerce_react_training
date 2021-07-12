import React from "react";
import HomePage from "./Components/Pages/HomePage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CategoryPage from "./Components/Pages/CategoryPage";
import ErrorPage from "./ErrorPage";
import { CartProvider } from "./cartContext";
import CheckoutPage from "./Components/Pages/CheckoutPage";
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/cart" exact component={CheckoutPage} />
            <Route path="/categories/:catid" exact component={CategoryPage} />
            <Route path="/" component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
