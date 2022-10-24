import { Component, OnInit, ViewChild} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable} from 'rxjs';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';



@Component({
  selector: 'app-ver-articulo',
  templateUrl: './ver-articulo.component.html',
  styleUrls: ['./ver-articulo.component.css']
})

export class VerArticuloComponent implements OnInit {

  
 data: Articulo[]= [];
 displayedColumns= ['cod_barras', 'descripcion', 'precio_compra']

 constructor(private service: ArticuloService){

 }
 
  ngOnInit():void{
    this.service.getArticulo().subscribe((x)=> {
    this.data = x;
  });
  }

  // Paginacion
  pageSize = 100;
  desde:number = 0;
  hasta:number = 100;

  cambiarpag(e:PageEvent){
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
}


