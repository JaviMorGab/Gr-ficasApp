import { Component, ViewChild } from '@angular/core';

import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  proveedoresData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A', backgroundColor: '#29B7F0' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B', backgroundColor: '#3E94FA' },
    ]
  };
  
  productoData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Carros A', backgroundColor: '#1E35F0' },
    ]
  };

  public randomize1(): void {
    // Only Change 3 values
    console.log(this.productoData.datasets[0].data)
    this.productoData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.chart?.update();
  }

  public randomize2(): void {
    // Only Change 3 values
    console.log(this.proveedoresData.datasets[0].data)
    this.proveedoresData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.proveedoresData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.chart?.update();
  }

}
