import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [
  ]
})
export class DonutHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: '#008DE6', hoverBackgroundColor: '#804DE8' },
      { data: [ 50, 150, 120 ], backgroundColor: '#00D2F0', hoverBackgroundColor: '#804DE8' },
      { data: [ 250, 130, 70 ], backgroundColor: '#0BD9BA', hoverBackgroundColor: '#804DE8' },
      { data: [ 230, 150, 50 ], backgroundColor: '#00F088', hoverBackgroundColor: '#804DE8' },
      { data: [ 150, 330, 100 ], backgroundColor: '#00E641', hoverBackgroundColor: '#804DE8' }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe(data => {
    //     console.log(data);
    //     const labels: Object.keys(data);
    //     const values: Object.values(data);

    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);
    //   });

    this.graficasService.getUsuariosRedesSocialesDonutData()
       .subscribe(({labels, values}) => {
         this.doughnutChartLabels = labels;
         this.doughnutChartData.push(values);
        });
  }

}
