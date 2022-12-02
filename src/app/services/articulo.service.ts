import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators'
import { Articulo } from '../interfaces/articulo';
import { Usuario } from '../interfaces/usuario';
import { Data } from '@angular/router';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {

url1:string = 'https://localhost:1921/api/login';

public get usuariodata(): Usuario{
  return (JSON.parse(localStorage.getItem('usuario') || '{}')) 
}

  constructor(private http: HttpClient) {}

  //login
  
  login(usuario: Usuario): Observable<Data>{
    console.log(usuario);
    return this.http.post<Data>(this.url1,usuario, httpOptions).pipe(
        map( res =>{
            if (res != null){                  
                // const usuario : Usuario = res;

                localStorage.setItem('usuario',JSON.stringify(res))                                        
                // this.usuarioSubject.next(res); 
            }
            else{
                return res;
                
            }
            return res;

        })
    );

}


  //cerranis sesion y eliminamos el token del localStorage
  public logout(){
    localStorage.removeItem('usuario');
    // localStorage.removeItem('user_name');
    // return true;
  }



  private url = 'http://localhost:1921/api/articulo';

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
