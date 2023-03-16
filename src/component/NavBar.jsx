import React from "react";
import { FaSearch } from 'react-icons/fa'

export default function () {
  return (
    <div className="navBar_container">
      <div className="navBar_container_box">
        <img
          src="/images/btc.svg"
          alt="logo"
          className="navBar_container_box_logo"
        />
        <ul className="navBar_container_box_tab">
          <li className="navBar_container_box_tab">Home</li>
          <li>Posts</li>
          <li>Trending</li>
        </ul>
        <div className="navBar_container_box_search">
           <FaSearch />
          <input placeholder="Search Post..." />
        </div>
      </div>
    </div>
  );
}
