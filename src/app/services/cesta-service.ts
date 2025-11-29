//IMPORTAMOS EL DECORADOR INJECTABLE Y SIGNAL DE ANGULAR 
import { Injectable, signal } from '@angular/core';

//INTERFAZ QUE CONTIENE LOS DATOS QUE VA A TENER LA CESTA EN ESE MODULO
export interface ItemCesta {
  id: number;
  nombre: string;
  cantidad: number;
  precioUnitario: number;
}

//DECORADOR PARA DEFINIR ESTA CLASE COMO UN SERVICIO INYECTABLE EN TODA LA APLICACIÓN
@Injectable({
  providedIn: 'root'
})

//CLASE SERVICIO ENCARGADA DE GESTIONAR LA LÓGICA DE LA CESTA DE COMPRA
export class CestaService {
  //VARIABLE SIGNAL QUE ALMACENA LOS ITEMS DE LA CESTA
  cestaItems = signal<ItemCesta[]>([]);

  //FUNCION PARA AÑADIR UN PRODUCTO A LA CESTA O AUMENTAR SU CANTIDAD
  anadirProducto(id: number, nombre: string, precioUnitario: number, cantidad: number = 1) {
    const items = this.cestaItems();
    //COMPROBAMOS SI EL PRODUCTO YA EXISTE EN LA CESTA POR SU ID PARA INCREMENTAR LA CANTIDAD 
    const existe = items.find(item => item.id === id);

    if (existe) {
      this.cestaItems.update(arr =>
        arr.map(item =>
          item.id === id ? { ...item, cantidad: item.cantidad + cantidad } : item
        )
      );
      //EN CASO QUE EL PRODUCTO SEA NUEVO AÑADIMOS A LA CESTA (ARRAY) EL NUEVO ITEM CON SUS DATOS
    } else {
      this.cestaItems.update(arr => [
        ...arr,
        { id, nombre, precioUnitario, cantidad }
      ]);
    }
  }

  //FUNCION PARA ELIMINAR UN ITEM DE LA CESTA POR SU ID
  eliminarItem(id: number) {
    this.cestaItems.update(arr => arr.filter(item => item.id !== id));
  }

  //FUNCION PARA CALCULAR EL PRECIO TOTAL DE LA CESTA
  calcularTotal() {
    //UTILIZAMOS MEOTDO REDUCE PARA SUMAR LA CANTIDAD * PRECIO UNITARIO DE CADA ITEM, DANDONOS EL RESULTAOD TOTAL DEL PRODUCTO
    return this.cestaItems().reduce(
      (total, item) => total + item.cantidad * item.precioUnitario,
      0
    );
  }

  //FUNCION PARA VACIAR LA CESTA DESPUÉS DE LA COMPRA
  finalizarCompra() {
    this.cestaItems.set([]);
  }
}