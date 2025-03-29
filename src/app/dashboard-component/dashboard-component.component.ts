import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration , registerables  } from 'chart.js';

Chart.register(...registerables); 

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-component.component.html',
  styleUrl: './dashboard-component.component.css'
})
export class DashboardComponentComponent implements OnInit {

  apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=40.18&longitude=44.51&hourly=temperature_2m';
  temperatureData: number[] = [];
  labels: string[] = [];

  constructor() {}

  async ngOnInit() {
    await this.fetchTemperatureData();
    this.createChart();
  }

  async fetchTemperatureData() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();

      this.labels = data.hourly.time.slice(0, 12); // Take 12 hours
      this.temperatureData = data.hourly.temperature_2m.slice(0, 12); // Take 12 values
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  createChart() {
    new Chart('temperatureChart', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Temperature (°C)',
          data: this.temperatureData,
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.2)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        }
      }
    });
  }

}
