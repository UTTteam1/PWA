import { Component, OnInit, ViewChild} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ver-articulo',
  templateUrl: './ver-articulo.component.html',
  styleUrls: ['./ver-articulo.component.css']
})

export class VerArticuloComponent implements OnInit {

  
 data: Articulo[]= [];
 
 displayedColumns= ['cod_barras', 'descripcion', 'precio_compra', 'action']

 constructor(private service: ArticuloService, private router:Router){

 }
 
  ngOnInit():void{
    this.service.getArticulo().subscribe((x)=> {
    this.data = x;
  });
  }
  editarArticulo(cod_barras:string){
this.router.navigate(['editar-articulo', cod_barras]);
  }


  agregar():void{
this.router.navigate(['registro-articulo']);
  }

  venta():void{
    this.router.navigate(['ventas1']);
      }
  
public salir(){
        this.service.logout()
        window.location.reload();
        this.router.navigate(['login']);
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


