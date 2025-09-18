import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../pedidos/models/pedido';
import { PedidoService } from '../pedidos/services/pedido';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{

  pedidos: Pedido[] = []
  pedidosPendientes: Pedido[] = []

  constructor(
    private router: Router,
    private service: PedidoService
  
  ){}

  ngOnInit(): void {
      this.service.listarPedido().subscribe(res => {
        this.pedidos = res.data;
        //1. Filtrar solo pedidos pendientes
        this.pedidosPendientes = this.pedidos.filter(p => p.estado === "PENDIENTE");
        //2. Ordenar por fecha de entrega ascendente
        this.pedidosPendientes.sort((a, b) =>{
          return new Date(a.fechaEntrega).getTime() - new Date(b.fechaEntrega).getTime()
        })
      })
  }

  irACrearPedido(){
    this.router.navigate(['/pedidos/crear'])
  }

  irAListarPedidos(){
    this.router.navigate(['/pedidos/listar'])
  }
  
  irABuscarPedidos(){
    this.router.navigate(['/pedidos'])
  }
}