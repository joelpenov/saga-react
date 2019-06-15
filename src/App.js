import React, { Component } from "react";
import CartComponent from "./components/CartComponent";
import "./style/edustage.css";

export default class App extends Component {
  render() {
    const products = [];
    return <CartComponent products={products} />;
  }
}
