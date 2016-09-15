"use strict";
var router_1 = require("@angular/router");
var index_component_1 = require("./components/index/index.component");
var appRoutes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: index_component_1.IndexComponent}
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.js.map