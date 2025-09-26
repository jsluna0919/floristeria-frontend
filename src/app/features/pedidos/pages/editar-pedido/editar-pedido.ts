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
import { finalize, tap } from 'rxjs';

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
  private formatTime(d: Date): string {
  const hh = String(d.getHours()).padStart(2,'0');
  const mm = String(d.getMinutes()).padStart(2,'0');
  return `${hh}:${mm}`;
}

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
    const idParam = this.route.snapshot.paramMap.get('id')
    const id = Number(idParam)
    if (!Number.isNaN(id)){
      this.cargarPedido(id);
    }else{console.error('ID de pedido invalido', idParam)}
  }

  cargarPedido(id: number): void{
    this.service.obtenerPedido(id)
    .pipe(
      tap((resp: ApiResponse<any>) => console.log('Resp Api:', resp)),
      finalize(() => console.log('Carga finalizada'))
    )
    .subscribe({
      next: (resp) => {
        if(resp.success){
          this.pedido = resp.data;
          console.log('Pedido cargado', this.pedido)
        }else{console.warn('API respondio sin exito', resp)}

        if(this.pedido?.fechaEntrega){
          const d = new Date(this.pedido.fechaEntrega);
          this.pedido.fechaEntrega = d;
          this.horaEntrega = this.formatTime(d);          
        }else{this.horaEntrega = ''};
      },
      error:(err) => console.error('Errpr cargando pedido', err)
    });
  }

  guardarCambios():void{
    const fecha = new Date(this.pedido.fechaEntrega)
    const [hora,minutos] = this.horaEntrega.split(':');
    fecha.setHours(+hora, +minutos)
    this.pedido.fechaEntrega = fecha.toISOString()
    this.service.editarPedido(this.pedido.id, this.pedido)
    .subscribe({
      next:(resp: ApiResponse<any>) => {
        if(resp.success){
          alert('Pedido Actualizado con éxitos')}
      },
      error:(err) =>{console.error('Error al actualizar pedido', err)}
    });
    this.router.navigate(['/home'])
  }

    volver(){
    this.router.navigate(['/home'])
  }

}
