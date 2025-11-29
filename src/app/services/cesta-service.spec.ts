//IMPORTAMOS EL MODULO DE PRUEBAS DE ANGULAR Y EL SERVICIO DE CESTA
import { TestBed } from '@angular/core/testing';
import { CestaService } from './cesta-service';

//GRUPO DE PRUEBAS PARA EL SERVICIO CESTASERVICE
describe('CestaService', () => {
  let service: CestaService;

  //BLOQUE QUE SE EJECUTA ANTES DE CADA PRUEBA COMO SI FUERA UN FOREACH
  beforeEach(() => {
    //CONFIGURAMOS EL AMBIENTE DE PRUEBAS DEL MODULO
    TestBed.configureTestingModule({});
    //INJECTAMOS UNA INSTANCIA DEL SERVICIO DE CESTA
    service = TestBed.inject(CestaService);
  });

  //PRUEBA INDIVIDUAL: VERIFICAR QUE EL SERVICIO SE CREA CORRECTAMENTE
  it('should be created', () => {
    //ESPERAMOS QUE LA INSTANCIA DEL SERVICIO EXISTA, ES DECIR QUE NO SEA NULO NI ESTE VACIO (UNDEFINIED)
    expect(service).toBeTruthy();
  });
});