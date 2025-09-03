import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  success: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void { // Inicializamos validadores formulario
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
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

    this.authService.register(registerData).subscribe({
      next: (response) => {
        console.log('Registro exitoso', response);
        this.success = true;
        // Resetear formulario después del registro exitoso
        this.registerForm.reset();

        setTimeout(() => {
          this.success = false; // Ocultar mensaje de éxito después de 5 segundos
        }, 10000);
      },
      error: (error) => {
        console.error('Error en el registro', error);
      }
    });
  }
}
