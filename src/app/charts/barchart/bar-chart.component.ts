import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { barChartOptions } from '../../utils/chart-options';
import { barChartOptions } from '../../utils/chart-option';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
//   styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions = barChartOptions;
}
