# Autonomous Greenhouse Monitoring System 🌿

A modern, professional web application for farmers to monitor their greenhouse microclimate in real-time. This system provides real-time and historical data for environmental factors (temperature, humidity, CO2, gases, pressure) with alerting and recommendations.

## Project Overview

This project delivers a Resilient, Low-Cost Greenhouse Climate Control and Monitoring Solution specifically engineered for the unique operational challenges within the agricultural sector. The system is designed to mitigate risks associated with seasonal fires, load shedding, water scarcity, and climate volatility.

## Features

### 🎯 Core Functionality
- **Real-time Monitoring Dashboard**: Display current readings for all sensors (temperature, humidity, CO2, etc.) in a clear, glanceable format
- **Historical Data Trends**: Charts/graphs to view data over selectable time periods (last hour, day, week)
- **Threshold Alerts**: Allow farm managers to set min/max values for parameters with visual alerts
- **Recommendations**: Provide simple, actionable text recommendations based on current data

### 🌿 User Interface
- Simple, intuitive, and easy for farmers to understand
- Modern and professional design avoiding unnecessary complexity
- Clear labels, large readable text, and intuitive visualizations
- Responsive design that works on both desktop and mobile devices

### 🔧 Technical Architecture
- **Frontend**: HTML, CSS, JavaScript (modular structure)
- **Data Handling**: Mock data system that can be easily swapped for Oracle Apex API
- **Sensor Integration**: Compatible with DHT22, BMP280, and MQ series sensors
- **Extensible Design**: Modular architecture for easy feature additions

## Project Structure

```
Autonomous-Greenhouse-main/
├── index.html                  # Main application file (production ready)
├── PROJECT_README.md           # This file
├── README.md                   # Original project documentation
├── frontend/                   # Modern Vite-based application (advanced version)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   │   ├── main.js
│   │   ├── App.js
│   │   ├── style.css
│   │   ├── app.js
│   │   ├── components/
│   │   │   ├── SensorCard.js
│   │   │   ├── Chart.js
│   │   │   ├── AlertSystem.js
│   │   │   └── RecommendationSystem.js
│   │   └── services/
│   │       └── DataService.js
│   └── README.md
├── DHT22_sensor.ino            # Temperature & Humidity sensor code
├── BMP280_sensor.ino           # Pressure sensor code
├── MQ135_sensor.ino            # Gas sensor code
├── 4MQ_sensors.ino             # Additional MQ sensors
├── 4Light&Flame_sensor         # Fire detection system
├── LDR_sensor                  # Light detection
├── HKD_FlameSensor             # Additional flame sensor
├── MQ2_sensor                  # Additional gas sensor
├── MQ5_sensor.ino              # Additional gas sensor
├── MQ7_sensor.ino              # CO detection sensor
└── ServerMotor/                # Motor control system
```

## Getting Started

### Quick Start (No Installation Required)
1. Open `index.html` directly in any modern web browser
2. The application will automatically start showing mock sensor data
3. Data updates every 5 seconds to simulate real-time monitoring

### Advanced Version (Requires Node.js)
1. Navigate to the `frontend` directory
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open browser to http://localhost:3000

## Integration with Oracle Apex

The application is designed with a mock data system that can be easily replaced with real Oracle Apex API integration.

To connect to the real Oracle Apex backend:

1. Locate the data service files:
   - Simple version: JavaScript functions in `index.html`
   - Advanced version: `src/services/DataService.js`

2. Replace the `mockDataGenerator()` function with actual API calls

3. Example integration point:
```javascript
// TODO: Replace with actual Oracle Apex API integration
async function fetchRealSensorData() {
  try {
    // This is where you would connect to your Oracle Apex API
    // const response = await fetch('YOUR_ORACLE_APEX_API_ENDPOINT');
    // const data = await response.json();
    // return data;
    
    // For now, return mock data
    return mockDataGenerator();
  } catch (error) {
    console.error('Error fetching sensor data:', error);
    // Return mock data as fallback
    return mockDataGenerator();
  }
}
```

## Hardware Integration

The system is designed to work with the following sensors:
- **DHT22**: Temperature and humidity monitoring
- **BMP280**: Barometric pressure and temperature
- **MQ Series**: Gas detection (MQ2, MQ5, MQ7, MQ135)
- **Flame Sensor**: Fire detection system
- **LDR**: Light detection

Each sensor has its own Arduino code file that can be uploaded to the NodeMCU microcontroller.

## Key Technical Features

### ⚡ Load Shedding Resilience (Power Autonomy)
- The NodeMCU utilizes Deep Sleep Mode (GPIO16→RST), reducing power draw to micro-amps
- Enables continuous monitoring during power outages
- Helps mitigate agricultural losses linked to energy disruptions

### 💧 Precision Water Management
- Calculates Vapor Pressure Deficit (VPD) using DHT22 sensor data
- Enables targeted irrigation by quantifying plant water stress
- Promotes sustainable water usage in response to rising irrigation demands

### 🛑 Local Safety Fail-Safe
- Includes a hardwired Emergency Button (via interrupt) allowing manual override of automated systems
- Ensures local control (e.g., forcing fan ON via Relay Module) even when network connectivity fails

### 🔥 Fire and Hazard Detection
- Integrates a Flame Sensor for early fire detection
- Automatically triggers buzzer alerts and relay-based responses to safeguard greenhouse environments

### 🧪 Cost-Effective Gas Safety
- Employs firmware-assisted rough calibration for MQ-series gas sensors
- Provides accurate gas safety alerts without the need for costly professional calibration

### 🔔 Real-Time Audible Alerts
- A Buzzer Module emits alerts when temperature, humidity, CO levels, or fire readings exceed critical thresholds
- Ensures farmers are promptly notified even during power or network interruptions

## Development Team

Developed by:
- **Ismail Abrahams**
- **Alyssa Jordan Krishna**
- **Stacey Rosenburg**
- **Xavier Jeniker**
- **Griffiths Moshoeshoe**
- **Enrique Thomas**

## Acknowledgment

Special thanks to **Lecturer Ruchen Wyngaard** for continuous guidance, mentorship, and for providing the project brief.

---

> 🌱 *Empowering sustainable agriculture through resilient, low-cost IoT innovation.*