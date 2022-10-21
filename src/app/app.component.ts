import { Component, OnInit  } from '@angular/core';
import { ArticuloService } from './services/articulo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'pryEquipo';

  constructor(private articuloService: ArticuloService){
    console.log('Componente creado');
  }
  ngOnInit(): void {
    console.log('El componente se ha inicializado');
    /*Ahora, en el componente, cuando queramos llamar al 
    servicio (siempre y cuando lo hayamos inyectado en el controlador),
     tenemos que subscribirnos para recibir la información */
   this.articuloService.getArticulos()
   .subscribe(console.log);

   /*Cosas nuevas agregadas */
   this.articuloService.createArticulos({

   }).subscribe(console.log);

   
   this.articuloService.editArticulos({
    
  }).subscribe(console.log);

  
  this.articuloService.deleteArticulos()
   .subscribe(console.log);
}
}
