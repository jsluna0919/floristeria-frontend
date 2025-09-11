import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  pedidosPendientes = [
    { id: 1, cliente: 'Carlos Gómez', fecha: '2025-09-10', estado: 'Pendiente' },
    { id: 2, cliente: 'Sofía Pérez', fecha: '2025-09-11', estado: 'Pendiente' },
    { id: 3, cliente: 'Ana Torres', fecha: '2025-09-12', estado: 'Pendiente' }
  ]

  constructor(private router: Router){}

  irACrearPedido(){
    this.router.navigate(['/pedidos/crear'])
  }

  irAListarPedidos(){
    this.router.navigate(['/pedidos/listar'])
  }
  
  irABuscarPedidos(){
    this.router.navigate(['/pedidos'])
  }
}