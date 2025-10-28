import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../../services/pedido';
import { CommonModule } from '@angular/common';
import { Pedido } from '../../models/pedido';
import { Button } from '../../../../shared/button/button';

@Component({
  selector: 'app-detalle-pedido',
  imports: [CommonModule, Button],
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

  irAModificarPedido(id: number){
    this.router.navigate(['/pedidos/modificar', id])
  }

  handleButtonClick(action: string): void{
    switch(action){
      case 'atras':
        this.router.navigate(['/pedidos/listar'])
      break

      case 'modificar':
        this.router.navigate(['/pedidos/modificar/', this.pedido.id])
      break

      case 'inicio':
        this.router.navigate(['/home'])
        break
    }
  }
}