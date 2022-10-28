import { Component, Inject, OnInit, ViewChild,ElementRef, AfterViewInit,OnDestroy } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo.service';


@Component({
  selector: 'app-registro-articulo',
  templateUrl: './registro-articulo.component.html',
  styleUrls: ['./registro-articulo.component.css']
})
export class RegistroArticuloComponent implements OnInit,AfterViewInit,OnDestroy {
  subs: Subscription[]=[];
  articuloForm: FormGroup;
  
  constructor(private fb:FormBuilder, private service:ArticuloService, private router:Router) {

    this.articuloForm = this.fb.group({

      cod_barras:['0000040610171',Validators.required],
      cod_asociado: [''],
      id_clasificacion: ['',Validators.required],
      cod_interno: ['864'],
      descripcion: ['',Validators.required],
      descripcion_corta: ['',Validators.required],
      cantidad_um: ['1.00',Validators.required],
      id_unidad: ['',Validators.required],
      id_proveedor: ['',Validators.required],
      precio_compra: ['95.210',Validators.required],
      utilidad: ['49',Validators.required],
      precio_venta: ['165',Validators.required],
      tipo_articulo: ['principal',Validators.required],
      stock: ['-1',Validators.required],
      stock_min: ['0',Validators.required],
      stock_max: ['0',Validators.required],
      iva: ['0.16',Validators.required],
      kit_fecha_ini: [''],
      kit_fecha_fin: [''],
      articulo_disponible: ['1',Validators.required],
      kit: ['0',Validators.required],
      fecha_registro: ['2019-06-24 12:09:09.883',Validators.required],
      visible: ['0',Validators.required],
      puntos: ['0',Validators.required],
      last_update_inventory: ['2017-11-21 18:33:03.217',Validators.required],
      cve_producto: ['01010101']
 
    });
    
    this.subs.push(this.articuloForm.valueChanges.subscribe(console.log));
   }

ngOnInit(): void {
}
onSubmit(){
this.service.createArticulo(this.articuloForm.value).subscribe((x)=>{
  console.log(x);
  this.router.navigate(['ver-articulo']);
});
}

salir():void{
  this.router.navigate (['ver-articulo']);
}

ngAfterViewInit():void{

}
ngOnDestroy(): void {
  this.subs.forEach(s=>s.unsubscribe());
}

}
