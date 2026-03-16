import { Component, inject, OnInit } from '@angular/core';
import { Pedido } from '../../shared/models/pedido';
import { PedidoService } from '../../core/services/pedido';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/services/auth';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  imports: [CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    FormsModule],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.scss'
})
export class Pedidos implements OnInit {

  auth = inject(Auth)
  canCreateEditOrders = true; // reemplazar con lógica de AuthService
  pedidos: Pedido[] = [];
  totalPedidos = 0;
  searchTerm = '';
  estadoFilter = 'todos';
  constructor(private pedidoService: PedidoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerPedidos();
  }

  obtenerPedidos() {
    this.pedidoService.listarPedidos()
      .subscribe(response => {
        this.pedidos = response.content
        this.totalPedidos = response.page.totalElements
      });
  }

  nuevoPedido() {
    this.router.navigate(['/pedidos/crear']);
  }

  verDetalle(id: number) {
    this.router.navigate(['/pedidos', id]);
  }

  get filteredPedidos() {
    const search = this.searchTerm.toLowerCase();
    return this.pedidos
      .filter(p =>
        p.id.toString().includes(search)
      )
      .filter(p =>
        this.estadoFilter === 'todos' || p.estadoPedido === this.estadoFilter
      );
  }


}
