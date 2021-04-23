import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe:any ={

  }

  constructor(private activateRoute:ActivatedRoute,
              private _HeroesService:HeroesService) {
  
  this.activateRoute.params.subscribe ((params: any) =>{
    this.heroe = _HeroesService.getHeroe (params['id'])

  })
}

}




