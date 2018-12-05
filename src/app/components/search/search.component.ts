import { Component, OnInit } from '@angular/core';
import { HerosService, IHero } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heros:IHero[] = [];

  constructor( private activatedRoute: ActivatedRoute,
    private herosService: HerosService) { 

      this.activatedRoute.params.subscribe(params => {
        console.log(params['textSearch']);
      this.heros = herosService.searchHeros(params['textSearch']);
    })
  }

  ngOnInit() {
    this.heros = this.herosService.getHeros();
  }
  
}
