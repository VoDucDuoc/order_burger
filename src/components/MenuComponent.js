import React, { Component } from "react";
import { connect } from "react-redux";
import { tinhTongTien } from "../selector/burgerSelector";
import { add, sub } from "../action/burgerAction";
class MenuComponent extends Component {
  tinhTienItem = (name) => {
    let { burger, menu } = this.props;
    let tongTienItem = 0;
    for (let index in burger) {
      if (index === name) {
        tongTienItem += burger[index] * menu[index];
      }
    }
    return tongTienItem;
  };
  render() {
    return (
      <div>
        <h2>chon thuc an</h2>
        <table className="table">
          <thead>
            <tr>
              <th>thuc an</th>
              <th></th>
              <th>gia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>salad</td>
              <td>
                <button
                  onClick={() => {
                    this.props.add("salad");
                  }}
                  className="btn btn-success mr-1"
                >
                  +
                </button>
                <button onClick={()=>{
                  this.props.sub("salad")
                }} className="btn btn-danger">-</button>
              </td>
              <td>{this.tinhTienItem("salad")}</td>
            </tr>
            <tr>
              <td>cheese</td>
              <td>
                <button
                  onClick={() => {
                    this.props.add("cheese");
                  }}
                  className="btn btn-success mr-1"
                >
                  +
                </button>
                <button onClick={()=>{
                  this.props.sub('cheese')
                }} className="btn btn-danger">-</button>
              </td>
              <td>{this.tinhTienItem("cheese")}</td>
            </tr>
            <tr>
              <td>beef</td>
              <td>
                <button
                  onClick={() => {
                    this.props.add("beef");
                  }}
                  className="btn btn-success mr-1"
                >
                  +
                </button>
                <button onClick={()=>{
                  this.props.sub('beef')
                }} className="btn btn-danger">-</button>
              </td>
              <td>{this.tinhTienItem("beef")}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>tong tien</td>
              <td>{this.props.tinhTongTien}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="btn btn-primary">thanh toan</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burgerReducer.burger,
    menu: state.burgerReducer.menu,
    tinhTongTien: tinhTongTien(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: (name) => dispatch(add(name)),
    sub: (name) => dispatch(sub(name)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
