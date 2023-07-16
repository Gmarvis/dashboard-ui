import React from "react";
import "../App.css";
import { SideBarData } from "./sidebarData";
import Products from "../pages/products";

const Sidebar = () => {
  return (
    <div className="mainContainer">
      <div className="Sidebar">
        <ul className="sidebarList">
          {SideBarData.map((val, key) => {
            return (
              <li
                className="row"
                key={key}
                onClick={() => (window.location.pathname = val.link)}
              >
                <div id="icon">{val?.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <Products />
    </div>
  );
};

export default Sidebar;
