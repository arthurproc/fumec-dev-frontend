import { Injectable } from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         CanActivate,
         RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.auth.isAuth()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}