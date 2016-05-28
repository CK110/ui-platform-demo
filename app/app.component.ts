import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {HTTP_PROVIDERS}    from '@angular/http';
import {SystemComponent} from './main/system/system.component';
import {MenuTreeComponent} from "./components/menuTree/menu-tree.component";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES,MenuTreeComponent],
    providers: [HTTP_PROVIDERS]
})

@RouteConfig([
    // 带有name属性的RouteDefinition，把一个URL映射到一个组件上。
    {   path: '/system/...', name: 'System', component: SystemComponent }
])

export class AppComponent {
    menuInfo:any[] = [
        {
            name: "组件管理",
            children: [
                {
                    name: "panel",
                    router: ['System/UserManage/UserAdd']
                },
                {
                    name: "button",
                    router: ['System/UserManage/UserAdd']
                }
            ]
        }
    ];
}
