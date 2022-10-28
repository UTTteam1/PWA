import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  constructor(private http: HttpClient) {}

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
 
}
