import { Injectable } from '@angular/core';
import { ArticuloService } from 'src/app/services/articulo.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private articuloService: ArticuloService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const usuario=this.apiAuth.usuariodata;
    const usuario=localStorage.getItem('usuario')

   if(usuario !=null){
            const token=usuario.replace(/(")/gm,"")

            request=request.clone({
                setHeaders:{
                    Authorization: `Bearer ${token}`
                }
            })
        }
        return next.handle(request);
    }
}
export const authInterceptorProviders = [
  {
    provide : HTTP_INTERCEPTORS,
    useClass : JwtInterceptorInterceptor,
    multi : true
  }
]
