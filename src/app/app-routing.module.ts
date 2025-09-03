import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) // Lazy load the HomeModule
  },
  {
    path: 'reservar',
    loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), // Lazy load the AuthModule
  },
  {
    path: 'perfil',
    loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) // Lazy load the UserProfileModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
