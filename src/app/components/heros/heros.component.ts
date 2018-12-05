import { Component, OnInit } from '@angular/core';
import { HerosService, IHero } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styles: []
})
export class HerosComponent implements OnInit {

  heros:IHero[] = [];

  constructor( private herosService: HerosService,
    private router:Router ) { }

  ngOnInit() {
    this.heros = this.herosService.getHeros();    
  }

  goToHero(idx:number){
    this.router.navigate(['/hero', idx])
  }


}
