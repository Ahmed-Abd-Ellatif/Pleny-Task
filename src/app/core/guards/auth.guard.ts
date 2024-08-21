import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  if ('pleny-token' in localStorage) {
    return true;
  } else {
    return router.navigate(['/auth']);
  }
};
