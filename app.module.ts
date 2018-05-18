import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { AdminComponent } from './components/admin.component';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { routing } from './route.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpService } from './service/http-handler.service';
import { Roles } from './service/roles';
import { AuthGuard } from './service/auth.guard';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,routing,HttpModule,FormsModule
  ],
  providers: [AuthGuard, HttpService, Roles, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
