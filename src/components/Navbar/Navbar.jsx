import React from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";
import profile from '../../assets/fawad.avif';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1>MORENT</h1>

        <div className="searchBar">
          <div className="search">
            <Icon className="searchIcon" icon="majesticons:search-line" />
            <input type="search" placeholder="Search something here" />
            <Icon className="searchIcon" icon="mi:filter" />
          </div>
        </div>

        <div className="iconsTray">
          <Icon className="trayIcon" icon="ion:heart-sharp" />
          <Icon className="trayIcon" icon="mdi:bell" />
          <Icon className="trayIcon" icon="ant-design:setting-filled" />
          <div className="profile">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
      <div className="searchBar_m">
          <div className="search_m">
            <Icon className="searchIcon" icon="majesticons:search-line" />
            <input type="search" placeholder="Search something here" />
          </div>
            <Icon className="searchIcon filter_m" icon="mi:filter" />
        </div>
    </>
  );
};

export default Navbar;
