import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Components/Header';
import { ProductGallery } from './Components/ProductGallery';
import { ProductItem } from './Components/ProductItem';
import { Cart } from './Components/Cart';
import { CartProvider } from './Context/CartState';

export const RouterConfig = () => {
    return (
        <React.Fragment>
            <Router>
                <CartProvider>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ProductGallery} />
                        <Route exact path="/products" component={ProductGallery} />
                        <Route exact path="/cart" component={Cart} />
                        <Route path="/products/:id" component={ProductItem} />
                        <Route path="*" component={() => <h2>404 Not Found</h2>} />
                    </Switch>
                </CartProvider>
            </Router>
        </React.Fragment>
    )
}
