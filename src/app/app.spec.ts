//IMPORTAMOS EL MODULO DE PRUEBAS DE ANGULAR Y EL COMPONENTE APP PRINCIPAL
import { TestBed } from '@angular/core/testing';
import { App } from './app';

//GRUPO DE PRUEBAS PARA EL COMPONENTE PRINCIPAL 'APP'
describe('App', () => {
  //BLOQUE QUE SE EJECUTA ANTES DE CADA PRUEBA COMO UN FOREACH
  beforeEach(async () => {
    //CONFIGURAMOS EL AMBIENTE DE PRUEBAS DEL MODULO
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents(); //COMPILA LOS COMPONENTES DECLARADOS EN EL TESTBED
  });

  //VERIFICA QUE EL COMPONENTE PRINCIPAL SE HAYA CORRECTAMENTE
  it('should create the app', () => {
    //CREAMOS UNA INSTANCIA DEL COMPONENTE App DENTRO DE UN ENTORNO DE PRUEBA 
    const prueba = TestBed.createComponent(App);
    //OBTENEMOS LA INSTANCIA DE LA CLASE DEL COMPONENTE
    const app = prueba.componentInstance;
    //ESPERAMOS QUE LA INSTANCIA DEL COMPONENTE EXISTA
    expect(app).toBeTruthy();
  });

});