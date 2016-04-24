// app-mobile.component.ts
System.register(['angular2/core', 'angular2/router', './mobile-list.component', './mobile-details.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, mobile_list_component_1, mobile_details_component_1;
    var AppMobileStoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mobile_list_component_1_1) {
                mobile_list_component_1 = mobile_list_component_1_1;
            },
            function (mobile_details_component_1_1) {
                mobile_details_component_1 = mobile_details_component_1_1;
            }],
        execute: function() {
            AppMobileStoreComponent = (function () {
                function AppMobileStoreComponent() {
                }
                AppMobileStoreComponent = __decorate([
                    core_1.Component({
                        selector: 'app-mobileStore',
                        templateUrl: 'mobileStore/templates/app-mobile.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/mobiles', name: 'MobileList', component: mobile_list_component_1.MobileListComponent },
                        { path: '/mobile/details', name: 'MobileDetails', component: mobile_details_component_1.MobileDetailsComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppMobileStoreComponent);
                return AppMobileStoreComponent;
            }());
            exports_1("AppMobileStoreComponent", AppMobileStoreComponent);
        }
    }
});
//# sourceMappingURL=app-mobile.component.js.map