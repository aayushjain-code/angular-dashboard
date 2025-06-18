// src/app/utils/chart-options.ts

import * as Highcharts from 'highcharts';

export const lineChartOptions: Highcharts.Options = {
  chart: {
    type: 'line'
  },
   title: {
    text: 'Customers - Stock Status'
  },
  subtitle: {
    text: 'Monthly Review'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    title: { text: 'Month' }
  },
  yAxis: {
    title: { text: 'Values' }
  },
  series: [{
    type: 'line',
    name: 'Monthly Data',
    data: [5, 10, 7, 12, 4, 8, 15, 6, 9, 11, 14, 13]  
  }]
};

export const barChartOptions: Highcharts.Options = {
  chart: { type: 'column' },
  title: { text: 'Customer Sell-In' },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yAxis: {
    min: 0,
    max: 2000,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2, // space between bars (lower = thinner bars)
      borderWidth: 0,
      pointWidth: 25 // fixed bar width in pixels (optional)
    }
  },
  series: [{
    name: 'Monthly Tasks',
    type: 'column',
    data: [500, 1800, 1004, 600, 100, 700, 300, 900, 6000, 500, 1100, 8000]
  }]
};



export const getProgressChart = (progress: number): Highcharts.Options => ({
  chart: { type: 'solidgauge', height: 120 },
  title: { text: 'Progress', style: { fontSize: '16px' } },
  pane: {
    center: ['50%', '50%'],
    size: '100%',
    startAngle: -90,
    endAngle: 90,
  },
  tooltip: { enabled: false },
  yAxis: {
    min: 0,
    max: 100,
    stops: [
      [0.1, '#55BF3B'],
      [0.5, '#DDDF0D'],
      [0.9, '#DF5353'],
    ],
    lineWidth: 0,
    tickWidth: 0,
    labels: { enabled: false },
  },
  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 0,
        borderWidth: 0,
        useHTML: true,
        format: `<div style="text-align:center"><span style="font-size:18px;">${progress}%</span></div>`,
      },
    }
  },
  series: [{
    name: 'Progress',
    type: 'solidgauge',
    data: [progress],
  }]
});

export const donutChart1: Highcharts.Options = {
  chart: { type: 'pie' },
  title: { text: 'Card 1 - Distribution' },
  plotOptions: {
    pie: {
      innerSize: '70%',
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.percentage:.1f}%'
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Card 1 Data',
    data: [
      { name: 'Marketing', y: 40 },
      { name: 'Sales', y: 25 },
      { name: 'Operations', y: 35 }
    ]
  }]
};

export const donutChart2: Highcharts.Options = {
  chart: { type: 'pie' },
  title: { text: 'Card 2 - Distribution' },
  plotOptions: {
    pie: {
      innerSize: '70%',
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.percentage:.1f}%'
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Card 2 Data',
    data: [
      { name: 'Product A', y: 50 },
      { name: 'Product B', y: 30 },
      { name: 'Product C', y: 20 }
    ]
  }]
};

export const pieChartSDA: Highcharts.Options = {
  chart: { type: 'pie',height: 280  },
  title: { text: undefined },
  tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
  accessibility: { point: { valueSuffix: '%' } },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: { enabled: true, format: '{point.name}: {point.percentage:.1f}%' }
    }
  },
  series: [{
    name: 'Share',
    type: 'pie',
    data: [
      { name: 'Gorenje', y: 17.6 },
      { name: 'Bosch', y: 14.7 },
      { name: 'Philips', y: 11.9 },
      { name: 'Tefal', y: 8.4 },
      { name: 'VOX', y: 7.4 },
      { name: 'Beko', y: 4.5 },
      { name: 'Sencor', y: 3.4 },
      { name: 'Rowenta', y: 3.1 },
      { name: 'EGG', y: 2.1 },
      { name: 'Brand', y: 2.1 },
      { name: 'Other', y: 24.7 }
    ]
  }]
};

export const pieChartMDA: Highcharts.Options = {
  chart: { type: 'pie', height: 280 ,
 },
  title: { text: undefined },
  tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
  accessibility: { point: { valueSuffix: '%' } },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: { enabled: true, format: '{point.name}: {point.percentage:.1f}%' }
    }
  },
  series: [{
    name: 'Share',
    type: 'pie',
    data: [
      { name: 'Gorenje', y: 23.4 },
      { name: 'VOX', y: 21.6 },
      { name: 'Beko', y: 12.7 },
      { name: 'Bosch', y: 9.5 },
      { name: 'Candy', y: 5.5 },
      { name: 'Midea', y: 5.1 },
      { name: 'Whirlpool', y: 4.5 },
      { name: 'Samsung', y: 4.3 },
      { name: 'Tesla', y: 2.7 },
      { name: 'Hisense', y: 2.4 },
      { name: 'Other', y: 8.3 }
    ]
  }]
};
