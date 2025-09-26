import { CrearClienteDTO } from "../../clientes/models/crear-cliente";
import { CrearDestinatarioDTO } from "../../destinatarios/models/crear-destinatario";

export interface CrearPedidoDTO {

    cliente: CrearClienteDTO
    destinatario: CrearDestinatarioDTO
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
}
