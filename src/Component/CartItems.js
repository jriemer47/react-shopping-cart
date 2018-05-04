import React, { Component } from 'react';
import CartItem from './CartItem';

class CartItems extends Component {
  render() {
    const { cartItems } = this.props;
    console.log('what are these props = ', this.props);

    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {this.props.cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state, props) => {
//   return {
//     items: state.items.filter(item => item.id === props.id)
//   }
// }

export default CartItems;
