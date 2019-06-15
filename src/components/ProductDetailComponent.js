import React, { Component } from "react";

export default class ProductDetailComponent extends Component {
  render() {
    const { name, price, description, quantity } = this.props;
    return (
      <div className="info_item">
        <div className="col-12 text-center text-sm-left">
          <span className="name lead">{name}</span>
          <br />
          <span className="text-muted">${price}</span>
          <br />
          <span className="text-muted small">{description}</span>
          <br />
        </div>
        <div className="qty col-12  text-center text-sm-left">
          <span>Quantity:</span>
          <span className="minus bg-dark">-</span>
          <input
            style={{ marginTop: "-2px" }}
            type="number"
            className="count"
            name="qty"
            onChange={() => {}}
            value={quantity}
          />
          <span className="plus bg-dark">+</span>
        </div>
        <hr />
      </div>
    );
  }
}
