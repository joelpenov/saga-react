import React, { Component } from "react";
import SpinnerComponent from "./spinner/SpinnerComponent";
import { connect } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";
import {
  requestDecrementProductQuantity,
  requestIncrementProductQuantity
} from "../redux/actions/product/productActions";

class ProductDetailComponent extends Component {
  productDetailsAreLoaded(name) {
    return !!name;
  }

  handleIncrementQuantity() {}

  render() {
    const {
      quantity,
      product,
      id,
      canChangeQuantity,
      requestIncrementProductQuantity,
      requestDecrementProductQuantity,
      price
    } = this.props;
    const { name, description } = product;

    if (!this.productDetailsAreLoaded(name)) {
      return (
        <div className="info_item">
          <div className="col-12 text-center text-sm-left">
            <SpinnerComponent />
          </div>
        </div>
      );
    }
    if (this.productDetailsAreLoaded(name)) {
      return (
        <div className="info_item">
          <div className="col-12 text-center text-sm-left">
            <span className="name lead">{name}</span>
            <br />
            {price && <span className="text-muted">${price}</span>}
            {!price && this.productDetailsAreLoaded(name) && (
              <SpinnerComponent />
            )}
            <br />
            <span className="text-muted small">{description}</span>
            <br />
          </div>
          <div className="qty col-12  text-center text-sm-left">
            <span>Quantity:</span>
            <span
              onClick={() =>
                canChangeQuantity && requestDecrementProductQuantity(id)
              }
              className="minus bg-dark"
            >
              -
            </span>
            <input
              style={{ marginTop: "-2px" }}
              type="number"
              className="count"
              name="qty"
              onChange={() => {}}
              value={quantity}
            />
            <span
              onClick={() =>
                canChangeQuantity && requestIncrementProductQuantity(id)
              }
              className="plus bg-dark"
            >
              +
            </span>
          </div>
          <hr />
        </div>
      );
    }
  }
}

const mapStateToProps = (
  { products, fetchQuantityStatus, cartProductIds },
  ownProps
) => {
  let price;
  const prodId = cartProductIds.find(x => x.id === ownProps.id);
  if (prodId) {
    price = prodId.price;
  }
  return {
    product: products.find(x => x.id === ownProps.id) || {},
    canChangeQuantity:
      fetchQuantityStatus === actionTypes.PRODUCT_QUANTITY_FETCH_DONE,
    price
  };
};

const mapDispatchToProps = {
  requestDecrementProductQuantity,
  requestIncrementProductQuantity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailComponent);
