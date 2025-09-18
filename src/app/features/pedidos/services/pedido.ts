import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../shared/models/api-response';
import { CrearPedidoDTO } from '../models/crear-pedido';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'http://localhost:8080/api/v1/pedidos';

  constructor(private http: HttpClient){}

  crearPedido(pedido: CrearPedidoDTO): Observable<ApiResponse<CrearPedidoDTO>>{
    return this.http.post<ApiResponse<CrearPedidoDTO>>(`${this.apiUrl}/crear`, pedido)
  }

  obtenerPedido(id: number): Observable<ApiResponse<Pedido>>{
    return this.http.get<ApiResponse<Pedido>>(`${this.apiUrl}/${id}`)
  }

  listarPedido(): Observable<ApiResponse<Pedido[]>>{
    return this.http.get<ApiResponse<Pedido[]>>(`${this.apiUrl}/listar`)
  }

  editarPedido(id: number, pedido: Pedido): Observable<ApiResponse<Pedido>>{
    return this.http.put<ApiResponse<Pedido>>(`${this.apiUrl}/modificar/${id}`, pedido);
  }

  eliminarPedido(id: number): Observable<ApiResponse<null>>{
    return this.http.delete<ApiResponse<null>>(`${this.apiUrl}/eliminar/${id}`)
  }
  
}