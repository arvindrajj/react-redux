import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators } from "../../redux/index";
import "./index.css";

const VShop = (props) => {
  const users = useSelector((state) => state.users.users);
  const numOfLaptops = useSelector((state) => state.laptops.numOfLaptops);
  const numOfMobiles = useSelector((state) => state.mobiles.numOfMobiles);
  const dispatch = useDispatch();
  const {buyLaptop, buyMobile, fetchUsers} = bindActionCreators(actionsCreators, dispatch)
  return (
    <div>
      <h1 className="title">Welcome to V SHOP</h1>
      <div className="items">
        <div className="item">
          <p>Dell Inspiron Laptop</p>
          <p>Available: {numOfLaptops}</p>
          <button type="button" className="button" onClick={buyLaptop}>
            Buy
          </button>
        </div>
        <div className="item">
          <p>Redme Note 8</p>
          <p>Available: {numOfMobiles}</p>
          <button type="button" className="button" onClick={buyMobile}>
            Buy
          </button>
        </div>
        <div className="item">
          <p>Get users data</p>
          <p>Count: {users.length}</p>
          <button type="button" className="button" onClick={fetchUsers}>
            Call Api
          </button>
        </div>
      </div>
    </div>
  );
};

export default VShop;
