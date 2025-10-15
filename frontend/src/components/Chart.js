import { Chart, registerables } from 'chart.js'
import { getHistoricalData } from '../services/DataService.js'

Chart.register(...registerables)

let chartInstance = null;

export function createCharts() {
  const ctx = document.getElementById('dataChart').getContext('2d');
  
  // Destroy existing chart if it exists
  if (chartInstance) {
    chartInstance.destroy();
  }
  
  // Get initial data (last hour)
  const historicalData = getHistoricalData('hour');
  
  // Extract data for chart
  const labels = historicalData.map(data => 
    new Date(data.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
  
  const temperatureData = historicalData.map(data => data.temperature);
  const humidityData = historicalData.map(data => data.humidity);
  const co2Data = historicalData.map(data => data.co2);
  const pressureData = historicalData.map(data => data.pressure);
  
  // Create chart
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Temperature (°C)',
          data: temperatureData,
          borderColor: '#f44336',
          backgroundColor: 'rgba(244, 67, 54, 0.1)',
          tension: 0.4,
          yAxisID: 'y'
        },
        {
          label: 'Humidity (%)',
          data: humidityData,
          borderColor: '#2196f3',
          backgroundColor: 'rgba(33, 150, 243, 0.1)',
          tension: 0.4,
          yAxisID: 'y1'
        },
        {
          label: 'CO2 (ppm)',
          data: co2Data,
          borderColor: '#4caf50',
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          tension: 0.4,
          yAxisID: 'y2'
        },
        {
          label: 'Pressure (hPa)',
          data: pressureData,
          borderColor: '#ff9800',
          backgroundColor: 'rgba(255, 152, 0, 0.1)',
          tension: 0.4,
          yAxisID: 'y3'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Time'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Temperature (°C)'
          },
          grid: {
            drawOnChartArea: false
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Humidity (%)'
          },
          grid: {
            drawOnChartArea: false
          }
        },
        y2: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'CO2 (ppm)'
          },
          grid: {
            drawOnChartArea: false
          }
        },
        y3: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Pressure (hPa)'
          },
          grid: {
            drawOnChartArea: false
          }
        }
      }
    }
  });
  
  // Set up time range buttons
  document.querySelectorAll('.time-btn').forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Get new data based on selected range
      const range = this.getAttribute('data-range');
      updateChart(range);
    });
  });
}

function updateChart(timeRange) {
  const historicalData = getHistoricalData(timeRange);
  
  // Update labels based on time range
  let timeFormat;
  if (timeRange === 'hour') {
    timeFormat = { hour: '2-digit', minute: '2-digit' };
  } else if (timeRange === 'day') {
    timeFormat = { hour: '2-digit', minute: '2-digit' };
  } else {
    timeFormat = { month: 'short', day: 'numeric' };
  }
  
  const labels = historicalData.map(data => 
    new Date(data.timestamp).toLocaleTimeString([], timeFormat)
  );
  
  // Update chart data
  chartInstance.data.labels = labels;
  chartInstance.data.datasets[0].data = historicalData.map(data => data.temperature);
  chartInstance.data.datasets[1].data = historicalData.map(data => data.humidity);
  chartInstance.data.datasets[2].data = historicalData.map(data => data.co2);
  chartInstance.data.datasets[3].data = historicalData.map(data => data.pressure);
  
  chartInstance.update();
}