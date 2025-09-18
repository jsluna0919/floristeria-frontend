import { Arreglo } from "../../arreglos/models/arreglo";
import { Cliente } from "../../clientes/models/cliente";
import { Destinatario } from "../../destinatarios/models/destinatario";

export interface Pedido {

    id: number
    cliente: Cliente
    arreglo: Arreglo
    destinatario: Destinatario
    ciudadEnvio: string
    direccionEnvio: string
    fechaEntrega: string
    formaPago: string
    estado: string
    fechaCreacion: Date
    fechaModificacion: Date | null
}
