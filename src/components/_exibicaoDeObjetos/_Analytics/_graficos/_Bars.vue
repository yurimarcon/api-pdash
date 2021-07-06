<template>
  <div>
    <div style="display: flex; padding: 2%;">
        <canvas id="myChart"></canvas>
    </div>
  </div>
</template>

<script>
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

export default {
  methods:{
    graph(){

        let bgColorBar = []
        for(let i = 0; i < 7; i++){
            bgColorBar.push('rgb(25,50,112)')
        }

      var ctx = document.getElementById('myChart');
      new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'black'],
              datasets: [{
                  label: '# Votos',
                  data: [12, 19, 3, 5, 2, 3, 7],
                  backgroundColor: bgColorBar,
                //   backgroundColor: [
                //       'rgba(255, 99, 132, 0.8)',
                //       'rgba(54, 162, 235, 0.8)',
                //       'rgba(255, 206, 86, 0.8)',
                //       'rgba(75, 192, 192, 0.8)',
                //       'rgba(153, 102, 255, 0.8)',
                //       'rgba(255, 159, 64, 0.8)',
                //       'rgba(0, 0, 0, 0.8)'
                //   ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(0, 0, 0, 1)',
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      })
    }
  },
  mounted(){
    this.graph();
  }
}
</script>

<style scoped>
#myChart{
    max-width: 4000px;
    max-height: 5000px;
}
</style>