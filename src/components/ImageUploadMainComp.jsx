import React, { useState } from "react";
import {
  Upload,
  Button,
  notification,
  Table,
  Card,
  Space,
  Typography,
} from "antd";
import {
  UploadOutlined,
  ClearOutlined,
  ExclamationCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import EXIF from "exif-js";

const { Title } = Typography;

const ImageUploadMainComp = () => {
  const [images, setImages] = useState([]);
  const [result, setResult] = useState(null);

  const openNotification = (type, title, description) => {
    notification[type]({
      message: title,
      description,
      placement: "topRight",
      showProgress: true,
    });
  };

  const handleUpload = async () => {
    if (images.length !== 2) {
      openNotification(
        "error",
        "Upload Error",
        "Please upload exactly two images.",
        <ExclamationCircleOutlined style={{ color: "red" }} />
      );
      return;
    }

    try {
      const location1 = await extractLocation(images[0].originFileObj);
      const location2 = await extractLocation(images[1].originFileObj);

      if (!location1 || !location2) {
        openNotification(
          "error",
          "GPS Data Missing",
          "Both images must contain GPS metadata.",
          <ExclamationCircleOutlined style={{ color: "red" }} />
        );
        return;
      }

      const distance = calculateDistance(
        location1.latitude,
        location1.longitude,
        location2.latitude,
        location2.longitude
      );

      const match = distance <= 10;
      setResult({ match, distance });

      if (match) {
        openNotification(
          "success",
          "Images Matched!",
          "Images are within 10 meters of each other."
        );
      } else {
        openNotification(
          "error",
          "Images Do Not Match",
          `Distance is ${distance.toFixed(2)} meters.`,
          <ClearOutlined style={{ color: "orange" }} />
        );
      }
    } catch (error) {
      openNotification(
        "error",
        "Processing Failed",
        "An error occurred while processing images.",
        <ExclamationCircleOutlined style={{ color: "red" }} />
      );
      console.error(error);
    }
  };

  const handleClear = () => {
    setImages([]);
    setResult(null);
    openNotification(
      "info",
      "Cleared",
      "All uploaded images and results are cleared.",
      <ClearOutlined style={{ color: "#1890ff" }} />
    );
  };

  const extractLocation = (image) => {
    return new Promise((resolve) => {
      EXIF.getData(image, function () {
        const lat = EXIF.getTag(this, "GPSLatitude");
        const lon = EXIF.getTag(this, "GPSLongitude");
        const latRef = EXIF.getTag(this, "GPSLatitudeRef");
        const lonRef = EXIF.getTag(this, "GPSLongitudeRef");

        if (lat && lon && latRef && lonRef) {
          const latitude = convertDMSToDecimal(lat, latRef);
          const longitude = convertDMSToDecimal(lon, lonRef);
          resolve({ latitude, longitude });
        } else {
          resolve(null);
        }
      });
    });
  };

  const convertDMSToDecimal = (dms, ref) => {
    const [deg, min, sec] = dms;
    let decimal = deg + min / 60 + sec / 3600;
    return ref === "S" || ref === "W" ? -decimal : decimal;
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3;
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(Δφ / 2) ** 2 +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const handleBeforeUpload = async (file) => {
    const hasGPS = await new Promise((resolve) => {
      EXIF.getData(file, function () {
        const lat = EXIF.getTag(this, "GPSLatitude");
        const lon = EXIF.getTag(this, "GPSLongitude");
        const latRef = EXIF.getTag(this, "GPSLatitudeRef");
        const lonRef = EXIF.getTag(this, "GPSLongitudeRef");
        resolve(lat && lon && latRef && lonRef);
      });
    });

    if (!hasGPS) {
      openNotification(
        "warning",
        "Invalid Image",
        `${file.name} does not contain GPS data.`,
        <ExclamationCircleOutlined style={{ color: "orange" }} />
      );
      return Upload.LIST_IGNORE;
    }

    return false;
  };

  const columns = [
    { dataIndex: "field", key: "field" },
    { dataIndex: "value", key: "value" },
  ];

  const dataSource = result
    ? [
        {
          key: "1",
          field: "Match Status",
          value: result.match ? "✅ Matched" : "❌ Not Matched",
        },
        {
          key: "2",
          field: "Distance (meters)",
          value: result.distance.toFixed(2) + "  m",
        },
      ]
    : [];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",

        textAlign: "center",
      }}
    >
      <Card
        style={{
          maxWidth: 800,
          width: "100%",

          border: "1px solid rgb(0, 136, 255)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          borderRadius: "15px",
        }}
        title={
          <Title
            level={3}
            style={{ textAlign: "center", color: "rgb(66, 123, 238)" }}
          >
            <EnvironmentOutlined style={{ marginRight: "10px" }} />
            Verify Image GPS Match
          </Title>
        }
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Upload
            listType="picture"
            beforeUpload={handleBeforeUpload}
            multiple
            onChange={({ fileList }) => setImages(fileList)}
            fileList={images}
          >
            <Button icon={<UploadOutlined />} type="default">
              Upload Images
            </Button>
          </Upload>

          <Space>
            <Button
              type="primary"
              onClick={handleUpload}
              disabled={images.length !== 2}
            >
              Verify Images
            </Button>

            {result && (
              <Button danger icon={<ClearOutlined />} onClick={handleClear}>
                Clear All
              </Button>
            )}
          </Space>

          {result && (
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              style={{ marginTop: 24 }}
            />
          )}
        </Space>
      </Card>
    </div>
  );
};

