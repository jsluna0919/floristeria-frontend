import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../shared/models/pedido';
import { PedidoService } from '../../core/services/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  imports: [CommonModule],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.scss'
})
export class Pedidos implements OnInit {

  pedidos: Pedido[] = [];
  totalPedidos = 0;
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.obtenerPedidos();
  }

  obtenerPedidos(){
    this.pedidoService.listarPedidos()
    .subscribe(response => {
      this.pedidos = response.content
      this.totalPedidos = response.page.totalElements
    });
  }
}
