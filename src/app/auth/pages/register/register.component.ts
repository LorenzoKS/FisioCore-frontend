import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void { // Inicializamos validadores formulario
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surnames: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void { // Envío petición backend inicio de sesión
    const registerData = this.registerForm.value;
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    // TODO: Enviarlo al backend
  }
}
