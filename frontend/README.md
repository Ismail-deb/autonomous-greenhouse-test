# Greenhouse Monitoring Application

A modern, professional web application for farmers to monitor their greenhouse microclimate in real-time.

## Features

- **Real-time Monitoring Dashboard**: Display current readings for all sensors (temperature, humidity, CO2, etc.)
- **Historical Data Trends**: Charts/graphs to view data over selectable time periods
- **Threshold Alerts**: Visual alerts when values exceed user-defined thresholds
- **Recommendations**: Actionable text recommendations based on current data

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript (ES6 modules)
- **Build Tool**: Vite
- **Charting**: Chart.js
- **Date Handling**: date-fns

## Project Structure

```
frontend/
├── index.html          # Main HTML file
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
├── src/
│   ├── main.js         # Application entry point
│   ├── App.js          # Main application component
│   ├── style.css       # Global styles
│   ├── app.js          # Application logic
│   ├── components/
│   │   ├── SensorCard.js        # Sensor display components
│   │   ├── Chart.js             # Data visualization
│   │   ├── AlertSystem.js       # Alert management
│   │   └── RecommendationSystem.js # Recommendation engine
│   └── services/
│       └── DataService.js       # Data handling (mock data for now)
```

## Setup and Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Development Server**:
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:3000

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## Integration with Oracle Apex

The application is designed with a mock data system that can be easily replaced with real Oracle Apex API integration. 

To connect to the real Oracle Apex backend:

1. Locate the `DataService.js` file in `src/services/`
2. Replace the `mockDataGenerator()` function with actual API calls
3. Update the `fetchRealSensorData()` function with your Oracle Apex endpoint

Example integration points are marked with `TODO` comments throughout the codebase.

## Customization

### Thresholds
Users can set custom thresholds for each sensor parameter through the UI controls. These thresholds determine when alerts and warnings are displayed.

### Styling
The application uses a clean, modern design optimized for agricultural environments. Styles can be customized in `src/style.css`.

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on desktop and mobile devices

## License
This project is part of the IFS325 Group Project - ARC Smart Agriculture.