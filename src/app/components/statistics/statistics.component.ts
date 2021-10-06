import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
} from 'ng-apexcharts';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  label: ApexDataLabels;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  chartOptions!: Partial<ChartOptions> | any;
  series: any = [];
  labels: any = [];
  productData!: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productData=this.productService.getProducts();
    this.handleData();
    this.generarGraficas();
  }

  handleData() {
    this.productData.forEach((element) => {

      this.series = [...this.series, (element.precio_mayor+element.precio_menor)/2];
      this.labels = [...this.labels, element.nombre];
    });
    console.log(this.series);
    console.log(this.labels);
  }

  generarGraficas() {
    this.chartOptions = {
      series: this.series,
      chart: {
        width: 800,
        type: 'pie',
      },
      labels: this.labels,
      responsive: [
        {
          breakpoint: 580,
          options: {
            chart: {
              width: 800,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
