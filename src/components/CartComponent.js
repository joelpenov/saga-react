import React from "react";

import HeaderComponent from "./HeaderComponent";
import ProductsListComponent from "./ProductsListComponent";

const CartComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <ProductsListComponent products={[]} />
    </div>
  );
};

export default CartComponent;
