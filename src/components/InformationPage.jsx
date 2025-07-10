import React, { useState } from "react";
import { Card, Typography, Steps, Button, Divider } from "antd";
import {
  UploadOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  ClearOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
  ZoomOutOutlined,
  ZoomInOutlined,
  EnvironmentFilled,
  EnvironmentTwoTone,
} from "@ant-design/icons";
import flowchart4 from "../assets/flowchart4.png";

const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;

const ApplicationInfoPage = () => {
  const [zoom, setZoom] = useState(0.3);

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 2)); // Max 2x zoom
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.2)); // Min 0.5x zoom
  };
  return (
    <div style={{ background: "#f9f9f9" }}>
      <Card
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          borderRadius: 12,
          border: "1px solid rgb(136, 184, 246)",
          background: "#ffffff",
          padding: "20px",
        }}
      >
        <Title
          level={3}
          style={{
            textAlign: "center",
            marginBottom: 8,
            color: "rgb(82, 123, 243)",
          }}
        >
          <EnvironmentTwoTone /> Geo Location Verifier of Images Application
        </Title>
        <Text
          type="secondary"
          style={{ display: "block", textAlign: "center", marginBottom: 24 }}
        >
          Ensure two images were taken from approximately the same location.
        </Text>

        <Paragraph>
          This application helps users verify whether two uploaded images were
          taken within close geographical proximity (within a 10-meter radius).
          It reads GPS metadata embedded in the images and compares the
          coordinates.
        </Paragraph>

        <Divider orientation="left">Steps to Use</Divider>

        <Steps direction="vertical" size="small" current={0}>
          <Step
            title="Upload Images"
            description="Upload two images with GPS metadata. The system checks if both contain valid location information."
            icon={<UploadOutlined />}
          />
          <Step
            title="Verify GPS Match"
            description="The app compares the latitude and longitude of both images to determine proximity."
            icon={<CheckCircleOutlined />}
          />
          <Step
            title="View Results"
            description="You will see if the images are considered a 'match' (within 10 meters) or 'not matched'."
            icon={<ExclamationCircleOutlined />}
          />
        </Steps>
        <hr />
        <Divider orientation="center">Actions</Divider>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          <Button type="default" icon={<UploadOutlined />}>
            Upload Images
          </Button>
          <ArrowRightOutlined style={{ fontSize: 16, alignSelf: "center" }} />
          <Button type="primary" icon={<CheckCircleOutlined />}>
            Verify GPS Match
          </Button>
          <ArrowRightOutlined style={{ fontSize: 16, alignSelf: "center" }} />
          <Button icon={<CheckCircleFilled />}>Get Result</Button>
          <ArrowRightOutlined style={{ fontSize: 16, alignSelf: "center" }} />
          <Button danger icon={<ClearOutlined />}>
            Clear All
          </Button>
        </div>

        <br />
        <br />
        <hr />
        <Divider orientation="center">Application Flow</Divider>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <Button
            onClick={handleZoomOut}
            icon={<ZoomOutOutlined />}
            style={{ marginRight: 8 }}
          >
            Zoom Out
          </Button>
          <Button onClick={handleZoomIn} icon={<ZoomInOutlined />}>
            Zoom In
          </Button>
        </div>
        <div
          style={{
            padding: 0,
            textAlign: "center",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={flowchart4}
            alt="Flowchart"
            style={{
              width: `${zoom * 100}%`,
              height: "auto",
              borderRadius: "8px",
              // display: "block",
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default ApplicationInfoPage;
