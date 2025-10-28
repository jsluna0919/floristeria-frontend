import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../services/cliente';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-detalle-cliente',
  imports: [],
  templateUrl: './detalle-cliente.html',
  styleUrl: './detalle-cliente.scss'
})
export class DetalleCliente implements OnInit{

  cliente!: Cliente;

  constructor(
    private route: ActivatedRoute,
    private service: ClienteService,
    private router: Router
  ){}

  ngOnInit(): void {
      const tipoDocumeto = String(this.route.snapshot.paramMap.get('tipoDocumento'))
      const numeroDocumento = String(this.route.snapshot.paramMap.get('numeroDocumento'))
      this.service.obtenerCliente(tipoDocumeto,numeroDocumento).subscribe(resp =>{this.cliente = resp.data})
  }

  handleButtonClick(action: string, tipoDocumento?: any, numeroDocumento?: any): void{
    switch(action){
      case 'home':
        this.router.navigate(['/home'])
      break

      case 'modificar':
        this.router.navigate(['/clientes/modificar',tipoDocumento,numeroDocumento])
        break
    }
  }
}