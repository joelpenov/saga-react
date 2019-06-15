import React from "react";
import SummaryComponent from "./SummaryComponent";
import ProductDetailComponent from "./ProductDetailComponent";
import ClientInfoComponent from "./ClientInfoComponent";
import SpinnerComponent from "./spinner/SpinnerComponent";

const ProductsListComponent = ({ products }) => {
  let counter = 0;
  return (
    <section className="course_details_area">
      <div className="row">
        <div className="header-title-brand col-lg-12 header-title-brand ">
          <h1>Arias's Shop</h1>
          <ClientInfoComponent clientInfo={undefined} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 course_details_left">
          <div className="main_image">
            <div className="contact_info">
              {products.length === 0 && <p>Loading produts...</p>}
              {products.map(p => {
                return (
                  <ProductDetailComponent
                    name={"Mousepad"}
                    description={"A unique technology at the reach of you"}
                    quantity={1}
                    price={54}
                    key={counter++}
                  />
                );
              })}
            </div>
          </div>
          <div className="info_item  text-center text-sm-left">
            <small>Available information here</small>
          </div>
        </div>
        <SummaryComponent subTotal={0} total={0} shipping={0} tax={0} />
      </div>
    </section>
  );
};

export default ProductsListComponent;
