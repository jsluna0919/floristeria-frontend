import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-pedidos',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-pedidos.html',
  styleUrl: './listar-pedidos.scss'
})
export class ListarPedidos implements OnInit{

  pedidos: Pedido[] = [];

  constructor(private service: PedidoService){}

  ngOnInit(): void {
    this.service.listarPedido().subscribe(resp =>{this.pedidos = resp.data;})
  }

  

}
