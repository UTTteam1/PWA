import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ArticuloService{

    /* constructor(private http: HttpClient){
  this.http.get('http://192.168.43.121:8004/api/articulo');
}*/
   
constructor(private http: HttpClient){
    console.log('Servicio HTTP: ');
}
/*GET*/

getArticulos(): Observable<any> {
    return this.http.get('http://192.168.43.121:8004/api/articulo');
}

/*Cosas nuevas agregadas */
createArticulos(articulo: any): Observable<any>{
return this.http.post('http://192.168.43.121:8004/api/articulo', articulo);

}
editArticulos(articulo: any): Observable<any>{
return this.http.post('http://192.168.43.121:8004/api/articulo', articulo);
}

deleteArticulos(): Observable<any>{
return this.http.delete('http://192.168.43.121:8004/api/articulo');
}
}
    