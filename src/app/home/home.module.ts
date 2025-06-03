import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { NuestrosServiciosComponent } from './components/nuestros-servicios/nuestros-servicios.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeroComponent } from './components/hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    LandingComponent,
    HeroComponent,
    NuestrosServiciosComponent,
    SobreNosotrosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class HomeModule { }