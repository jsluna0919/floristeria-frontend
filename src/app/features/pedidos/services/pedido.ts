import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'http://localhost:8080/api/v1/pedidos';

  constructor(private http: HttpClient){}

  crearPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(`this.apiUrl/crear`, pedido)
  }

  obtenerPedido(id: number): Observable<Pedido>{
    return this.http.get<Pedido>(`${this.apiUrl}/${id}`)
  }

  listarPedido(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/listar`)
  }

  editarPedido(id: number, pedido: Pedido): Observable<Pedido>{
    return this.http.put<Pedido>(`${this.apiUrl}/modificar/${id}`, pedido);
  }

  eliminarPedido(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`)
  }
  
}