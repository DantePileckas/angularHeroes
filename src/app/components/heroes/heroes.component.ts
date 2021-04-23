import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService} from '../../services/heroes.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[]=[];

  constructor(private _heroesservices:HeroesService,
              private router:Router) {
    //console.log("constructor");
   }

  ngOnInit(): void {
  this.heroes=this._heroesservices.getHeroes();
  //console.log(this.heroes);

  }
  
  verHeroes(idx:number){
    console.log(idx)
    this.router.navigate(['/heroe',idx] );
  }

}
