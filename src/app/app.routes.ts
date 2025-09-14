import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ListarPedidos } from './features/pedidos/pages/listar-pedidos/listar-pedidos';
import { CrearPedido } from './features/pedidos/pages/crear-pedido/crear-pedido';
import { EditarPedido } from './features/pedidos/pages/editar-pedido/editar-pedido';
import { DetallePedido } from './features/pedidos/pages/detalle-pedido/detalle-pedido';

export const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:Home},
  {path:'pedidos/listar', component: ListarPedidos},
  {path:'pedidos/crear', component: CrearPedido},
  {path:'pedidos/editar/:id', component: EditarPedido},
  {path: 'pedidos/:id', component: DetallePedido},
  {path:'**', redirectTo: '/home'}
];
