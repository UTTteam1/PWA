import { Component, OnInit, AfterViewInit,OnDestroy } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit,OnDestroy {

  subs: Subscription[]=[];
  
  loginForm: FormGroup;


  constructor(private fb:FormBuilder, private router:Router ,private articuloService: ArticuloService) { 

    if(this.articuloService.usuariodata){
      this.router.navigate(['/ventas'])
  }

    this.loginForm = this.fb.group({

      user_name:['',Validators.required],
      password: ['',Validators.required]
      
    });
    

  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.articuloService.login(this.loginForm.value).subscribe(res=>{
      if(res !=null){
          // console.log(localStorage.getItem('usuario'))
          this.router.navigate(['/ventas'])
      }
  })
}
  


  ngAfterViewInit():void{

  }
  ngOnDestroy(): void {
    this.subs.forEach(s=>s.unsubscribe());
  }

  }

  
