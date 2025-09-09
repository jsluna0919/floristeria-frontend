import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PedidoModel} from "../../models/pedido.model";
import {PedidosService} from "../../services/pedidos.service";

@Component({
  selector: 'app-crear-pedido',
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-pedido.component.html',
  styleUrl: './crear-pedido.component.scss'
})
export class CrearPedidoComponent {

  pedido: PedidoModel = {
    cliente: { tipoDocumento: '', numeroDocumento: '', nombre: '', apellido: '', telefono: '', email: '', ciudad: '', direccion: '' },
    arreglo: { nombre: '', descripcion: '', anexos: '', precio: 0, imagen: '', mensaje: '' },
    destinatario: { nombre: '', telefono: '', ciudad: '', direccion: '' },
    fechaEntrega: ''
  };

  constructor(private pedidoService: PedidosService) {}

  crearPedido(): void {
    this.pedidoService.crear(this.pedido).subscribe(() => {
      alert('Pedido creado exitosamente ✅');
      window.location.href = '/pedidos';
    });
  }
}
