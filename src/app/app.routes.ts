import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent} from './components/heroe/heroe.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BucadorComponent } from './components/bucador/bucador.component';


const APP_ROUTES: Routes=[
{path:'home', component: HomeComponent},
{path:'heroes', component: HeroesComponent},
{path:'About', component: AboutComponent},
{path:'heroe/:id', component:HeroeComponent},
{path:'buscar/:termino',component: BucadorComponent},
{path:"**", pathMatch:'full',redirectTo:''}
];

export const app_routing =RouterModule.forRoot(APP_ROUTES, {useHash:true});

