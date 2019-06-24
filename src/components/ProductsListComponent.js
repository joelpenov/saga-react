import React from "react";
import SummaryComponent from "./SummaryComponent";
import ProductDetailComponent from "./ProductDetailComponent";
import ClientInfoComponent from "./ClientInfoComponent";
import { connect } from "react-redux";

const ProductsListComponent = ({ cartProductIds, employeeAvailability }) => {
  return (
    <section className="course_details_area">
      <div className="row">
        <div className="header-title-brand col-lg-12 header-title-brand ">
          <h1>Arias's Shop</h1>
          <ClientInfoComponent />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 course_details_left">
          <div className="main_image">
            <div className="contact_info">
              {cartProductIds.length === 0 && <p>Loading products...</p>}
              {cartProductIds.map(p => {
                return (
                  <ProductDetailComponent
                    quantity={p.quantity}
                    id={p.id}
                    key={p.id}
                  />
                );
              })}
            </div>
          </div>
          <div className="info_item  text-center text-sm-left">
            <small
              style={
                employeeAvailability
                  ? {
                      color: "forestgreen",
                      fontWeight: "bold"
                    }
                  : {}
              }
            >
              Customer support is {!employeeAvailability && <span>not</span>}{" "}
              available now.
            </small>
          </div>
        </div>
        <SummaryComponent subTotal={0} total={0} shipping={0} tax={0} />
      </div>
    </section>
  );
};

const mapStateToProps = ({ cartProductIds, employeeAvailability }) => {
  return {
    cartProductIds,
    employeeAvailability
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListComponent);
