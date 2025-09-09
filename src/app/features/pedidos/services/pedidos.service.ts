import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PedidoModel} from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private apiUrl = 'http://localhost:8080/api/v1/pedidos';

  constructor(private http: HttpClient) {}

  listar(): Observable<PedidoModel[]>{
    return this.http.get<PedidoModel[]>(`${this.apiUrl}/pedidos/listar`)
  }

  obtener(id: number): Observable<PedidoModel>{
    return this.http.get<PedidoModel>(`${this.apiUrl}/pedidos/obtener/${id}`);
  }

  crear(pedido: PedidoModel): Observable<PedidoModel>{
    return this.http.post<PedidoModel>(`${this.apiUrl}/pedidos/crear`, pedido);
  }

  actualizar(id: number, pedido: PedidoModel): Observable<PedidoModel>{
    return this.http.put<PedidoModel>(`${this.apiUrl}/pedidos/actualizar/${id}`, pedido);
  }

  eliminar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/pedidos/eliminar/${id}`);
  }

}
