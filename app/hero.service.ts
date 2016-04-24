//hero.service.ts

import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService{

	getHeroes(){
		return Promise.resolve(HEROES);
		//return HEROES;
	}

	//get heroes slowly
	// getHeroesSlowly(){
	// 	return new Promise<Hero[]>(
	// 			resolve => setTimeout(() => resolve(HEROES),2000) // 2 sec
	// 		);
	// }

	getHero(id : number){
		return Promise.resolve(HEROES).then(
				heroes => heroes.filter(hero => hero.id === id)[0]
			);
		// var her = HEROES.filter(h => h.id === id)[0];
		// return her;
	}

}