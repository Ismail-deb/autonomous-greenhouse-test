// Mock data generator to simulate sensor readings
export function mockDataGenerator() {
  // Generate realistic sensor values with some variation
  const baseTemp = 22 + (Math.random() * 4 - 2); // 20-24°C
  const baseHumidity = 60 + (Math.random() * 10 - 5); // 55-65%
  const baseCO2 = 450 + (Math.random() * 100 - 50); // 400-500ppm
  const basePressure = 1013 + (Math.random() * 20 - 10); // 1003-1023 hPa
  const baseGas = 50 + (Math.random() * 30 - 15); // 35-65 (relative value)
  
  return {
    timestamp: new Date(),
    temperature: parseFloat(baseTemp.toFixed(1)),
    humidity: parseFloat(baseHumidity.toFixed(1)),
    co2: Math.round(baseCO2),
    pressure: parseFloat(basePressure.toFixed(2)),
    gas: Math.round(baseGas)
  };
}

// Generate historical data for charts
export function getHistoricalData(timeRange) {
  const dataPoints = timeRange === 'hour' ? 60 : timeRange === 'day' ? 24 : 7;
  const data = [];
  const now = new Date();
  
  for (let i = dataPoints - 1; i >= 0; i--) {
    const time = new Date(now);
    
    if (timeRange === 'hour') {
      time.setMinutes(time.getMinutes() - i);
    } else if (timeRange === 'day') {
      time.setHours(time.getHours() - i);
    } else {
      time.setDate(time.getDate() - i);
    }
    
    // Generate data with realistic trends
    const baseTemp = 22 + Math.sin(i * 0.2) * 3;
    const baseHumidity = 60 + Math.cos(i * 0.15) * 8;
    const baseCO2 = 450 + Math.sin(i * 0.1) * 50;
    const basePressure = 1013 + Math.cos(i * 0.1) * 5;
    const baseGas = 50 + Math.sin(i * 0.25) * 15;
    
    data.push({
      timestamp: time,
      temperature: parseFloat((baseTemp + (Math.random() * 2 - 1)).toFixed(1)),
      humidity: parseFloat((baseHumidity + (Math.random() * 3 - 1.5)).toFixed(1)),
      co2: Math.round(baseCO2 + (Math.random() * 20 - 10)),
      pressure: parseFloat((basePressure + (Math.random() * 2 - 1)).toFixed(2)),
      gas: Math.round(baseGas + (Math.random() * 10 - 5))
    });
  }
  
  return data;
}

// TODO: Replace with actual Oracle Apex API integration
// Example of where real API integration would go:
/*
export async function fetchRealSensorData() {
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