import { Component, OnInit, AfterViewInit,OnDestroy } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit,OnDestroy {

  subs: Subscription[]=[];
  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { 

    this.loginForm = this.fb.group({

      user:['',Validators.required],
      pass: ['',Validators.required]
      
    });
    

  }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.router.navigate(['ventas']);
  }

  ngAfterViewInit():void{

  }
  ngOnDestroy(): void {
    this.subs.forEach(s=>s.unsubscribe());
  }

  }


