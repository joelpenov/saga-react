import React from "react";

const HeaderComponent = () => {
  return (
    <header className=" white-header">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a
            style={{ color: "#3a3937" }}
            className="navbar-brand"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.joeldev.net/"
          >
            <strong>joeldev.net</strong>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar" /> <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
