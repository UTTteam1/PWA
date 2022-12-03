import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {map, tap} from 'rxjs/operators'
import { Articulo } from '../interfaces/articulo';
import { Usuario } from '../interfaces/usuario';
import { Data } from '@angular/router';
import { User } from '../interfaces/user';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {


public get usuariodata(): Usuario{
  return (JSON.parse(localStorage.getItem('usuario') || '{}')) 
}

  constructor(private http: HttpClient) {}

  //login
  url1= 'https://localhost:1921/api/token';
  
  login(user_name:string, password:string): Observable<any>{
    let x = 
      {
        user_name : user_name,
        password : password
      };
    
    console.log(x);
    return this.http.post<any>(this.url1, x , httpOptions);
}


  //cerranis sesion y eliminamos el token del localStorage
  public logout(){
    localStorage.removeItem('usuario');
    // localStorage.removeItem('user_name');
    // return true;
  }



  private url = 'https://localhost:1921/api/articulo';

  getArticulo():Observable<Articulo[]>{

    return this.http.get<Articulo[]>(this.url);
  }
  getId(cod_barras: string): Observable<Articulo>{
    return this.http.get<Articulo>( this.url+"/"+cod_barras);
  }
  createArticulo(articulo: Articulo){
    console.log(articulo);
    return this.http.post<Articulo>(this.url, articulo);
  }
  updateArticulo(articulo:Articulo){
    return this.http.put<Articulo>(
      this.url+"/"+articulo.cod_barras, articulo
    );
  }
  deletePersona(articulo:Articulo){
    return this.http.delete<Articulo>(this.url+"/"+articulo.cod_barras);
  }
 getVenta (){
  const urlAPI =
      "http://localhost:1921/api/ventaArticulo";
    return this.http.get(urlAPI);
 }
 
}
