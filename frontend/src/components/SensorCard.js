// Create sensor cards for the dashboard
export function createSensorCards(sensorData) {
  // Determine status based on optimal ranges
  const getTemperatureStatus = (temp) => {
    if (temp < 18) return { level: 'alert', text: 'Too Cold - Risk of frost damage!' };
    if (temp < 20) return { level: 'warning', text: 'Below Optimal - Consider heating' };
    if (temp <= 27) return { level: 'normal', text: 'Optimal - Good for crop growth' };
    if (temp <= 30) return { level: 'warning', text: 'Above Optimal - Consider ventilation' };
    return { level: 'alert', text: 'Too Hot - Heat stress risk!' };
  };

  const getHumidityStatus = (humidity) => {
    if (humidity < 40) return { level: 'alert', text: 'Very Low - Risk of plant stress' };
    if (humidity < 50) return { level: 'warning', text: 'Below Optimal - Consider misting' };
    if (humidity <= 70) return { level: 'normal', text: 'Optimal - Good for crop health' };
    if (humidity <= 80) return { level: 'warning', text: 'Above Optimal - Risk of fungal growth' };
    return { level: 'alert', text: 'Very High - High disease risk!' };
  };

  const getCO2Status = (co2) => {
    if (co2 < 300) return { level: 'alert', text: 'Very Low - Poor photosynthesis' };
    if (co2 < 400) return { level: 'warning', text: 'Low - Suboptimal for growth' };
    if (co2 <= 1200) return { level: 'normal', text: 'Optimal - Good for photosynthesis' };
    if (co2 <= 1500) return { level: 'warning', text: 'High - Consider ventilation' };
    return { level: 'alert', text: 'Very High - Risk of plant stress!' };
  };

  const getPressureStatus = (pressure) => {
    if (pressure < 990) return { level: 'alert', text: 'Very Low - Storm approaching' };
    if (pressure < 1000) return { level: 'warning', text: 'Low - Unsettled weather likely' };
    if (pressure <= 1025) return { level: 'normal', text: 'Normal - Stable conditions' };
    if (pressure <= 1035) return { level: 'warning', text: 'High - Fair weather expected' };
    return { level: 'alert', text: 'Very High - Settled conditions' };
  };

  const getGasStatus = (gas) => {
    if (gas < 30) return { level: 'normal', text: 'Normal - Clean air' };
    if (gas < 50) return { level: 'warning', text: 'Moderate - Check ventilation' };
    if (gas <= 80) return { level: 'alert', text: 'High - Poor air quality' };
    return { level: 'alert', text: 'Very High - Hazardous conditions!' };
  };

  // Get status for each sensor
  const tempStatus = getTemperatureStatus(sensorData.temperature);
  const humidityStatus = getHumidityStatus(sensorData.humidity);
  const co2Status = getCO2Status(sensorData.co2);
  const pressureStatus = getPressureStatus(sensorData.pressure);
  const gasStatus = getGasStatus(sensorData.gas);

  return `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🌡️ Temperature</h3>
        <span class="status-indicator status-${tempStatus.level}"></span>
      </div>
      <div class="sensor-value">${sensorData.temperature}<span class="sensor-unit">°C</span></div>
      <div class="sensor-status ${tempStatus.level}">${tempStatus.text}</div>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">💧 Humidity</h3>
        <span class="status-indicator status-${humidityStatus.level}"></span>
      </div>
      <div class="sensor-value">${sensorData.humidity}<span class="sensor-unit">%</span></div>
      <div class="sensor-status ${humidityStatus.level}">${humidityStatus.text}</div>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">💨 CO2 Levels</h3>
        <span class="status-indicator status-${co2Status.level}"></span>
      </div>
      <div class="sensor-value">${sensorData.co2}<span class="sensor-unit">ppm</span></div>
      <div class="sensor-status ${co2Status.level}">${co2Status.text}</div>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🌍 Pressure</h3>
        <span class="status-indicator status-${pressureStatus.level}"></span>
      </div>
      <div class="sensor-value">${sensorData.pressure}<span class="sensor-unit">hPa</span></div>
      <div class="sensor-status ${pressureStatus.level}">${pressureStatus.text}</div>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">⚠️ Air Quality</h3>
        <span class="status-indicator status-${gasStatus.level}"></span>
      </div>
      <div class="sensor-value">${sensorData.gas}<span class="sensor-unit">ppm</span></div>
      <div class="sensor-status ${gasStatus.level}">${gasStatus.text}</div>
    </div>
  `;
}