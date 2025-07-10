import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BottomNav.css";
import {
  HomeOutlined,
  EnvironmentOutlined,
  UserOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
const BottomNav = () => {
  const [selected, setSelected] = useState("information");

  const navItems = [
    {
      key: "information",
      label: "App Info",
      icon: <InfoCircleOutlined />,
      path: "/information",
    },
    {
      key: "geo-location",
      label: "Location",
      icon: <EnvironmentOutlined />,
      path: "/geo-location",
    },
    {
      key: "profile",
      label: "Profile",
      icon: <UserOutlined />,
      path: "/profile",
    },
    {
      key: "settings",
      label: "Settings",
      icon: <SettingOutlined />,
      path: "/settings",
    },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <div
          key={item.key}
          className={`nav-item ${selected === item.key ? "selected" : ""}`}
          onClick={() => setSelected(item.key)}
        >
          <Link to={item.path}>
            <div className="icon">{item.icon}</div>
            <div className="label">{item.label}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BottomNav;
