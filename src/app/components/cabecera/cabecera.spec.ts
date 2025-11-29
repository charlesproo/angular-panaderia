//IMPORTAMOS LAS FUNCIONES Y MÓDULOS NECESARIOS PARA LAS PRUEBAS DE COMPONENTES DE ANGULAR Y LA CABECERA
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cabecera } from './cabecera';

//GRUPO DE PRUEBAS PARA EL COMPONENTE 'Cabecera'
describe('Cabecera', () => {
  let component: Cabecera;
  let test: ComponentFixture<Cabecera>;

  //BLOQUE QUE SE EJECUTA ANTES DE CADA PRUEBA COMO UN FOREACH
  beforeEach(async () => {
    //CONFIGURAMOS EL AMBIENTE DE PRUEBAS DEL MODULO
    await TestBed.configureTestingModule({
      imports: [Cabecera]
    })
      .compileComponents(); //COMPILA LOS COMPONENTES DECLARADOS EN EL TESTBED

    //CREAMOS EL ENTORNO DE PRUEBA
    test = TestBed.createComponent(Cabecera);
    //OBTENEMOS LA INSTANCIA DE LA CLASE DEL COMPONENTE PARA ACCEDER A SUS PROPIEDADES Y MÉTODOS
    component = test.componentInstance;
    //FORZAMOS LA DETECCIÓN DE CAMBIOS PARA QUE EL COMPONENTE RENDERICE SU HTML INICIAL
    test.detectChanges();
  });

  //VERIFICAMOS QUE EL COMPONENTE SE HA CREADO CORRECTAMENTE
  it('should create', () => {
    //ESPERAMOS QUE LA INSTANCIA DEL COMPONENTE EXISTA
    expect(component).toBeTruthy();
  });
});