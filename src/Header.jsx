import React from "react";
import "../src/header/Header.css";
import logo from "./assets/coin.png";
import avatar from "./assets/avatar.png";
import { Bell, ChevronUp, ChevronDown, Settings } from "lucide-react";

function Header() {
  return (
    <header className="header-container">
      <div className="header-left-group">
        <img src={logo} alt="Logo" className="logo" />
        <div className="brand-text">
          <h1>Staikent<sup>®</sup></h1>
          <p>Top Staking Assets</p>
        </div>
        <div className="arrow-group">
          <ChevronUp size={12} />
          <ChevronDown size={12} />
        </div>
        <div className="user-info">
          <img src={avatar} alt="User Avatar" className="avatar" />
          <span>Ryan Crawford</span>
        </div>
        <button className="deposit-btn">
          Deposit <span>🔒</span>
        </button>
      </div>
      <div className="header-right">
        <button className="notification-btn">
          <Bell size={15} />
          <span className="badge">2</span>
        </button>
        <input type="text" className="search-box" placeholder="Search..." />
        <button className="settings-btn">
          <Settings size={15} />
          <span>Settings</span>
        </button>
      </div>
    </header>
  );
}


export default Header;