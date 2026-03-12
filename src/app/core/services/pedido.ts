import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageResponse } from '../../shared/models/response';
import { Pedido } from '../../shared/models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly apiUrl = `${environment.baseUrl}/${environment.apiVersion}/pedidos`
  
  constructor(private http: HttpClient){}

  listarPedidos(): Observable<PageResponse<Pedido>>{
    return this.http.get<PageResponse<Pedido>>(`${this.apiUrl}/listar`)
  }
}
