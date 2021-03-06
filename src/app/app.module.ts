import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {AdminGuard} from './util/guards';
import {JwtInterceptor} from './util/helpers';
import {AuthenticationService, UserService} from './service';
import {HeaderComponent} from './component/shared/header/header.component';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './component/auth/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {UserListComponent} from './component/user/user-list/user-list.component';
import {RegularService} from './service/regular.service';
import {RegisterComponent} from './component/auth/register/register.component';
import {InfocodesService} from './service/infocodes.service';
import {InfoService} from './service/info.service';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    UserListComponent,
    RegisterComponent
  ],
  schemas: [],
  providers: [
    AdminGuard,
    AuthenticationService,
    RegularService,
    InfocodesService,
    InfoService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
