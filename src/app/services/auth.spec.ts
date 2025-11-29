//IMPORTAMOS LAS FUNCIONES Y MÓDULOS NECESARIOS PARA LAS PRUEBAS UNITARIAS DE ANGULAR Y EL SERVICIO DE AUTENTICACION
import { TestBed, inject } from '@angular/core/testing';
import { Auth } from './auth';

//GRUPO DE PRUEBAS PARA EL SERVICIO AUTH
describe('Auth', () => {
  let service: Auth;

  //BLOQUE QUE SE EJECUTA ANTES DE CADA PRUEBA COMO UN FOREACH
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [Auth] });
  });

  //VERIFICAMOS QUE EL SERVICIO SE CREA CORRECTAMENTE Y ESPERAMOS A QUE LA INSTANCIA DEL SERVICIO EXISTA
  it('should be created', inject([Auth], (service: Auth) => {
    expect(service).toBeTruthy();
  }));
});