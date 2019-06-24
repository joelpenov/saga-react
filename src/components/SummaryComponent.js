import React, { Component } from "react";
import SpinnerComponent from "./spinner/SpinnerComponent";
import { connect } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";

class SummaryComponent extends Component {
  render() {
    let { subTotal, shipping, tax, requestInProgress } = this.props;
    const total = subTotal + shipping + tax;
    const canDisplayTotal = subTotal > 0 && shipping > 0 && tax > 0;
    return (
      <div className="col-lg-6 right-contents">
        <h3>Order summary</h3>
        <ul>
          <li>
            <span className="justify-content-between d-flex" href="#">
              <p>Sub total</p>
              <span className="or">
                {!(subTotal > 0) && <SpinnerComponent />}
                {subTotal > 0 && <span>${subTotal}</span>}
              </span>
            </span>
          </li>
          <li>
            <span className="justify-content-between d-flex" href="#">
              <p>Shipping</p>
              <span className="or">
                {!(shipping > 0) && <SpinnerComponent />}
                {shipping > 0 && <span>${shipping}</span>}
              </span>
            </span>
          </li>
          <li>
            <span className="justify-content-between d-flex" href="#">
              <p>Tax</p>
              <span className="or">
                {!(tax > 0) && <SpinnerComponent />}
                {tax > 0 && <span>${tax}</span>}
              </span>
            </span>
          </li>
          <li>
            <span className="justify-content-between d-flex">
              <p>Total</p>
              <span className="or">
                {!canDisplayTotal && <SpinnerComponent />}
                {canDisplayTotal && <span>${total}</span>}
              </span>
            </span>
          </li>
        </ul>
        <button
          className="primary-btn2 text-uppercase enroll rounded-0 text-white"
          id="enroll-botton"
          disabled={!requestInProgress}
          onClick={() => {
            console.log("click");
          }}
        >
          Check out
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({
  cartProductIds,
  shipping,
  fetchingRequest,
  tax
}) => {
  let subTotal;
  if (cartProductIds.length > 0) {
    let allPricesSet = true;
    subTotal = cartProductIds.reduce((currentSubTotal, currentProduct) => {
      if (!allPricesSet) return 0;
      if (!currentProduct.price) {
        allPricesSet = false;
        return 0;
      }
      return currentProduct.price * currentProduct.quantity + currentSubTotal;
    }, 0);
  }
  return {
    subTotal,
    shipping,
    tax,
    requestInProgress: fetchingRequest === actionTypes.FETCH_REQUEST_DONE
  };
};

export default connect(mapStateToProps)(SummaryComponent);
