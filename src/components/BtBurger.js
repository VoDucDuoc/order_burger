import React, { Component } from "react";
import BurgerComponent from "./BurgerComponent";
import MenuComponent from "./MenuComponent";
export default class BtBurger extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <BurgerComponent />
          </div>
          <div className="col-6">
            <MenuComponent />
          </div>
        </div>
      </div>
    );
  }
}
