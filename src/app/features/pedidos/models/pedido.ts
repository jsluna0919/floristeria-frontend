import { Arreglo } from "../../arreglos/models/arreglo";
import { Cliente } from "../../clientes/models/cliente";
import { Destinatario } from "../../destinatarios/models/destinatario";

export interface Pedido {

    id?: number
    cliente: Cliente
    arreglo: Arreglo
    destinatario: Destinatario
    fechaEntrega: String
    estado: string
    fechaCreacion: string
    fechaModificacion: string
}
