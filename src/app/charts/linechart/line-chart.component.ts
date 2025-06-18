import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { lineChartOptions } from '../../utils/chart-option';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
//   styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions = lineChartOptions;
}
