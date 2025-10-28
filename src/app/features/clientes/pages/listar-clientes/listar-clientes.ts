import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ClienteService } from '../../services/cliente';

@Component({
  selector: 'app-listar-clientes',
  imports: [CommonModule,RouterModule],
  templateUrl: './listar-clientes.html',
  styleUrl: './listar-clientes.scss'
})
export class ListarClientes implements OnInit{

  clientes: Cliente[] = [];

  constructor(private service: ClienteService, private router: Router){}

  ngOnInit(): void {
      this.service.listarClientes().subscribe(resp => {this.clientes = resp.data})
  }

  irACliente(tipoDoc: string, numDoc: string): void{
    this.router.navigate(['/clientes', tipoDoc,numDoc])
  }

  irAInicio(){
    this.router.navigate([''])
  }

  irABuscarCliente(){
    this.router.navigate(['/'])
  }



}
