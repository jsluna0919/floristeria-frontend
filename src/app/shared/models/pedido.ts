import { Cliente } from "./cliente";
import { Destinatario } from "./destinatario";
import { Repartidor } from "./repartidor";
import { Usuario } from "./usuario";

export interface Pedido {
    id: number;

    cliente: Cliente;

    destinatario: Destinatario;

    repartidor: Repartidor | null;

    usuario: Usuario;

    motivoArreglo: string;

    arregloFloral: string;

    descripcion: string;

    anexos: string | null;

    valorArreglo: number;

    imagen: string | null;

    mensaje: string;

    ciudadEnvio: string;

    direccionEnvio: string;

    sector: string;

    observaciones: string | null;

    valorEnvio: number;

    fechaEntrega: string;

    total: number;

    formaPago: string;

    estadoPago: string;

    estadoPedido: string;

    imgArregloRealizado: string | null;

    fechaCreacion: string;

    fechaModificacion: string | null;
}