import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header/>
        <div className="container-fluid">
          <Home />
        </div>
        <Footer/>
      </Provider>
    );
  }
}
