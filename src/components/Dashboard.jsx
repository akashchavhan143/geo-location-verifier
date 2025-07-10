import React from "react";
import { Layout, Menu, Card, Row, Col } from "antd";

const Dashboard = () => {
  return (
    <div
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card
            title="Last 7 Days"
            style={{
              border: "1px solid rgba(0, 0, 255, 0.3)", // Faint blue border
              boxShadow: "2px 2px 10px rgba(0, 0, 255, 0.2)", // Blue shade effect
              borderRadius: "8px", // Optional: Rounded corners
            }}
          >
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            title="Last 1 month"
            style={{
              border: "1px solid rgba(0, 0, 255, 0.3)", // Faint blue border
              boxShadow: "2px 2px 10px rgba(0, 0, 255, 0.2)", // Blue shade effect
              borderRadius: "8px", // Optional: Rounded corners
            }}
          >
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            title="last 3 month"
            style={{
              border: "1px solid rgba(0, 0, 255, 0.3)", // Faint blue border
              boxShadow: "2px 2px 10px rgba(0, 0, 255, 0.2)", // Blue shade effect
              borderRadius: "8px", // Optional: Rounded corners
            }}
          >
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            title="last 6 month"
            style={{
              border: "1px solid rgba(0, 0, 255, 0.3)", // Faint blue border
              boxShadow: "2px 2px 10px rgba(0, 0, 255, 0.2)", // Blue shade effect
              borderRadius: "8px", // Optional: Rounded corners
            }}
          >
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            title="last 1 Year"
            style={{
              border: "1px solid rgba(0, 0, 255, 0.3)", // Faint blue border
              boxShadow: "2px 2px 10px rgba(0, 0, 255, 0.2)", // Blue shade effect
              borderRadius: "8px", // Optional: Rounded corners
            }}
          >
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            title="Card 1"
            style={{
              border: "1px solid rgba(0, 0, 255, 0.3)", // Faint blue border
              boxShadow: "2px 2px 10px rgba(0, 0, 255, 0.2)", // Blue shade effect
              borderRadius: "8px", // Optional: Rounded corners
            }}
          >
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            title="Card 1"
            style={{
              border: "1px solid rgba(0, 0, 255, 0.3)", // Faint blue border
              boxShadow: "2px 2px 10px rgba(0, 0, 255, 0.2)", // Blue shade effect
              borderRadius: "8px", // Optional: Rounded corners
            }}
          >
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            title="Card 1"
            style={{
              border: "1px solid rgba(0, 0, 255, 0.3)", // Faint blue border
              boxShadow: "2px 2px 10px rgba(0, 0, 255, 0.2)", // Blue shade effect
              borderRadius: "8px", // Optional: Rounded corners
            }}
          >
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
