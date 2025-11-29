//IMPORTAMOS LA FUNCIÓN NECESARIA PARA INICIAR LA APLICACIÓN EN EL NAVEGADOR, LA COFNGIURACION DE LA APP Y EL COMPONENTE RAIZ
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

//FUNCION PRINCIPAL: INICIA LA APLICACIÓN ANGULAR Y CAPTAMOS ERRORES MANDANDOLOS AL CONSOLE LOG
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));