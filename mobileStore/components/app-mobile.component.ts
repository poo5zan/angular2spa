// app-mobile.component.ts

import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';

import {MobileListComponent} from './mobile-list.component';
import {MobileDetailsComponent} from './mobile-details.component';


@Component({
	selector:'app-mobileStore',
	templateUrl: 'mobileStore/templates/app-mobile.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
	{path: '/mobiles', name: 'MobileList', component:MobileListComponent},
	{path: '/mobile/details', name: 'MobileDetails', component:MobileDetailsComponent}

	])

export class AppMobileStoreComponent{}
