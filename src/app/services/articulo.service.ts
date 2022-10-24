import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Articulo } from '../interfaces/articulo';


@Injectable({
    providedIn: 'root'
})
export class ArticuloService{
    constructor(private http: HttpClient){}

private url = 'http://localhost:8004/api/articulo/';


    getArticulo(): Observable<Articulo[]>{
        return this.http.get<Articulo[]>(this.url)
    }
   


}
    