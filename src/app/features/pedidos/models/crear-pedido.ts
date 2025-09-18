import { CrearArregloDTO } from "../../arreglos/models/crear-arreglo";
import { CrearClienteDTO } from "../../clientes/models/crear-cliente";
import { CrearDestinatarioDTO } from "../../destinatarios/models/crear-destinatario";

export interface CrearPedidoDTO {

    cliente: CrearClienteDTO
    arreglo: CrearArregloDTO
    destinatario: CrearDestinatarioDTO
    ciudadEnvio: string
    direccionEnvio: string
    fechaEntrega: string
    formaPago: string
}
