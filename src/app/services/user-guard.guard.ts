import { ArticuloService } from './articulo.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  constructor(private articuloService:ArticuloService,private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      // const usuario=this.authserv.usuariodata;
      const usuario=localStorage.getItem('usuario')

      if(usuario != null){
            return true
        }

        this.router.navigate(['login'])
        return false;
    }
}
