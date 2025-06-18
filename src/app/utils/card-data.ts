
export interface CardInfo {
    title: string;
    imageUrl: string;
    description: string;
    
  }

import * as Highcharts from 'highcharts';
// import SolidGauge from 'highcharts/modules/solid-gauge';
// import More from 'highcharts/highcharts-more';

// More(Highcharts);
// SolidGauge(Highcharts);
export const getProgressChart = (progress: number): Highcharts.Options => ({
  chart: {
    type: 'solidgauge',
    height: 120,
  },
  title: {
    text: 'Progress',
    style: {
      fontSize: '16px',
    },
  },
  pane: {
    center: ['50%', '50%'],
    size: '100%',
    startAngle: -90,
    endAngle: 90,
    // background: {
    //   backgroundColor: '#eee',
    //   innerRadius: '60%',
    //   outerRadius: '100%',
    //   shape: 'arc',
    // },
  },
  tooltip: {
    enabled: false,
  },
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
    labels: {
      enabled: false,
    },
  },
  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 0,
        borderWidth: 0,
        useHTML: true,
        format: `<div style="text-align:center"><span style="font-size:18px;">${progress}%</span></div>`,
      },
    },
  },
  series: [
    {
      name: 'Progress',
      type: 'solidgauge',
      data: [progress],
    },
  ],
});
export const lineChartOptions: Highcharts.Options = {
  title: { text: 'My First Highcharts Chart' },
  series: [{ data: [1, 2, 3], type: 'line' }]
};


export const barChartOptions: Highcharts.Options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Monthly Tasks (Vertical Bars)'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','June','July','Aug','Sep','Oct','Nov','Dec'],
    title: {
      text: 'Month'
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Tasks Count'
    }
  },
  series: [{
    name: 'Tasks',
    type: 'column',
    data: [5, 8, 4, 6, 10, 7, 3, 9, 6, 5, 11, 8]
  }]
};

export const donutChart1: Highcharts.Options = {
  chart: { type: 'pie' },
  title: { text: 'Card 1 - Distribution' },
  plotOptions: {
    pie: {
      innerSize: '40%',
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.percentage:.1f}%'
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Data',
    data: [
      { name: 'A', y: 40 },
      { name: 'B', y: 30 },
      { name: 'C', y: 30 }
    ]
  }]
};

export const donutChart2: Highcharts.Options = {
  chart: { type: 'pie' },
  title: { text: 'Card 2 - Distribution' },
  plotOptions: {
    pie: {
      innerSize: '40%',
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.percentage:.1f}%'
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Data',
    data: [
      { name: 'X', y: 25 },
      { name: 'Y', y: 25 },
      { name: 'Z', y: 50 }
    ]
  }]
};

  
  export const CARD_DATA: CardInfo[] = [
    {
      title: 'Card 1',
      imageUrl: 'https://via.placeholder.com/300x180',
      description: 'This is description for card 1.'
    },
    {
      title: 'Card 2',
      imageUrl: 'https://via.placeholder.com/300x180?text=Sales',
      description: 'This is description for card 2.'
    },
    {
      title: 'Card 3',
      imageUrl: 'https://via.placeholder.com/300x180?text=Sales',
      description: 'This is description for card 3.'
    },
    {
      title: 'Card 4',
      imageUrl: 'https://via.placeholder.com/300x180?text=Sales',
      description: 'This is description for card 4.'
    }
  ];
  