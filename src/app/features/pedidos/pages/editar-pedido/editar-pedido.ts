import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pedido',
  imports: [],
  templateUrl: './editar-pedido.html',
  styleUrl: './editar-pedido.scss'
})
export class EditarPedido implements OnInit{

  pedidoId!: number
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      this.pedidoId = Number(this.route.snapshot.paramMap.get('id'));
      console.log('Editando pedido con id', this.pedidoId);
  }

}
