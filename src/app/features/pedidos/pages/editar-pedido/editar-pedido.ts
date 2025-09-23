import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { PedidoService } from '../../services/pedido';
import { ApiResponse } from '../../../../shared/models/api-response';

@Component({
  selector: 'app-editar-pedido',
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
  templateUrl: './editar-pedido.html',
  styleUrl: './editar-pedido.scss'
})
export class EditarPedido implements OnInit{

  pedido: any = {cliente: {}, arreglo: {}, destinatario: {}}
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
  constructor(private route: ActivatedRoute, private service: PedidoService, private router: Router){}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id){
        this.cargarPedido
      }
  }

  cargarPedido(id: number): void{
    this.service.obtenerPedido(id).subscribe({
      next: (resp: ApiResponse<any>) =>{
        if(resp.success){
          this.pedido = resp.data;
        }
      },
      error:(err) =>{console.error('Error Cargando pedido', err)}
    });
  }

  guardarCambios():void{
    this.service.editarPedido(this.pedido.id, this.pedido)
    .subscribe({
      next:(resp: ApiResponse<any>) => {if(resp.success){alert('Pedido Actualizado con éxitos')}}, error:(err) =>{console.error('Error al actualizar pedido', err)}
    });
  }

    volver(){
    this.router.navigate(['/home'])
  }

}
