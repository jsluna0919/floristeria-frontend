
import { Cliente } from "../../clientes/models/cliente";
import { Destinatario } from "../../destinatarios/models/destinatario";

export interface Pedido {

    id: number
    cliente: Cliente
    destinatario: Destinatario
    motivoPedido: string
    arregloFloral: string
    descripcion: string
    anexos: string
    precio: number
    imagen: string
    mensaje: string
    ciudadEnvio: string
    direccionEnvio: string
    fechaEntrega: string
    formaPago: string
    estado: string
    fechaCreacion: Date
    fechaModificacion: Date | null
}
