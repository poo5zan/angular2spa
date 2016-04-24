//app.component.ts
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-details.component';


@Component({
	selector:'my-app',
	templateUrl:'app/app.component.html',
	directives:[ROUTER_DIRECTIVES],
	providers:[ROUTER_PROVIDERS,HeroService]
})

@RouteConfig([
{
	path: '/heroes',
	name: 'Heroes',
	component: HeroesComponent
},
{
	path: '/dashboard',
	name: 'Dashboard',
	component: DashboardComponent,
	useAsDefault: true
},
{
	path: '/detail/:id',
	name: 'HeroDetail',
	component: HeroDetailComponent
}
])

export class AppComponent{
	title = 'Heroes Duty from app';
}

