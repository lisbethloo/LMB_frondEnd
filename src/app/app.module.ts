import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './questions/dynamic-form-question.component';
import { DynamicFormComponent } from './questions/dynamic-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/home/homepage/homepage.component';
import { NavbarHomeComponent } from './components/home/navbar-home/navbar-home.component';
import { NosotrosComponent } from './components/home/nosotros/nosotros.component';
import { ServiciosComponent } from './components/home/servicios/servicios.component';
import { NavbarAdminComponent } from './components/admin/navbar-admin/navbar-admin.component';
import { TrabajosComponent } from './components/home/trabajos/trabajos.component';
import { LoginComponent } from './components/user/login/login.component';
import { FooterComponent } from './components/home/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    HomepageComponent,
    NavbarHomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    NavbarAdminComponent,
    TrabajosComponent,
    LoginComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, ReactiveFormsModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
