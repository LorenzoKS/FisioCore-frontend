import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reservations-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {
  reservationForm!: FormGroup;
  reservationConfirmed = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      date: ['', Validators.required],
      hour: ['', Validators.required],
      service: ['', Validators.required]
    });
  }

  bloquearFechas = (d: Date | null): boolean => { // Filtro fechas válidas
    const date = d || new Date();
    const day = date.getDay();

    // Bloquear fines de semana (sábado y domingo)
    const esFinDeSemana = day === 0 || day === 6; // Domingo es 0, Sábado es 6
    // Bloquear 1 de enero
    const esAñoNuevo = date.getDate() === 1 && date.getMonth() === 0;
    const esReyes = date.getDate() === 6 && date.getMonth() === 0;

    return !esFinDeSemana && !esAñoNuevo && !esReyes;
  }

  onSubmit() {
    if (!this.reservationForm.valid) {
      this.reservationForm.markAllAsTouched();
      return;
    }
    const reservationData = this.formatReservationRequest(this.reservationForm.value);

    // TODO: Enviamos la solicitud de reserva al servidor

    this.reservationForm.reset();
  }

  private formatReservationRequest(formValue: any): any { // Formatear fecha y hora, para envio correcto backend
    const { name, email, phone, service, date, hour } = formValue;

    const formattedDate = date.toISOString().split('T')[0];
    const hours = hour.getHours().toString().padStart(2, '0');
    const minutes = hour.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    return {
      name,
      email,
      phone,
      date: formattedDate,
      hour: formattedTime,
      service
    };
  }
}
