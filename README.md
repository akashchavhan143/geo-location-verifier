# 🗺️ Geo Location Verifier

**Geo Location Verifier** is a lightweight, browser-based tool designed to verify whether two uploaded images were captured at the same or nearby geographic location. Built using **React.js** and **Ant Design**, it uses EXIF metadata to extract GPS coordinates from images and compares them using the **Haversine formula**.

---

## 📌 Project Overview

In fields like **auditing, inspections, delivery services, journalism**, and **law enforcement**, image-based verification plays a crucial role. However, images can be reused or falsified by changing location metadata. This tool helps ensure **location-based authenticity** by validating if two images were taken within a 10-meter radius of each other.

---

## 🎯 Objectives

- ✅ Upload and analyze two images in the browser.
- ✅ Extract GPS coordinates using EXIF metadata.
- ✅ Convert coordinates to decimal format.
- ✅ Calculate the distance using the **Haversine formula**.
- ✅ Display verification result in meters.
- ✅ Show success or failure messages via pop-ups.
- ✅ Responsive and clean UI using **Ant Design**.

---

## 🧰 Tech Stack

| Technology | Description                         |
| ---------- | ----------------------------------- |
| React.js   | Frontend framework                  |
| Ant Design | UI component library                |
| EXIF.js    | Library to read image metadata      |
| JavaScript | Client-side logic and distance calc |

---

## ⚙️ Features

- 📸 Upload 2 images with GPS metadata.
- 📍 Extract location data from EXIF.
- 📐 Calculate distance between the image capture locations.
- ✅ Confirm if the images are within 10 meters.
- ⚡ Instant client-side processing (no backend).
- 🧭 Friendly error handling (e.g., missing GPS metadata).
- 💻 Fully responsive design.

---

## 🧪 How It Works

1. **Upload two images** from your device.
2. The app **extracts EXIF GPS data** (latitude & longitude).
3. GPS coordinates are **converted to decimal format**.
4. The **Haversine formula** calculates the distance.
5. If the distance is **≤ 10 meters**, it's a match!
6. The result is displayed with a message and distance info.

---

## 🔮 Future Enhancements

- 💾 Optional backend support to **store verification logs**.
- 📂 Bulk image comparison.
- 🛡️ Enhanced metadata validation & forgery detection.
- 🌐 Deploy as a PWA (Progressive Web App).

---
---

## 📸 Screenshots

| Feature/Screen                | Preview                                              |
|------------------------------|------------------------------------------------------|
| Image Upload Interface       | ![](screenshots/Screenshot%20(509).png)             |
| Metadata Extraction          | ![](screenshots/Screenshot%20(510).png)             |
| Distance Result Display      | ![](screenshots/Screenshot%20(511).png)             |
| Success Notification         | ![](screenshots/Screenshot%20(512).png)             |
| Missing GPS Warning          | ![](screenshots/Screenshot%20(513).png)             |
| Mobile View                  | ![](screenshots/Screenshot%20(514).png)             |
| Upload Section               | ![](screenshots/Screenshot%20(515).png)             |
| Drag and Drop UI             | ![](screenshots/Screenshot%20(516).png)             |
| Real-time Alerts             | ![](screenshots/Screenshot%20(517).png)             |
| Matched Coordinates View     | ![](screenshots/Screenshot%20(518).png)             |
| Mismatched Coordinates View  | ![](screenshots/Screenshot%20(519).png)             |
| Decimal Conversion Output    | ![](screenshots/Screenshot%20(520).png)             |
| UI Components Overview       | ![](screenshots/Screenshot%20(521).png)             |
| Parsed GPS Data              | ![](screenshots/Screenshot%20(522).png)             |
| Match Failed Message         | ![](screenshots/Screenshot%20(523).png)             |
| Console Debug Logs           | ![](screenshots/Screenshot%20(524).png)             |
| Theme Preview (Light/Dark)   | ![](screenshots/Screenshot%20(525).png)             |
| Final Output Screen          | ![](screenshots/Screenshot%20(526).png)             |
| Form Validation Alerts       | ![](screenshots/Screenshot%20(527).png)             |
| Haversine Formula Logic      | ![](screenshots/Screenshot%20(528).png)             |
| Complete Workflow            | ![](screenshots/Screenshot%20(529).png)             |

> 📂 Make sure all screenshots are saved in a `screenshots` folder within your GitHub repo.

## 🧑‍💻 How to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/geo-location-verifier.git
   ```
