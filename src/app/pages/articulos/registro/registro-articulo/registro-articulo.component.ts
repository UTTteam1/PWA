import { Component, OnInit, ViewChild,ElementRef, AfterViewInit,OnDestroy } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registro-articulo',
  templateUrl: './registro-articulo.component.html',
  styleUrls: ['./registro-articulo.component.css']
})
export class RegistroArticuloComponent implements OnInit,AfterViewInit,OnDestroy {
  subs: Subscription[]=[];

  articulosForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.articulosForm = this.fb.group({
      nombre:['',Validators.required],
      social: ['',Validators.required],
      telefono: ['',[Validators.required, Validators.minLength(10)]]
    });

    this.subs.push(this.articulosForm.valueChanges.subscribe(console.log));
   }

ngOnInit(): void {
}

ngAfterViewInit():void{

}
ngOnDestroy(): void {
  this.subs.forEach(s=>s.unsubscribe());
}

}
