import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'shared-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn: boolean = false;

  constructor(private translate: TranslateService, private router: Router) {
    const savedLang = localStorage.getItem('lang') || 'es';
    translate.use(savedLang);

    // Verificamos si hay token
    this.isLoggedIn = !!localStorage.getItem('jwt');
  }

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/auth/iniciar-sesion']);
  }
}
