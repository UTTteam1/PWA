import { Component, OnInit, Inject } from '@angular/core';
import { Articulo } from 'src/app/interfaces/articulo';
import { Subscription } from 'rxjs';
import { ArticuloService } from 'src/app/services/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import{FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit {
  subs: Subscription[]=[];
  articulosForm: FormGroup;
  articulo!: Articulo;
 

  constructor(private fb:FormBuilder, private service:ArticuloService, 
    private router:Router, private actRoute: ActivatedRoute 
    ) {

    
    this.articulosForm = this.fb.group({
      cod_barras:['',Validators.required],
      cod_asociado: [''],
      id_clasificacion: ['',Validators.required],
      cod_interno: [''],
      descripcion: ['',Validators.required],
      descripcion_corta: ['',Validators.required],
      cantidad_um: ['',Validators.required],
      id_unidad: ['',Validators.required],
      id_proveedor: ['',Validators.required],
      precio_compra: ['',Validators.required],
      utilidad: ['',Validators.required],
      precio_venta: ['',Validators.required],
      tipo_articulo: ['',Validators.required],
      stock: ['',Validators.required],
      stock_min: ['',Validators.required],
      stock_max: ['',Validators.required],
      iva: ['',Validators.required],
      kit_fecha_ini: [''],
      kit_fecha_fin: [''],
      articulo_disponible: ['',Validators.required],
      kit: ['',Validators.required],
      fecha_registro: ['',Validators.required],
      visible: ['',Validators.required],
      puntos: ['',Validators.required],
      last_update_inventory: ['',Validators.required],
      cve_producto: ['']
 
      
    });
    
    this.subs.push(this.articulosForm.valueChanges.subscribe(console.log));
   }

ngOnInit(): void {
this.service.getId(this.actRoute.snapshot.params['cod_barras']).subscribe((
  result: Articulo
)=>{
  this.articulosForm = new FormGroup({
    cod_barras : new FormControl(result['cod_barras']),
    cod_asociado: new FormControl(result['cod_asociado']),
    id_clasificacion: new FormControl(result['id_clasificacion']),
    cod_interno: new FormControl(result['cod_interno']),
    descripcion: new FormControl(result['descripcion']),
    descripcion_corta: new FormControl(result['descripcion_corta']),
    cantidad_um: new FormControl(result['cantidad_um']),
    id_unidad: new FormControl(result['id_unidad']),
    id_proveedor: new FormControl(result['id_proveedor']),
    precio_compra: new FormControl(result['precio_compra']),
    utilidad: new FormControl(result['utilidad']),
    precio_venta: new FormControl(result['precio_venta']),
    tipo_articulo: new FormControl(result['tipo_articulo']),
    stock: new FormControl(result['stock']),
    stock_min:new FormControl(result['stock_min']),
    stock_max: new FormControl(result['stock_max']),
    iva:new FormControl(result['iva']),
    kit_fecha_ini: new FormControl(result['kit_fecha_ini']),
    kit_fecha_fin: new FormControl(result['kit_fecha_fin']),
    articulo_disponible: new FormControl(result['articulo_disponible']),
    kit: new FormControl(result['kit']),
    fecha_registro: new FormControl(result['fecha_registro']),
    visible:new FormControl(result['visible']),
    puntos: new FormControl(result['puntos']),
    last_update_inventory: new FormControl(result['last_update_inventory']),
    cve_producto: new FormControl(result['cve_producto']),
  });
});
}
onSubmit(){

  console.log(this.articulosForm.value);
   this.service.updateArticulo(this.articulosForm.value).
   subscribe((result)=>{
    this.articulo=result;
    alert("Articulo actualizado");
      this.router.navigate(["ver-articulo"]);
   })
}


salir():void{
  alert("¿Seguro quieres salir?");
  this.router.navigate (['ver-articulo'])
}
}