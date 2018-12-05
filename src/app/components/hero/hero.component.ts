import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent {

  hero:any = {};

  constructor( private activatedRoute: ActivatedRoute,
              private heroService:HerosService,
              private router:Router) 
              {
   
        this.activatedRoute.params.subscribe(params => {
        this.hero = heroService.getHero(params['id']);
    })
   }

   goToHeros(){
    this.router.navigate(['/heros'])
    }
}
