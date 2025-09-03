import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    UserInfoComponent,
    UserReservationsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
