import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const roleGuard: CanActivateFn = (route) => {

  const auth = inject(Auth)
  const router = inject(Router)
  const expectedRoles: string[] = route.data?.['roles']
  const userRole = auth.getRole()

  if(!expectedRoles || expectedRoles.length === 0){return true}

  const hasPermission = expectedRoles.includes(userRole)
  if(!hasPermission){
    router.navigate(['/home'])
    return false
  }

  return true;
};