// reports.js

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
  }
  
  window.onload = function () {
    const citySelect = document.getElementById('city');
    const regionSelect = document.getElementById('region');
    const cityRegionMap = {
      "NCR": ["San Juan", "Quezon City", "Makati"],
      "Balance Luzon": ["Taytay", "Antipolo", "Cainta"],
      "Mindanao": ["Butuan", "Davao", "Cagayan de Oro"]
    };
  
    // Populate the region dropdown
    for (const region in cityRegionMap) {
      const option = document.createElement("option");
      option.value = region;
      option.textContent = region;
      regionSelect.appendChild(option);
    }
  
    // Populate cities based on region
    regionSelect.addEventListener("change", function () {
      const selectedRegion = this.value;
  
      // Clear existing cities
      citySelect.innerHTML = '<option value="" selected disabled>Select a City</option>';
  
      if (selectedRegion && cityRegionMap[selectedRegion]) {
        cityRegionMap[selectedRegion].forEach(city => {
          const option = document.createElement("option");
          option.value = city;
          option.textContent = city;
          citySelect.appendChild(option);
        });
      }
    });
  
    // Sync region based on city selection
    citySelect.addEventListener("change", function () {
      const selectedCity = this.value;
  
      for (const region in cityRegionMap) {
        if (cityRegionMap[region].includes(selectedCity)) {
          regionSelect.value = region;
          break;
        }
      }
    });
  
    // Date picker setup
    const datesInTable = Array.from(document.querySelectorAll('#data-table tbody tr')).map(row => {
      return row.cells[0].textContent.trim(); // Get the date from the first column
    });
  
    // Initialize Flatpickr with the enabled dates and validation for start/end date
    flatpickr(".datepicker", {
      mode: "range",
      minDate: "2024-11-01", // Optional: set min date if needed
      maxDate: "2024-11-03", // Optional: set max date if needed
      dateFormat: "Y-m-d",
      enable: datesInTable.map(date => {
        return date; // Explicitly enable only the dates in the table
      }),
      onChange: function(selectedDates, dateStr, instance) {
        // If the start date is selected, disable end dates before the start date
        const startDate = selectedDates[0];
        const endDate = selectedDates[1];
  
        if (startDate && endDate && endDate < startDate) {
          instance.clear();
          instance.setDate(startDate);
          alert("End date cannot be earlier than the start date!");
        }
      }
    });
  };
  