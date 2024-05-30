import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.css']
})
export class PersoComponent {
  linecharts: typeof Highcharts = Highcharts;
  lineOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: '#000000' // Light grey background,
    },
    title: {
      text: ' Distribution of MBTI Personality Types',
      style: {
        color: '#ffffff' // White color for the title text
      }
    },
    xAxis: {
      categories: ['ISTJ', 'INTJ', 'ESTJ', 'ENFJ', 'ESTP', 'ENTJ', 'INFJ', 'ESFP', 'ISFJ', 'ENFP', 'ISTP', 'ESFJ', 'INFP', 'ENTP', 'ISFP', 'INTP'],
      labels: {
        style: {
          color: '#ffffff' // White color for x-axis labels
        }
      }
    },
    yAxis: {
      title: {
          text: 'Number of individuels',
          style: {
            color: '#ffffff' // White color for y-axis title
          }
      },
      labels: {
            style: {
              color: '#ffffff' // White color for y-axis labels
            }
          }
      },
    
    series: [
      { name: 'Personalities',
      color: '#00ff95', // Blue line color
      data: [168318, 132689, 132431,
        { y: 130470, marker: { fillColor: 'red', radius: 6 } },
          121681, 120003, 107465, 105530, 105074, 97336, 95279, 91178, 88005, 82120, 77460, 73952],
      type: 'line'
    }]
  
  };

  piecharts: typeof Highcharts = Highcharts;
  pieOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: '#000000'
    },
    title: {
      text: 'Distribution of Categories',
      style: {
        color: '#ffffff' // White color for y-axis labels
      },
      align: 'center',
      verticalAlign: 'middle',
      y: 10
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            color: 'white',
            fontSize:'20',
          }
        },
        startAngle: -180, // Changed to create a full circle
        endAngle: 180,   // Changed to create a full circle
        center: ['50%', '50%'], // Adjusted to center the pie in the middle of the plot
        size: '100%' // Adjust to control the size of the pie
      }
    },
    series: [{
      type: 'pie',
      name: 'Category Share',
      innerSize: '50%',
      data: [
        { name: 'Leaders politiques', y: 145931, color: '#3498db' },
        { name: 'Influenceur(ses)', y: 75, color: '#34495e' },
        { name: 'Littérature', y: 118, color: '#95a5a6' },
        { name: 'Jeux vidéo', y: 165, color: '#9b59b6' },
        { name: 'Célébrités', y: 596359, color: '#2ecc71' },
        { name: 'Musicien(nes)', y: 477, color: '#1abc9c' },
        { name: 'Sport', y: 362251, color: '#f1c40f' },
        { name: 'Anime', y: 9981, color: '#e74c3c' },
        { name: 'Films', y: 5529, color: '#d35400' },
        { name: 'Divertissement', y: 3272, color: '#8e44ad' },
        { name: 'TV', y: 350, color: '#2c3e50' }
      ]
    }]
  };
}
