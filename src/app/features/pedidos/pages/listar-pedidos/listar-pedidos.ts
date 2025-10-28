import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-pedidos',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-pedidos.html',
  styleUrl: './listar-pedidos.scss'
})
export class ListarPedidos implements OnInit{

  pedidos: Pedido[] = [];

  constructor(private service: PedidoService, private router: Router){}

  ngOnInit(): void {
    this.service.listarPedido().subscribe(resp =>{this.pedidos = resp.data})
  }

  irACrearPedido(){
    this.router.navigate(['/pedidos/crear'])
  }
  
  irABuscarPedidos(){
    this.router.navigate(['/pedidos'])
  }

  irAPedido(id: number){
    this.router.navigate(['/pedidos', id])
  }

  irAInicio(){
    this.router.navigate([''])
  }

}