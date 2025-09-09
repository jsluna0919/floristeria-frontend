import { Component, OnInit } from '@angular/core';
import {PedidoModel} from '../../models/pedido.model';
import {PedidosService} from '../../services/pedidos.service';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-listar-pedidos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-pedidos.component.html',
  styleUrl: './listar-pedidos.component.scss'
})
export class ListarPedidosComponent implements OnInit {
  pedidos: PedidoModel[] = [];

  constructor(private pedidoService: PedidosService) {}

  ngOnInit():void {
    this.cargarPedidos();
  }

  cargarPedidos() {
    this.pedidoService.listar().subscribe(data => this.pedidos = data);
  }

  editar(id?: number) {
    console.log('Editar pedido con ID:', id);

    window.location.href = `/pedidos/editar/${id}`;
  }

  eliminar(id?: number) {
    console.log('Eliminar pedido con ID:', id);

    if (id && confirm("¿Estás seguro de que deseas eliminar este pedido?")) {
      this.pedidoService.eliminar(id).subscribe(() => {
        this.cargarPedidos(); // Recargar la lista después de eliminar
      });
    }
  }

}
