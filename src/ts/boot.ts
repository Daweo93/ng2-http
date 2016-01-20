import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from "./app.component";
import {AppService} from "./app.service";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(AppComponent, [AppService, HTTP_PROVIDERS]);
