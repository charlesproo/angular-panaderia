//CLASE DE USUARIO PARA ALMACENAR MAS ADELANTE EN UN FICHERO JSON, CONTIENE SUS VARIABLE STRING
export class Usuario {
  nombre: string;
  apellido: string;
  email: string;
  contrasenia: string;

  //CONSTRUCTOR PARA CREAR EL USUARIO CUANDO VAYAMOS ALMACENARLO EN EL JSON
  constructor(nombre: string, apellido: string, email: string, clave: string) {
    this.nombre = nombre;
    this.apellido = apellido
    this.email = email;
    this.contrasenia = clave;
  }

}