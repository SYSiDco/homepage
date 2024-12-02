// Daily Redemptions Area Chart
const redemptionsCtx = document.getElementById('redemptionsChart').getContext('2d');
new Chart(redemptionsCtx, {
  type: 'line',
  data: {
    labels: Array.from({ length: 30 }, (_, i) => `Nov ${i + 1}`),
    datasets: [
      {
        label: 'Redemptions',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 600)),
        borderColor: '#00fefe',
        backgroundColor: 'rgba(0, 228, 245, 0.4)',
        fill: true,
      },
      {
        label: 'Repeat Transactions',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 800)),
        borderColor: '#13e7d9',
        backgroundColor: 'rgba(0, 181, 201, 0.4)',
        fill: true,
      },
      {
        label: 'Total Transactions',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000)),
        borderColor: '#27bcac',
        backgroundColor: 'rgba(0, 140, 146, 0.4)',
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { family: 'Gotham', weight: 100, color: '#004B5A', size: 12 } } // Keep original size for label (x-axis)
      },
      y: {
        grid: { display: false },
        ticks: { font: { family: 'Gotham', weight: 100, color: '#E8F1F3', size: 8 } } // Smaller font for values on y-axis
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            family: 'Gotham',
            weight: 100,
            color: '#B0B0B0',
            size: 10,
          },
          boxWidth: 10,
          padding: 20,
        },
      },
      tooltip: {
        titleFont: { family: 'Gotham', weight: 100, color: '#B0B0B0' },
        bodyFont: { family: 'Gotham', weight: 100, color: '#B0B0B0' }
      }
    }
  }
});

// Time of Day Chart (Bar Chart)
const timeOfDayCtx = document.getElementById('timeOfDayChart').getContext('2d');
new Chart(timeOfDayCtx, {
  type: 'bar',
  data: {
    labels: ['9am', '12nn', '3pm', '6pm', '9pm'],
    datasets: [
      {
        label: 'Total Transactions',
        data: [500, 1200, 800, 1400, 700],
        backgroundColor: '#27bcac',
        legend: { display: false }
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: { 
        grid: { display: false }, 
        ticks: { font: { family: 'Gotham', weight: 100, color: '#004B5A', size: 12 } } // Keep original size for label (x-axis)
      },
      y: { 
        grid: { display: false }, 
        ticks: { font: { family: 'Gotham', weight: 100, color: '#E8F1F3', size: 8 } } // Smaller font for numeric values on y-axis
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        titleFont: { family: 'Gotham', weight: 100, color: '#B0B0B0' },
        bodyFont: { family: 'Gotham', weight: 100, color: '#B0B0B0' }
      }
    }
  }
});

// Top Branches (Horizontal Bar Chart)
const branchLeaderboardCtx = document.getElementById('branchLeaderboardChart').getContext('2d');
new Chart(branchLeaderboardCtx, {
  type: 'bar',
  data: {
    labels: ['Makati', 'Mandaluyong', 'Pasig', 'San Juan'],
    datasets: [
      {
        label: 'Total Transactions',
        data: [1200, 800, 1500, 900],
        backgroundColor: '#27bcac',
        legend: { display: false }
      },
    ],
  },
  options: {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: { 
        grid: { display: false }, 
        ticks: { font: { family: 'Gotham', weight: 100, color: '#E8F1F3', size: 8 } }  // Smaller font for numeric values on y-axis
      },
      y: { 
        grid: { display: false }, 
        ticks: { font: { family: 'Gotham', weight: 100, color: '#004B5A', size: 12 } } // Keep original size for label (x-axis)
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        titleFont: { family: 'Gotham', weight: 100, color: '#B0B0B0' },
        bodyFont: { family: 'Gotham', weight: 100, color: '#B0B0B0' }
      }
    }
  }
});

// Day of Week Chart (Vertical Bar Chart)
const dayOfWeekCtx = document.getElementById('dayOfWeekChart').getContext('2d');
new Chart(dayOfWeekCtx, {
  type: 'bar',
  data: {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Total Transactions',
        data: [1000, 1200, 1100, 1300, 1400, 1500, 1600],
        backgroundColor: '#27bcac',
        legend: { display: false }
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: { 
        grid: { display: false }, 
        ticks: { font: { family: 'Gotham', weight: 100, color: '#004B5A', size: 12 } } // Keep original size for label (x-axis)
      },
      y: { 
        grid: { display: false }, 
        ticks: { font: { family: 'Gotham', weight: 100, color: '#E8F1F3', size: 8 } } // Smaller font for numeric values on y-axis
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        titleFont: { family: 'Gotham', weight: 100, color: '#B0B0B0' },
        bodyFont: { family: 'Gotham', weight: 100, color: '#B0B0B0' }
      }
    }
  }
});
