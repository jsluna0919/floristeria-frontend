import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CrearPedidoDTO } from '../../models/crear-pedido';
import { PedidoService } from '../../services/pedido';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-pedido',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  
  ],
  templateUrl: './crear-pedido.html',
  styleUrl: './crear-pedido.scss'
})
export class CrearPedido {

  horaEntrega: string = '';

  formasPago = [
    'TARJETA_CREDITO',
    'TARJETA_DEBITO',
    'PAYPAL',
    'TRANSFERENCIA_BANCARIA',
    'EFECTIVO'
  ];

  tipoDocumento = [
    'C.C',
    'C.E',
    'NIT',
    'PASAPORTE',
    'OTRO'
  ]

  motivoPedido = [
    'CUMPLEAÑOS',
    'ANIVERSARIO',
    'SAN_VALENTIN',
    'DESPEDIDA',
    'OTRO'
  ]

  nuevoPedido: CrearPedidoDTO = {
    cliente: { tipoDocumento: '', numeroDocumento: '', nombre: '', apellido: '', telefono: '', email: '', ciudad: '',  direccion: '' },
    destinatario: { nombre: '', telefono: '' },
    motivoPedido: '',
    arregloFloral: '',
    descripcion: '',
    anexos: '',
    precio: 0,
    imagen: '',
    mensaje: '',
    ciudadEnvio: '',
    direccionEnvio: '',
    fechaEntrega: '',
    formaPago: ''
  };

  constructor(private service: PedidoService, private router: Router){}

  guardarPedido(){
    const fecha = new Date(this.nuevoPedido.fechaEntrega);
    const [hora,minutos] = this.horaEntrega.split(':');
    fecha.setHours(+hora, +minutos)
    
    this.nuevoPedido.fechaEntrega = fecha.toISOString();

    this.service.crearPedido(this.nuevoPedido).subscribe({
      next: res =>{
        console.log('Pedido creado', res)
        alert('✅ Pedido creado con éxito')
      },
      error: err =>{
        console.error(err);
        alert('❌ Error al crear el pedido');
      }
    });
    this.router.navigate(['/home'])
  }

  volver(){
    this.router.navigate(['/home'])
  }

}