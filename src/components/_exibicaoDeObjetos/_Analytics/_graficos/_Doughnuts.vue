<template>
  <div>
    <div style="display: flex; padding: 2%;">
        <canvas id="myChart3"></canvas>
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
      var ctx = document.getElementById('myChart3');
        new Chart(ctx, {
          type: 'doughnut',
          data : {
              labels: [
              'Microsoft',
              'Adobe',
              'Rad Hat',
              ],
              datasets: [{
                  label: '',
                  data: [1, 1, 1],
                  backgroundColor: [
                      'rgb(25,25,112)',
                      'rgb(178,34,34)',
                      'rgb(50,205,50)',
                  ],
                  hoverOffset: 4
              }]
          },
      });
    }
  },
  mounted(){
    this.graph();
  }
}
</script>

<style scoped >
#myChart3{
    margin: 5%;
    max-width: 1000px;
    max-height: 600px;
}
</style>