import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const name = this.props.item.name;
    const price = this.props.item.priceInCents;
    const quantity = this.props.item.quantity;
    // const products = this.props.products

    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{name}</div>
          <div className="col-md-2">{price}</div>
          <div className="col-md-2">{quantity}</div>
        </div>
      </div>
    );
  }
}

export default CartItem;
