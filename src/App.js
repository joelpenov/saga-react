import React, { Component } from "react";
import { Provider } from "react-redux";
import configStore from "./redux/configStore";

import CartComponent from "./components/CartComponent";
import "./style/edustage.css";
import initialState from "./redux/initialState";
import { getUserInfoAction } from "./redux/actions/userInfo/userInfoActions";
import io from "socket.io-client";
window.io = io;

const store = configStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CartComponent products={initialState.products} />
      </Provider>
    );
  }
}

store.dispatch(getUserInfoAction("U10000"));

/*
TODO: 
Checkout
validateUserCart /cart/validate/{userid}
validateUserCreditCard /card/validate/{userid}
performpurchase card/charge/{userid}

*/
