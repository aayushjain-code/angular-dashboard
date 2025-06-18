// import { Component, Input } from '@angular/core';
// import * as Highcharts from 'highcharts';
// import { donutChart1, donutChart2 } from '../../utils/chart-option';

// @Component({
//   selector: 'app-donut-chart',
//   templateUrl: './donut-chart.component.html',
// })
// export class DonutChartComponent {
//   Highcharts: typeof Highcharts = Highcharts;

//   // Option 1: Use fixed chart options
//   chartOptions: Highcharts.Options = donutChart1;

//   // Option 2 (optional): Allow dynamic selection via Input
//   @Input() chartType: 'donut1' | 'donut2' = 'donut1';

//   ngOnInit() {
//     if (this.chartType === 'donut1') {
//       this.chartOptions = donutChart1;
//     } else if (this.chartType === 'donut2') {
//       this.chartOptions = donutChart2;
//     }
//   }
// }


import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent {
  Highcharts = Highcharts;

  chartOptions1: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: 'Lineup sample placement', align: 'center' },
    plotOptions: {
      pie: {
        innerSize: '35%',
        dataLabels: { enabled: true, format: '{point.y:,}' },
        borderRadius: 5
      }
    },
    series: [{
      name: 'Lineup',
      type: 'pie',
      data: [
        { name: 'Displayed lineup products', y: 6900 },
        { name: 'Total lineup products', y: 16100 }
      ]
    }],
    credits: { enabled: false }
  };

  chartOptions2: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: 'Sample placement', align: 'center' },
    plotOptions: {
      pie: {
        innerSize: '35%',
        dataLabels: { enabled: true, format: '{point.y:,}' },
        borderRadius: 5
      }
    },
    series: [{
      name: 'Placement',
      type: 'pie',
      data: [
        { name: 'Displayed products', y: 6900 },
        { name: 'Total lineup products', y: 16100 }
      ]
    }],
    credits: { enabled: false }
  };
}
