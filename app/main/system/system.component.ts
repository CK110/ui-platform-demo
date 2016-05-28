import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {UserManageComponent} from './user/user.manage';

@Component({
    templateUrl: "app/main/system/template.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/userManage/...',
        name: 'UserManage',
        component: UserManageComponent
    }
])
export class SystemComponent{

}
