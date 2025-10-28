import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ApiResponse } from '../../../shared/models/api-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8080/api/v1/clientes';

  constructor(private http: HttpClient){}

  obtenerCliente(tipoDocumento: String, numeroDocumento: String): Observable<ApiResponse<Cliente>>{
    return this.http.get<ApiResponse<Cliente>>(`${this.apiUrl}/${tipoDocumento}/${numeroDocumento}`)
  }

  listarClientes(): Observable<ApiResponse<Cliente[]>>{
    return this.http.get<ApiResponse<Cliente[]>>(`${this.apiUrl}/listar`)
  }

  editarCliente(id: number, cliente: Cliente): Observable<ApiResponse<Cliente>>{
    return this.http.put<ApiResponse<Cliente>>(`${this.apiUrl}/modificar/${id}`, cliente)
  }
  
}