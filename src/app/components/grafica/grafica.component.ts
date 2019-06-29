import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss'],
})
export class GraficaComponent implements OnInit {

  pieChartData;

  constructor() {

  }

  ngOnInit(): void {
    this.useAngularLibrary();
  }

  useAngularLibrary() {
    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Tipo de venta', 'Percent'],
        ['En venta',     33],
        ['Servicios',      33],
        ['Trabajos',  33]
      ],
      options: {
      'title': 'Ventas'
      }
    };
  }



}
