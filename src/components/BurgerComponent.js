import React, { Component } from "react";
import { connect } from "react-redux";
class BurgerComponent extends Component {
  renderBurger = ()=>{
    let {burger} = this.props;

    let items = []
    for(let item in burger){

      for(let index = 0; index < burger[item]; index++){

        items = [...items, <div className={item} key={Math.random().toString(36).substring(7)}></div>]
      }
    }
    return items;
  }
  render() {
    return (
      <div className="">
        <h2>cua hang burger cybersoft</h2>
        <div className="breadTop"></div>
        {this.renderBurger()}
        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burgerReducer.burger,
  };
};

export default connect(mapStateToProps)(BurgerComponent)
