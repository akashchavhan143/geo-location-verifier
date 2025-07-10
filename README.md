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

## 🚫 Limitations

- ❌ Requires valid GPS data in both images.
- ❌ No backend or database support (yet).
- ❌ Does not detect advanced forgeries like deepfakes.

---

## 🔮 Future Enhancements

- 💾 Optional backend support to **store verification logs**.
- 📂 Bulk image comparison.
- 🛡️ Enhanced metadata validation & forgery detection.
- 🌐 Deploy as a PWA (Progressive Web App).

---

## 🧑‍💻 How to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/geo-location-verifier.git
   ```
