import React, { Component, Fragment } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Main from "./Layouts/Main";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
