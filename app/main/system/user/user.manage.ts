import { Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {UserAddComponent} from './user.add';
@Component({
    templateUrl: "./app/main/system/user/user.manage.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/userAdd',
        name: 'UserAdd',
        component: UserAddComponent
    }
])
export class UserManageComponent{

}
