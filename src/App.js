import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Similar from "./component/Similar";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container-fluid main">
            <Route exact path="/" component={Home} />
            <Route exact path="/similar/:breed" component={Similar} />
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}
