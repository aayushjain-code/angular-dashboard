import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { pieChartSDA, pieChartMDA } from '../../utils/chart-option';

@Component({
  selector: 'app-dual-pie-chart',
  templateUrl: './dual-pie-chart.component.html',
  styleUrls: ['./dual-pie-chart.component.css']
})
export class DualPieChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptionsSDA = pieChartSDA;
  chartOptionsMDA = pieChartMDA;
}