export default ImageUploadMainComp;

// import React, { useState } from "react";
// import {
//   Upload,
//   Button,
//   message,
//   notification,
//   Table,
//   Card,
//   Row,
//   Col,
// } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import EXIF from "exif-js";

// const ImageUploadWithoutBackend = () => {
//   const [images, setImages] = useState([]);
//   const [result, setResult] = useState(null);

//   const handleUpload = async () => {
//     if (images.length !== 2) {
//       message.error("Please upload exactly two images.");
//       console.log("Please upload exactly two images.");
//       return;
//     }

//     try {
//       // Extract GPS data from both images asynchronously
//       const location1 = await extractLocation(images[0].originFileObj);
//       const location2 = await extractLocation(images[1].originFileObj);

//       if (!location1) {
//         message.error("The first image does not contain GPS data.");
//         console.log("No GPS data found in the first image.");
//         return;
//       }

//       if (!location2) {
//         message.error("The second image does not contain GPS data.");
//         console.log("No GPS data found in the second image.");
//         return;
//       }

//       // Calculate the distance between the two locations
//       const distance = calculateDistance(
//         location1.latitude,
//         location1.longitude,
//         location2.latitude,
//         location2.longitude
//       );

//       const match = distance <= 10; // Distance threshold in meters

//       setResult({ match, distance });
//       if (match) {
//         notification.success({
//           message: "Images match successfully!",
//           description: `The images are within 10 meters of each other.`,
//         });
//       } else {
//         notification.error({
//           message: "Images do not match.",
//           description: `The distance between the images is ${distance.toFixed(
//             2
//           )} meters.`,
//         });
//       }
//     } catch (error) {
//       message.error("An error occurred while processing the images.");
//       console.error("Error during image processing:", error);
//     }
//   };

//   const extractLocation = (image) => {
//     return new Promise((resolve, reject) => {
//       EXIF.getData(image, function () {
//         const lat = EXIF.getTag(this, "GPSLatitude");
//         const lon = EXIF.getTag(this, "GPSLongitude");

//         if (lat && lon) {
//           resolve({
//             latitude: convertDMSToDecimal(lat),
//             longitude: convertDMSToDecimal(lon),
//           });
//         } else {
//           reject("No location data found.");
//         }
//       });
//     });
//   };

//   const convertDMSToDecimal = (dms) => {
//     if (!dms || dms.length !== 3) return null;
//     const [deg, min, sec] = dms;
//     return deg + min / 60 + sec / 3600;
//   };

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371e3; // Earth radius in meters
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in meters
//     return distance;
//   };

//   const columns = [
//     { title: "Field", dataIndex: "field", key: "field" },
//     { title: "Value", dataIndex: "value", key: "value" },
//   ];

