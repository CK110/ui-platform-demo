import { bootstrap }      from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { provide } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {AppComponent} from './app.component';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

bootstrap(AppComponent, [ROUTER_PROVIDERS,provide(APP_BASE_HREF, {useValue : '/'})]);
