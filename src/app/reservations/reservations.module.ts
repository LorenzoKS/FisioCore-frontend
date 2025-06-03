import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationPageComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTimepickerModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class ReservationsModule { }
