import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../../services/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-pedido',
  imports: [CommonModule],
  templateUrl: './detalle-pedido.html',
  styleUrl: './detalle-pedido.scss'
})
export class DetallePedido implements OnInit{

  pedido: any;

  constructor(
    private route: ActivatedRoute,
    private service: PedidoService
  ){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.service.obtenerPedido(id).subscribe(resp => {this.pedido = resp.data})
  }
}
