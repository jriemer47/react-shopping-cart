import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CartHeader from './Component/CartHeader';
import CartFooter from './Component/CartFooter';
import CartItems from './Component/CartItems';
import CartItem from './Component/CartItem';

const baseURL = 'http://localhost:8082/api';

class App extends Component {
  state = {
    cartItems: []
  };

  async componentDidMount() {
    const itemsResponse = await fetch(`${baseURL}/items`);
    const productsResponse = await fetch(`${baseURL}/products`);
    const itemsArray = await itemsResponse.json();
    const productsArray = await productsResponse.json();

    // this.setState({ items: itemsJson, products: productsJson });
    // const productsArray = this.state.products;
    // const itemsArray = this.state.items;
    console.log(itemsArray, 'itemsArray');
    console.log(productsArray, 'productsArray');

    const cartItems = itemsArray.map(item => {
      let product = productsArray.find(product => {
        return product.id === item.product_id;
      });
      return { ...product, quantity: item.quantity };
      // console.log(`Product for this id ${item.product_id}`, product);
    });
    console.log('cartItems', cartItems);
    this.setState({
      cartItems: cartItems
    });
  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItems={this.state.cartItems} />
        <CartFooter />
      </div>
    );
  }
}

export default App;
