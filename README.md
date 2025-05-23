
# 🐄 CattleSense: IoT-Based Cattle Health Monitoring System

CattleSense is an advanced IoT-powered web platform designed to remotely monitor the health and activity of cattle. By integrating smart cattle ties equipped with sensors, the system continuously tracks vital health metrics and behavioral patterns, storing and visualizing data on a responsive and user-friendly web interface. This enables farm owners and caretakers to manage cattle more efficiently and ensure timely medical attention when needed.

## 📌 Features

- 🔗 **IoT Integration**: Smart cattle ties collect real-time health data (e.g., temperature, movement, pulse).
- 🌐 **Web Dashboard**: View, manage, and monitor all cattle and sheds through an intuitive dashboard.
- 🐮 **Cattle Profiles**: Maintain detailed records for each cow including age, breed, medical history, etc.
- 🏠 **Shed Management**: Organize and manage multiple cattle sheds.
- 📊 **Real-time Monitoring**: Live updates on cattle health and movement alerts.
- 🔔 **Health Alerts**: Notifications for abnormal health metrics or inactivity.
- 📅 **Medical Logs**: Track vaccinations, treatments, and veterinary visits.

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB / MySQL (based on preference)
- **IoT Protocol**: MQTT / HTTP API for sensor communication
- **Authentication**: Firebase/Auth0
- **Hosting**: Firebase / Vercel (Frontend), Render / Heroku (Backend)

## 🏗️ Project Structure

```
CattleSense/
│
├── client/                # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/      # API service layer
│       └── App.jsx
│
├── server/                # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── iot-device/            # Microcontroller code for cattle tie (e.g., ESP32)
│   └── cattle-tie.ino
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (or MySQL if used)
- Arduino IDE (for IoT firmware)
- MQTT Broker (e.g., Mosquitto) if using MQTT

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/AbdullahAlNoman20/Cattle-Health
   cd CattleSense
   ```

2. **Install frontend & backend dependencies**
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. **Configure environment variables**
   - Create `.env` files in `client/` and `server/` with necessary API keys and DB configs.

4. **Run the development servers**
   ```bash
   cd client && npm run dev   # Start React app
   cd ../server && npm start  # Start Node.js server
   ```

5. **Upload IoT firmware**
   - Use Arduino IDE to upload `iot-device/cattle-tie.ino` to ESP32 or similar device.

## 📡 How It Works

1. **Data Collection**: Smart ties record sensor data (e.g., body temp, movement).
2. **Data Transmission**: Data sent via Wi-Fi/MQTT to backend server.
3. **Data Storage**: Server processes and stores data in database.
4. **Web Interface**: Users view real-time and historical cattle health data.

## 📷 Screenshots (Optional)

_Add screenshots of your web interface and IoT device setup here._

## 📖 Documentation

- [API Documentation](./server/docs/API.md)
- [IoT Device Setup Guide](./iot-device/README.md)
- [Database Schema](./server/docs/DB_SCHEMA.md)

## ✍️ Authors

- **Abdullah Al Noman** — [LinkedIn](https://www.linkedin.com/in/abdullah-al-noman-khu/)
- Collaborators: DIU

## 📝 License

This project is licensed under the MIT License.

---

🔍 **Note**: This system is currently in development. More features such as disease prediction, AI insights, and shed climate control will be added in future iterations.
