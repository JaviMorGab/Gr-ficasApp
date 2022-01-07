import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x'
  };

  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: [ 
      // '2006', '2007', '2008', '2009', '2010', '2011', '2012' 
    ],
    datasets: [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#C967EB', hoverBackgroundColor: '#8020F7' },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#AD6CF5', hoverBackgroundColor: '#8020F7' },
      // { data: [ 38, 50, 40, 9, 20, 27, 50 ], label: 'Series C', backgroundColor: '#836DDF', hoverBackgroundColor: '#8020F7' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
    }
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      // Math.round(Math.random() * 100),
      // 59,
      // 80,
      // Math.round(Math.random() * 100),
      // 56,
      // Math.round(Math.random() * 100),
      // 40 
    ];

    this.barChartData.datasets[1].data = [
      // Math.round(Math.random() * 100),
      // 59,
      // 80,
      // Math.round(Math.random() * 100),
      // 56,
      // Math.round(Math.random() * 100),
      // 40 
    ];

    this.barChartData.datasets[2].data = [
      // Math.round(Math.random() * 100),
      // 59,
      // 80,
      // Math.round(Math.random() * 100),
      // 56,
      // Math.round(Math.random() * 100),
      // 40 
    ];

    // this.chart?.update();
  }

}
