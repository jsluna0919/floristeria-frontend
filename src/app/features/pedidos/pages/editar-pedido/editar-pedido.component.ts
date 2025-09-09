import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PedidoModel} from "../../models/pedido.model";
import {PedidosService} from "../../services/pedidos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editar-pedido',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-pedido.component.html',
  styleUrl: './editar-pedido.component.scss'
})
export class EditarPedidoComponent implements OnInit {

  pedido?: PedidoModel;
  id?: number;

  constructor(private pedidoService: PedidosService, private route:ActivatedRoute ) {}

  ngOnInit():void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.pedidoService.obtener(this.id).subscribe(data => this.pedido = data)
  }

  guardar(): void{
    if(this.id && this.pedido){
      this.pedidoService.actualizar(this.id, this.pedido).subscribe(() => {
        alert('Pedido actualizado exitosamente ✅');
        window.location.href = '/pedidos';
      });
    }
  }


}
