//mock-heroes.ts
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HEROES;
    return {
        setters:[],
        execute: function() {
            exports_1("HEROES", HEROES = [
                { id: 2, name: 'ironman' },
                { id: 3, name: 'thor' },
                { id: 4, name: 'catwomen' },
                { id: 5, name: 'supergirl' },
                { id: 6, name: 'superman' },
                { id: 7, name: 'kara' }
            ]);
        }
    }
});
//# sourceMappingURL=mock-heroes.js.map