import React, { Component } from "react";
import { connect } from "react-redux";
import { buyLaptop, buyMobile, fetchUsers } from "../../redux/actions";
import "./index.css";

class Shop extends Component {
  //   state = {
  //     numOfLaptops: 100,
  //   };

  //   buyLaptop = () => {
  //     this.setState((prevState) => ({
  //       numOfLaptops: prevState.numOfLaptops - 1,
  //     }));
  //   };

  render() {
    const { numOfLaptops, numOfMobiles } = this.props;
    return (
      <div>
        <h1 className="title">Welcome to V SHOP</h1>
        <div className="items">
          <div className="item">
            <p>Dell Inspiron Laptop</p>
            <p>Available: {numOfLaptops}</p>
            <button
              type="button"
              className="button"
              onClick={this.props.buyLaptop}
            >
              Buy
            </button>
          </div>
          <div className="item">
            <p>Redme Note 8</p>
            <p>Available: {numOfMobiles}</p>
            <button
              type="button"
              className="button"
              onClick={this.props.buyMobile}
            >
              Buy
            </button>
          </div>
          <div className="item">
            <p>Get users data</p>
            <p>Count: {this.props.users.length}</p>
            <button
              type="button"
              className="button"
              onClick={this.props.fetchUsers}
            >
              Call Api
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  numOfLaptops: state.laptops.numOfLaptops,
  numOfMobiles: state.mobiles.numOfMobiles,
  users: state.users.users,
});
const mapDispatchToProps = dispatch => ({
  buyLaptop: () => dispatch(buyLaptop()),
  buyMobile: () => dispatch(buyMobile()),
  fetchUsers: () => dispatch(fetchUsers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
