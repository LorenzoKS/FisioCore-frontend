import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void { // Inicializamos validadores formulario
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
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
    this.authService.login(loginData).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('jwt', response.token); // Guardar datos del usuario en localStorage

        this.router.navigate(['/']); // Redirigir al usuario después del inicio de sesión exitoso
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    })
  }
}
