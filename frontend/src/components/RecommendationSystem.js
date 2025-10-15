// Recommendation system based on current sensor data
export function createRecommendations(sensorData) {
  const recommendations = [];
  
  // Temperature recommendations
  if (sensorData.temperature < 18) {
    recommendations.push({
      type: 'alert',
      message: 'Temperature critically low. Activate heating systems immediately and check for drafts.'
    });
  } else if (sensorData.temperature < 20) {
    recommendations.push({
      type: 'warning',
      message: 'Temperature below optimal range. Consider activating supplemental heating.'
    });
  } else if (sensorData.temperature > 30) {
    recommendations.push({
      type: 'alert',
      message: 'Temperature critically high. Activate ventilation and cooling systems immediately.'
    });
  } else if (sensorData.temperature > 27) {
    recommendations.push({
      type: 'warning',
      message: 'Temperature above optimal range. Consider increasing ventilation or activating cooling.'
    });
  } else {
    recommendations.push({
      type: 'normal',
      message: 'Temperature is within optimal range for most crops.'
    });
  }
  
  // Humidity recommendations
  if (sensorData.humidity < 40) {
    recommendations.push({
      type: 'alert',
      message: 'Humidity critically low. Activate misting systems and check for heat sources.'
    });
  } else if (sensorData.humidity < 50) {
    recommendations.push({
      type: 'warning',
      message: 'Humidity below optimal range. Consider activating humidification systems.'
    });
  } else if (sensorData.humidity > 80) {
    recommendations.push({
      type: 'alert',
      message: 'Humidity critically high. Increase ventilation to prevent fungal diseases.'
    });
  } else if (sensorData.humidity > 70) {
    recommendations.push({
      type: 'warning',
      message: 'Humidity above optimal range. Improve air circulation to reduce fungal risk.'
    });
  } else {
    recommendations.push({
      type: 'normal',
      message: 'Humidity levels are optimal for healthy plant growth.'
    });
  }
  
  // CO2 recommendations
  if (sensorData.co2 < 300) {
    recommendations.push({
      type: 'alert',
      message: 'CO2 levels critically low. Check CO2 enrichment system if installed.'
    });
  } else if (sensorData.co2 < 400) {
    recommendations.push({
      type: 'warning',
      message: 'CO2 levels suboptimal. Consider CO2 enrichment for improved growth.'
    });
  } else if (sensorData.co2 > 1500) {
    recommendations.push({
      type: 'alert',
      message: 'CO2 levels too high. Increase ventilation to prevent plant stress.'
    });
  } else if (sensorData.co2 > 1200) {
    recommendations.push({
      type: 'warning',
      message: 'CO2 levels above optimal range. Consider adjusting ventilation.'
    });
  } else {
    recommendations.push({
      type: 'normal',
      message: 'CO2 levels are optimal for photosynthesis.'
    });
  }
  
  // Pressure recommendations
  if (sensorData.pressure < 990) {
    recommendations.push({
      type: 'alert',
      message: 'Low atmospheric pressure detected. Storm approaching. Secure greenhouse and check drainage.'
    });
  } else if (sensorData.pressure < 1000) {
    recommendations.push({
      type: 'warning',
      message: 'Low pressure conditions. Unsettled weather expected. Monitor conditions closely.'
    });
  } else if (sensorData.pressure > 1035) {
    recommendations.push({
      type: 'warning',
      message: 'High pressure conditions. Dry weather expected. May need increased irrigation.'
    });
  } else {
    recommendations.push({
      type: 'normal',
      message: 'Atmospheric pressure is stable. Normal weather conditions expected.'
    });
  }
  
  // Gas/Air quality recommendations
  if (sensorData.gas > 80) {
    recommendations.push({
      type: 'alert',
      message: 'Air quality hazardous. Activate ventilation systems and investigate source immediately.'
    });
  } else if (sensorData.gas > 50) {
    recommendations.push({
      type: 'warning',
      message: 'Air quality moderate. Increase ventilation and monitor levels.'
    });
  } else {
    recommendations.push({
      type: 'normal',
      message: 'Air quality is good. No immediate action required.'
    });
  }
  
  // Generate HTML for recommendations
  let recommendationsHTML = '';
  
  recommendations.forEach(rec => {
    recommendationsHTML += `
      <div class="recommendation-item ${rec.type}">
        <p>${rec.message}</p>
      </div>
    `;
  });
  
  return recommendationsHTML;
}