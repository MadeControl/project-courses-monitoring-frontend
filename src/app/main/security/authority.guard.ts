import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenHolderService} from './token-holder.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorityGuard implements CanActivate, CanActivateChild {

  validRoles = ['ROLE_ADMIN', 'ROLE_MANAGER', 'ROLE_ENGINEER'];

  constructor(private tokenStorageService: TokenHolderService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const roles: string[] = this.tokenStorageService.getAuthorities();
    if (this.validRoles.includes(roles[0])) {
      return true;
    }
    return this.router.parseUrl('/login');
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
}
