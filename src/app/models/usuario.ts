export class Usuario {
    nombre: string;
    apellido: string;
    email: string;
    contrasenia: string;

  constructor(nombre: string, apellido: string, email: string, clave: string) {
        this.nombre = nombre;
        this.apellido = apellido
        this.email = email;
        this.contrasenia = clave;
  }

}