import {ClienteModel} from '../../clientes/models/cliente.model';
import {ArregloModel} from '../../arreglos/models/arreglo.model';
import {DestinatarioModel} from '../../destinatarios/models/destinatario.model';

export interface PedidoModel {

  id?: number;
  cliente: ClienteModel;
  arreglo: ArregloModel;
  destinatario: DestinatarioModel;
  fechaEntrega: String;
}
