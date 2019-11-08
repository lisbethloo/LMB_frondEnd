import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  NavbarHomeComponent } from './components/home/navbar-home/navbar-home.component';
import { HomepageComponent } from './components/home/homepage/homepage.component';
import { NosotrosComponent } from './components/home/nosotros/nosotros.component';
import { ServiciosComponent } from './components/home/servicios/servicios.component';
import { NavbarAdminComponent } from './components/admin/navbar-admin/navbar-admin.component';
import { LoginComponent } from './components/user/login/login.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { TrabajosComponent } from './components/home/trabajos/trabajos.component';
/* creacion de los componentes*/

const routes: Routes = [
  {
    path: '',
    component: NavbarHomeComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'Nosotros',
        component: NosotrosComponent,
      },
      {
        path: 'Trabajos',
        component: TrabajosComponent,
      },
     {
        path: 'footer',
        component: FooterComponent,
      }
    ]
  },
  {
    path: 'admin',
    component: NavbarAdminComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: '',
        component: HomepageComponent,
      }

    ]
  },
  {
    path: 'user',
    component: NavbarHomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '',
        component: HomepageComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [];
