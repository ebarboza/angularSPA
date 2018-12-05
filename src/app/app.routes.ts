import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'
import { HerosComponent } from './components/heros/heros.component'
import { HeroComponent } from './components/hero/hero.component'
import { SearchComponent } from './components/search/search.component'

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heros', component: HerosComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: 'search/:searchText', component: SearchComponent },
    { path: '**', pathMatch:'full', redirectTo:''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


