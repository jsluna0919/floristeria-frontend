import { Routes } from '@angular/router';
import {ListarPedidosComponent} from './features/pedidos/pages/listar-pedidos/listar-pedidos.component';
import {CrearPedidoComponent} from './features/pedidos/pages/crear-pedido/crear-pedido.component';
import {EditarPedidoComponent} from './features/pedidos/pages/editar-pedido/editar-pedido.component';

export const routes: Routes = [
  {path:'', redirectTo:'/pedidos', pathMatch:'full'},
  {path:'/pedidos', component: ListarPedidosComponent},
  {path:'pedidos/crear', component: CrearPedidoComponent},
  {path:'pedidos/editar/:id', component: EditarPedidoComponent},
  {path:'**', redirectTo: '/pedidos'}
];
