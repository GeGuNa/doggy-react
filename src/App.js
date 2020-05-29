import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container-fluid p-2">
            <Route exact path="/" component={Home} />
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}
