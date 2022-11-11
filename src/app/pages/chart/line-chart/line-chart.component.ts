import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements AfterViewInit {

  cod_barras: any;
  cantidad: any;
  result: any;
  chart: any = [];


  constructor(private router: Router, private service: ArticuloService, private http: HttpClient) {
    Chart.register(...registerables);
  }



  ngAfterViewInit(): void {
    this.getVentas();


  }

  public getVentas() {

    this.service.getVenta().subscribe(res => {
      this.result = res;
      // console.log(this.result);
      this.cantidad = this.result.map((cantidad: any) => cantidad.total)
      this.cod_barras = this.result.map((cod_barras: any)=> cod_barras.code)

      console.log(this.cantidad,  this.cod_barras);

      //show chart data
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.cod_barras,
          datasets: [
            {
              label: 'Cantidad vendidos',
              data: this.cantidad,
borderWidth: 3,
               fill: false,
              backgroundColor: 'rgba(93,175,89,0.1)',
              borderColor: '#3e95cd'
            },
            // {
            //   label: "Precio",
            //   data: this.precio,
            //   borderWidth: 3,
            //    fill: false,
            //   backgroundColor: 'limegreen'
            // }  
          
          ],
          
        },
        options: {
          aspectRatio:2.5 ,
          plugins: {
            title: {
              display: true,
              text: 'Top ventas ',
            }
          }
          
        }
      
      });

    });

  }


  salir(): void {
    this.router.navigate(['ver-articulo']);
  }

}
