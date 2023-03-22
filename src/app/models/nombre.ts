export class Nombre{
    _id?: number;
    nombre: string;
    apellido: string;
    email: string;
    puesto: string;

    constructor(nombre: string, apellido: string, email: string, puesto: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.puesto = puesto;
    }
}