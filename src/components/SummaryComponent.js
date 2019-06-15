import React, { Component } from "react";
import SpinnerComponent from "./spinner/SpinnerComponent";

export default class SummaryComponent extends Component {
  render() {
    let { subTotal, shipping, tax, total } = this.props;
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
                {!(total > 0) && <SpinnerComponent />}
                {total > 0 && <span>${total}</span>}
              </span>
            </span>
          </li>
        </ul>
        <span
          id="enroll-botton"
          href="#"
          className="primary-btn2 text-uppercase enroll rounded-0 text-white"
        >
          Check out
        </span>
      </div>
    );
  }
}
