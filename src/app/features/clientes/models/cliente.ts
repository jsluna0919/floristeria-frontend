export interface Cliente {
    
    id?: number
    tipoDocumento: string
    numeroDocumento: string
    nombre: string
    apellido: string
    telefono: string
    email: string
    ciudad: string
    direccion: string
    fechaCreacion: Date
    fechaModificacion: Date | null
}