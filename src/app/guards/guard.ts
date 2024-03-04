import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
class AuthGuard {
  router = inject(Router);
  authService = inject(AuthService);

  // canActivate method to check if the user is authenticated
  canActive(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      map(isLoggedIn => {
        if (isLoggedIn) {
          // If the user is authenticated, allow access
          return true;
        } else {
          // If the user is authenticated, allow access
          this.router.navigate(['/login']);
          return false;
        }
      }),
      // If the user is authenticated, allow access
      tap(result => console.log(result))
    );
  }
}

// Exporting IsAuthGuard as a CanActivateFn
export const IsAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
  // Using dependency injection to access the AuthGuard and call its canActivate method
  return inject(AuthGuard).canActive(route, state);
}