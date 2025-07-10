import React from "react";
import { Layout, Menu } from "antd";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  EnvironmentOutlined,
  DashboardFilled,
  FileAddOutlined,
  UsergroupAddOutlined,
  SignalFilled,
} from "@ant-design/icons";
import Dashboard from "./Dashboard";
import InformationPage from "./InformationPage";
import UserProfile from "./UserProfile";
import BottomNav from "./BottomNav";
import NotFound from "./NotFound";
import ImageUploadMainComp from "./ImageUploadMainComp";

const { Header, Sider, Content } = Layout;
const items = [
  {
    key: "1",
    icon: <DashboardFilled />,
    label: <Link to="/information">App Info</Link>,
  },

  {
    key: "4",
    icon: <EnvironmentOutlined />,
    label: <Link to="/geo-location">Geo Location Verifier</Link>,
  },
  {
    key: "3",
    icon: <UserOutlined />,
    label: <Link to="/profile">Profiles</Link>,
  },
];

const MainLayout = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          className="site-layout-background"
          style={{
            position: "sticky",
            top: "0px",
            zIndex: 1000,
            height: "70px",
            boxShadow: "0 4px 10px rgba(65, 70, 84, 0.62)",
            backgroundColor: "#001529", // Dark blue background
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            flexWrap: "wrap", // Makes content wrap on smaller screens
          }}
        >
          <h3
            style={{
              color: "#ffffff",

              margin: 0,
              fontWeight: "bold",
            }}
          >
            Geo Location Verifier of Images
          </h3>

          {/* Add menu or user section if needed */}
          {/* <div style={{ color: "#fff" }}>User</div> */}
        </Header>

        <Layout className="site-layout">
          <Sider
            collapsible
            width={180}
            collapsedWidth={50}
            className="sidebar"
          >
            <div className="logo" />
            <h1
              style={{
                color: "transparent",
                textAlign: "center",
              }}
            >
              Logo
            </h1>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={items}
            />
          </Sider>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/" element={<InformationPage />} />
              <Route path="/information" element={<InformationPage />} />
              <Route path="/home" element={<div>Home Content</div>} />
              <Route path="/geo-location" element={<ImageUploadMainComp />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/settings" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Content>
        </Layout>
        <BottomNav />
      </Layout>
    </Router>
  );
};

export default MainLayout;