//   const dataSource = result
//     ? [
//         {
//           key: "1",
//           field: "Match Status",
//           value: result.match ? "Matched" : "Not Matched",
//         },
//         {
//           key: "2",
//           field: "Distance (meters)",
//           value: result.distance,
//         },
//         {
//           key: "3",
//           field: "Distance (meters)",
//           value: result.distance.toFixed(2),
//         },
//       ]
//     : [];
//   return (
//     <div
//       style={{
//         display: "flex", // Use flexbox for centering
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f5f5f5",
//         padding: "20px",
//         // minHeight: "90vh", // Optional: center vertically
//         boxSizing: "border-box",
//       }}
//     >
//       <Card
//         title="Verify Location"
//         style={{
//           maxWidth: "900px",
//           width: "100%", // Ensures responsiveness
//           textAlign: "center",
//           border: "2px solid red",
//           boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Upload
//           listType="picture"
//           beforeUpload={() => false}
//           onChange={({ fileList }) => setImages(fileList)}
//           multiple
//         >
//           <Button icon={<UploadOutlined />}>Upload Images</Button>
//         </Upload>
//         <Button
//           type="primary"
//           onClick={handleUpload}
//           style={{ marginTop: "10px" }}
//           disabled={images.length !== 2}
//         >
//           Verify images
//         </Button>
//         {result && (
//           <Table
//             dataSource={dataSource}
//             columns={columns}
//             style={{ marginTop: "20px" }}
//             pagination={false}
//           />
//         )}
//       </Card>
//     </div>
//   );
// };

// export default ImageUploadWithoutBackend;

// import React, { useState } from "react";
// import {
//   Upload,
//   Button,
//   message,
//   notification,
//   Table,
//   Card,
//   Row,
//   Col,
// } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import EXIF from "exif-js";

// const ImageUploadWithoutBackend = () => {
//   const [images, setImages] = useState([]);
//   const [result, setResult] = useState(null);

//   const handleUpload = () => {
//     if (images.length !== 2) {
//       message.error("Please upload exactly two images.");
//       return;
//     }

//     // Extract GPS data from both images
//     const location1 = extractLocation(images[0].originFileObj);
//     const location2 = extractLocation(images[1].originFileObj);

//     if (!location1 || !location2) {
//       message.error("One or both images do not contain location metadata.");
//       console.log("One or both images do not contain location metadata.");
//       return;
//     }

//     // Calculate the distance between the two locations
//     const distance = calculateDistance(
//       location1.latitude,
//       location1.longitude,
//       location2.latitude,
//       location2.longitude
//     );

//     const match = distance <= 10; // Distance threshold in meters

//     setResult({ match, distance });
//     if (match) {
//       notification.success({
//         message: "Images match successfully!",
//         description: `The images are within 10 meters of each other.`,
//       });
//     } else {
//       notification.error({
//         message: "Images do not match.",
//         description: `The distance between the images is ${distance.toFixed(
//           2
//         )} meters.`,
//       });
//     }
//   };

//   const extractLocation = (image) => {
//     let location = null;

//     EXIF.getData(image, function () {
//       const lat = EXIF.getTag(this, "GPSLatitude");
//       const lon = EXIF.getTag(this, "GPSLongitude");

//       if (lat && lon) {
//         location = {
//           latitude: convertDMSToDecimal(lat),
//           longitude: convertDMSToDecimal(lon),
//         };
//       }
//     });

//     return location;
//   };

//   const convertDMSToDecimal = (dms) => {
//     if (!dms || dms.length !== 3) return null;
//     const [deg, min, sec] = dms;
//     return deg + min / 60 + sec / 3600;
//   };

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371e3; // Earth radius in meters
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in meters
//     return distance;
//   };

//   const columns = [
//     { title: "Field", dataIndex: "field", key: "field" },
//     { title: "Value", dataIndex: "value", key: "value" },
//   ];

//   const dataSource = result
//     ? [
//         {
//           key: "1",
//           field: "Match Status",
//           value: result.match ? "Matched" : "Not Matched",
//         },
//         {
//           key: "2",
//           field: "Distance (meters)",
//           value: result.distance,
//         },
//       ]
//     : [];

//   return (
//     <div style={{ padding: "20px" }}>
//       <Row>
//         <Col
//           xs={24}
//           md={12}
//           style={{
//             backgroundColor: "lightblue",
//             border: "2px",
//             borderBlockColor: "black",
//           }}
//         >
//           <Card title={"Verify"}>
//             <Upload
//               listType="picture"
//               beforeUpload={() => false}
//               onChange={({ fileList }) => setImages(fileList)}
//               multiple
//             >
//               <Button icon={<UploadOutlined />}>Upload Images</Button>
//             </Upload>
//             <Button
//               type="primary"
//               onClick={handleUpload}
//               style={{ marginTop: "10px" }}
//               disabled={images.length !== 2}
//             >
//               Verify images
//             </Button>
//             {result && (
//               <Table
//                 dataSource={dataSource}
//                 columns={columns}
//                 style={{ marginTop: "20px" }}
//                 pagination={false}
//               />
//             )}
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default ImageUploadWithoutBackend;
