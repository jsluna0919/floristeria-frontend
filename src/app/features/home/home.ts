import { CommonModule } from '@angular/common';
import { Component, computed, inject} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../core/services/auth';
import { Button } from '../../shared/button/button';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, Button, MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home{

  auth = inject(Auth)
  router = inject(Router)

  private menuItems = [
    { icon: 'assignment', label: 'Pedidos', path: '/pedidos', roles: ['ADMINISTRADOR', 'AUXILIAR', 'VENDEDOR'] },
    { icon: 'assignment_ind', label: 'Clientes', path: '/clientes', roles: ['ADMINISTRADOR', 'AUXILIAR'] },
    { icon: 'person_pin_circle', label: 'Destinatarios', path: '/destinatarios', roles: ['ADMINISTRADOR', 'AUXILIAR'] },
    { icon: 'insert_chart_outlined', label: 'Reportes', path: '/reportes', roles: ['ADMINISTRADOR'] },
    { icon: 'person', label: 'Usuarios', path: '/usuarios', roles: ['ADMINISTRADOR'] }
  ];
 
  filteredMenu = computed(() => {
    const rol = this.auth.getRole()
    if (!rol) return [];

    return this.menuItems.filter(item =>
      item.roles.includes(rol)
    );
  });

  logout(){
    this.auth.logout()
    this.router.navigate(['/login'])
  }
}