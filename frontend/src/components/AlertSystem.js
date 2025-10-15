// Alert system for threshold monitoring
export function createAlerts(sensorData) {
  // Default thresholds (these would be user-configurable)
  const thresholds = {
    temperature: { min: 18, max: 27 },
    humidity: { min: 50, max: 70 },
    co2: { min: 400, max: 1200 },
    pressure: { min: 980, max: 1040 },
    gas: { min: 0, max: 50 }
  };
  
  const alerts = [];
  
  // Check temperature
  if (sensorData.temperature < thresholds.temperature.min) {
    alerts.push({
      type: 'alert',
      message: `Temperature critically low: ${sensorData.temperature}°C. Risk of frost damage!`
    });
  } else if (sensorData.temperature > thresholds.temperature.max) {
    alerts.push({
      type: 'alert',
      message: `Temperature critically high: ${sensorData.temperature}°C. Heat stress risk!`
    });
  } else if (sensorData.temperature < thresholds.temperature.min + 2) {
    alerts.push({
      type: 'warning',
      message: `Temperature low: ${sensorData.temperature}°C. Consider heating.`
    });
  } else if (sensorData.temperature > thresholds.temperature.max - 3) {
    alerts.push({
      type: 'warning',
      message: `Temperature high: ${sensorData.temperature}°C. Consider ventilation.`
    });
  }
  
  // Check humidity
  if (sensorData.humidity < thresholds.humidity.min) {
    alerts.push({
      type: 'alert',
      message: `Humidity critically low: ${sensorData.humidity}%. Risk of plant stress!`
    });
  } else if (sensorData.humidity > thresholds.humidity.max) {
    alerts.push({
      type: 'alert',
      message: `Humidity critically high: ${sensorData.humidity}%. High disease risk!`
    });
  } else if (sensorData.humidity < thresholds.humidity.min + 5) {
    alerts.push({
      type: 'warning',
      message: `Humidity low: ${sensorData.humidity}%. Consider misting.`
    });
  } else if (sensorData.humidity > thresholds.humidity.max - 5) {
    alerts.push({
      type: 'warning',
      message: `Humidity high: ${sensorData.humidity}%. Risk of fungal growth.`
    });
  }
  
  // Check CO2
  if (sensorData.co2 < thresholds.co2.min) {
    alerts.push({
      type: 'alert',
      message: `CO2 critically low: ${sensorData.co2}ppm. Poor photosynthesis!`
    });
  } else if (sensorData.co2 > thresholds.co2.max) {
    alerts.push({
      type: 'alert',
      message: `CO2 critically high: ${sensorData.co2}ppm. Risk of plant stress!`
    });
  } else if (sensorData.co2 < thresholds.co2.min + 50) {
    alerts.push({
      type: 'warning',
      message: `CO2 low: ${sensorData.co2}ppm. Suboptimal for growth.`
    });
  } else if (sensorData.co2 > thresholds.co2.max - 100) {
    alerts.push({
      type: 'warning',
      message: `CO2 high: ${sensorData.co2}ppm. Consider ventilation.`
    });
  }
  
  // Check pressure
  if (sensorData.pressure < thresholds.pressure.min) {
    alerts.push({
      type: 'alert',
      message: `Pressure critically low: ${sensorData.pressure}hPa. Storm approaching!`
    });
  } else if (sensorData.pressure > thresholds.pressure.max) {
    alerts.push({
      type: 'alert',
      message: `Pressure critically high: ${sensorData.pressure}hPa. Unusual weather conditions!`
    });
  } else if (sensorData.pressure < thresholds.pressure.min + 10) {
    alerts.push({
      type: 'warning',
      message: `Pressure low: ${sensorData.pressure}hPa. Unsettled weather likely.`
    });
  } else if (sensorData.pressure > thresholds.pressure.max - 10) {
    alerts.push({
      type: 'warning',
      message: `Pressure high: ${sensorData.pressure}hPa. Fair weather expected.`
    });
  }
  
  // Check gas levels
  if (sensorData.gas > thresholds.gas.max) {
    alerts.push({
      type: 'alert',
      message: `Air quality poor: ${sensorData.gas}ppm. Hazardous conditions!`
    });
  } else if (sensorData.gas > thresholds.gas.max * 0.8) {
    alerts.push({
      type: 'warning',
      message: `Air quality moderate: ${sensorData.gas}ppm. Check ventilation.`
    });
  }
  
  return alerts;
}

// Function to check if any alerts exist
export function hasAlerts(alerts) {
  return alerts.some(alert => alert.type === 'alert');
}

// Function to check if any warnings exist
export function hasWarnings(alerts) {
  return alerts.some(alert => alert.type === 'warning');
}