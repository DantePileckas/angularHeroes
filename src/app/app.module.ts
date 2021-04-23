import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//rutas
import {app_routing} from './app.routes';

//Servicios
import {HeroesService} from'./services/heroes.services';


//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BucadorComponent } from './components/bucador/bucador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BucadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    HeroesService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
