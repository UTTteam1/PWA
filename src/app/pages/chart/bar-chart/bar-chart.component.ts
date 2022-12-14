import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
 
  constructor(private router:Router , private art: ArticuloService) { 
    Chart.register(...registerables);
  }
  public chart: any;
  
  ngOnInit(): void {
    
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart Title',
          }
        }
      
      }
      
    });

}

public Salir(){
  this.art.logout()
  window.location.reload();
}

  }

