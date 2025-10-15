import { mockDataGenerator } from './services/DataService.js'
import { createSensorCards } from './components/SensorCard.js'
import { createCharts } from './components/Chart.js'
import { createRecommendations } from './components/RecommendationSystem.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  // Create initial charts
  createCharts();
  
  // Set up real-time data updates
  setInterval(updateDashboard, 5000); // Update every 5 seconds
  
  // Set up threshold saving
  document.getElementById('save-thresholds').addEventListener('click', saveThresholds);
  
  // Initial dashboard update
  updateDashboard();
});

// Update dashboard with new data
function updateDashboard() {
  const sensorData = mockDataGenerator();
  
  // Update sensor cards
  const sensorCardsContainer = document.querySelector('.dashboard-grid');
  if (sensorCardsContainer) {
    sensorCardsContainer.innerHTML = createSensorCards(sensorData);
  }
  
  // Update recommendations
  const recommendationsContainer = document.getElementById('recommendations-container');
  if (recommendationsContainer) {
    recommendationsContainer.innerHTML = createRecommendations(sensorData);
  }
}

// Save user-defined thresholds
function saveThresholds() {
  // In a real application, this would save to localStorage or a backend
  const tempMin = document.getElementById('temp-min').value;
  const tempMax = document.getElementById('temp-max').value;
  const humidityMin = document.getElementById('humidity-min').value;
  const humidityMax = document.getElementById('humidity-max').value;
  const co2Min = document.getElementById('co2-min').value;
  const co2Max = document.getElementById('co2-max').value;
  const pressureMin = document.getElementById('pressure-min').value;
  const pressureMax = document.getElementById('pressure-max').value;
  
  // For now, just show an alert
  alert(`Thresholds saved:
Temperature: ${tempMin}°C - ${tempMax}°C
Humidity: ${humidityMin}% - ${humidityMax}%
CO2: ${co2Min}ppm - ${co2Max}ppm
Pressure: ${pressureMin}hPa - ${pressureMax}hPa`);
  
  // In a real implementation, you would:
  // 1. Validate the inputs
  // 2. Save to localStorage or send to backend
  // 3. Update the alert system with new thresholds
}

// TODO: Replace with actual Oracle Apex API integration
// Example of where real API integration would go:
/*
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
*/