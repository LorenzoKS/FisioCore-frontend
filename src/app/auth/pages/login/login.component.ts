import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { // Inicializamos validadores formulario
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void { // Envío petición backend inicio de sesión
    const loginData = this.loginForm.value;
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    
    // TODO: Enviarlo al backend
  }
}
