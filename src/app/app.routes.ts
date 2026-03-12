import { Routes } from '@angular/router';
import { Home } from './features/home/home';

import { Login } from './features/login/login';
import { Pedidos } from './features/pedidos/pedidos';
import { Clientes } from './features/clientes/clientes';
import { Destinatarios } from './features/destinatarios/destinatarios';
import { Reportes } from './features/reportes/reportes';
import { Usuarios } from './features/usuarios/usuarios';

export const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:Login},
  {
    path: 'home', component: Home,
    children:[
      { path: '', redirectTo: 'pedidos', pathMatch: 'full' },
      {path: 'pedidos', component: Pedidos},
      {path: 'clientes', component: Clientes},
      {path: 'destinatarios', component: Destinatarios},
      {path: 'reportes', component: Reportes},
      {path: 'usuarios', component: Usuarios}
    ]
  },
  {path:'**', redirectTo: ''}
];
