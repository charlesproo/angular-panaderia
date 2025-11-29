//IMPORTAMOS LAS FUNCIONES Y TIPOS NECESARIOS PARA LA CONFIGURACIÓN DE LA APLICACIÓN Y LA FUNCION PARA EL ENRUTAMIENTO EN LA PAGINA
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

//OBJETO PRINCIPAL DE CONFIGURACIÓN DE LA APLICACIÓN
export const appConfig: ApplicationConfig = {
  //ARRAY DE PROVEEDORES DE FUNCIONALIDADES GLOBALES DE ANGULAR
  providers: [
    //PROVEEDOR PARA CAPTURAR ERRORES GLOBALES DEL NAVEGADOR COMO ERRORES DE JAVASCRIPT
    provideBrowserGlobalErrorListeners(),
    //PROVEEDOR PARA CONFIGURAR ZON.JS PERMITIENDO OPTIMIZAR EL RENDIMIENTO DE LOS EVENTOS
    provideZoneChangeDetection({ eventCoalescing: true }),
    //PROVEEDOR ESENCIAL PARA HABILITAR EL SISTEMA DE NAVEGACIÓN Y RUTAS DE LA APLICACIÓN
    provideRouter(routes)
  ]
};