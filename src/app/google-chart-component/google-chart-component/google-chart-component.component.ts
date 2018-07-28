import { ElementRef, Input, OnInit, Component, OnChanges} from '@angular/core';
declare var google: any;
declare var googleLoaded: any;
import { ServiceLayerService } from '../../services/service-layer.service';
@Component({

  selector: 'GoogleChart',
  templateUrl: 'google-chart-component.component.html',
  styleUrls: ['google-chart-component.component.css'],
})
export class GoogleChartComponent implements OnInit {
  public _element: any;
  data = [
    ['Date', 'Settlement'],
    ['22/04/2018', 1000],
    ['23/04/2018', 50],
    ['24/04/2018', 0],
    ['25/04/2018', 0],
    ['26/04/2018', 0],
    ['27/04/2018', 0],
    ['28/04/2018', 0],
    ['29/04/2018', 2500000],
    ['30/04/2018', 3490000],
    ['31/04/2018', 0],
    ['1/05/2018', -5500000],
    ['2/05/2018', 0],
    ['3/05/2018', 0],
    ['4/05/2018', 0],
    ['5/05/2018', 0],
    ['6/05/2018', 0],
    ['7/05/2018', 0],
    ['8/05/2018', 0],
    ['9/05/2018', 0],
    ['10/05/2018', 0],
    ['11/05/2018', 6000000],
    ['12/05/2018', 0],
    ['13/05/2018', -5800000],
    ['14/05/2018', 0]
  ];

  options = {
    width: 800,
    legend: { position: 'none' },
    chart: {
      title: 'Transaction settlement by the customer',
      subtitle: 'All values in GBP' },
    axes: {
      x: {
        0: { side: 'top', label: 'Settlement'} // Top x-axis.
      }
    },
    bar: { groupWidth: '100%' }
  };

 data1 = [
  ['Date', 'Value'],
  ['22/04/2018', 1000],
  ['23/04/2018', 1050],
  ['24/04/2018', 1050],
  ['25/04/2018', 1050],
  ['26/04/2018', 1050],
  ['27/04/2018', 1050],
  ['28/04/2018', 1050],
  ['29/04/2018', 2501050],
  ['30/04/2018', 5991050],
  ['31/04/2018', 5991050],
  ['1/05/2018', 491050],
  ['2/05/2018', 491050],
  ['3/05/2018', 491050],
  ['4/05/2018', 491050],
  ['5/05/2018', 491050],
  ['6/05/2018', 491050],
  ['7/05/2018', 491050],
  ['8/05/2018', 491050],
  ['9/05/2018', 491050],
  ['10/05/2018', 491050],
  ['11/05/2018', 691050],
  ['12/05/2018', 691050],
  ['13/05/2018', 691050],
  ['14/05/2018', 691050]
];

options1 = {
  width: 800,
  legend: { position: 'none' },
  chart: {
    title: 'Transaction values on daily basis',
    subtitle: 'All values in GBP' },
  axes: {
    x: {
      0: { side: 'top', label: 'Value'} // Top x-axis.
    }
  },
  bar: { groupWidth: '100%' }
};

data2 = [
  ['Date', 'Settlement'],
  ['22/04/2018', 82000],
  ['23/04/2018', 410000000],
  ['24/04/2018', 82000000],
  ['25/04/2018', 0],
  ['26/04/2018', -475600000],
  ['27/04/2018', 0],
  ['28/04/2018', 0],
  ['29/04/2018', 0],
  ['30/04/2018', 0],
  ['31/04/2018', 0],
  ['1/05/2018', 0],
  ['2/05/2018', 0],
  ['3/05/2018', 0],
  ['4/05/2018', 0],
  ['5/05/2018', 492000000],
  ['6/05/2018', 98400000],
  ['7/05/2018', 0],
  ['8/05/2018', -570720000],
  ['9/05/2018', 0],
  ['10/05/2018', 0],
  ['11/05/2018', 0],
  ['12/05/2018', 0],
  ['13/05/2018', 0],
  ['14/05/2018', 0]
];

options2 = {
  width: 800,
  legend: { position: 'none' },
  chart: {
    title: 'Transaction settlement by the customer',
    subtitle: 'All values in RUB' },
  axes: {
    x: {
      0: { side: 'top', label: 'Settlement'} // Top x-axis.
    }
  },
  bar: { groupWidth: '100%' }
};

data3 = [
  ['Date', 'Value'],
  ['22/04/2018', 82000],
  ['23/04/2018', 410082000],
  ['24/04/2018', 41002000],
  ['25/04/2018', 492082000],
  ['26/04/2018', 492082000],
  ['27/04/2018', 16482000],
  ['28/04/2018', 16482000],
  ['29/04/2018', 16482000],
  ['30/04/2018', 16482000],
  ['31/04/2018', 16482000],
  ['1/05/2018', 16482000],
  ['2/05/2018', 16482000],
  ['3/05/2018', 16482000],
  ['4/05/2018', 16482000],
  ['5/05/2018', 508482000],
  ['6/05/2018', 606882000],
  ['7/05/2018', 606882000],
  ['8/05/2018', 36162000],
  ['9/05/2018', 36162000],
  ['10/05/2018', 36162000],
  ['11/05/2018', 36162000],
  ['12/05/2018', 36162000],
  ['13/05/2018', 36162000],
  ['14/05/2018', 36162000]
];

options3 = {
  width: 800,
  legend: { position: 'none' },
  chart: {
    title: 'Transaction values on daily basis',
    subtitle: 'All values in RUB' },
  axes: {
    x: {
      0: { side: 'top', label: 'Value'} // Top x-axis.
    }
  },
  bar: { groupWidth: '100%' }
};
 
  constructor(public element: ElementRef, public serviceData: ServiceLayerService) {
    this._element = this.element.nativeElement;
  }
  ngOnInit() {
    google.charts.load("current", {packages:["bar"]});
    google.charts.setOnLoadCallback(() => {

      var data1 = new google.visualization.arrayToDataTable(this.data);
      var chart = new google.charts.Bar(document.getElementById('chart_div'));
      // Convert the Classic options to Material options.
      chart.draw(data1, google.charts.Bar.convertOptions(this.options));

      var data2 = new google.visualization.arrayToDataTable(this.data1);

      var chart1 = new google.charts.Bar(document.getElementById('chart_div1'));
      // Convert the Classic options to Material options.
      chart1.draw(data2, google.charts.Bar.convertOptions(this.options1));


      var data3 = new google.visualization.arrayToDataTable(this.data2);

      var chart2 = new google.charts.Bar(document.getElementById('chart_div2'));
      // Convert the Classic options to Material options.
      chart2.draw(data3, google.charts.Bar.convertOptions(this.options2));


      var data4 = new google.visualization.arrayToDataTable(this.data3);

      var chart3 = new google.charts.Bar(document.getElementById('chart_div3'));
      // Convert the Classic options to Material options.
      chart3.draw(data4, google.charts.Bar.convertOptions(this.options3));
    });
  }

}
