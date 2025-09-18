import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../../services/pedido';
import { CommonModule } from '@angular/common';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-detalle-pedido',
  imports: [CommonModule],
  templateUrl: './detalle-pedido.html',
  styleUrl: './detalle-pedido.scss'
})
export class DetallePedido implements OnInit{

  pedido!: Pedido;

  constructor(
    private route: ActivatedRoute,
    private service: PedidoService,
    private router: Router
  ){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.service.obtenerPedido(id).subscribe(resp => {this.pedido = resp.data})
  }

  irAtras(){
    this.router.navigate(['/pedidos/listar'])
  }

  irAModificarPedido(id: number){
    this.router.navigate(['/pedidos/modificar/{id}'])
  }
}