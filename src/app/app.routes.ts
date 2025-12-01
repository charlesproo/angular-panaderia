//IMPORTACIONES DE TODOS LOS MODULOS QUE CREAMOS PARA USAR EN LA PAGINA EN EL FUTURO
import { Routes } from '@angular/router';
import { Pan } from './components/pages/pan/pan';
import { Pasteleria } from './components/pages/pasteleria/pasteleria';
import { Integral } from './components/pages/pan/integral/integral';
import { Blanco } from './components/pages/pan/blanco/blanco';
import { Lenia } from './components/pages/pan/lenia/lenia';
import { Pueblo } from './components/pages/pan/pueblo/pueblo';
import { Bizcocho } from './components/pages/pasteleria/bizcocho/bizcocho';
import { Galletas } from './components/pages/pasteleria/galletas/galletas';
import { Croissant } from './components/pages/pasteleria/croissant/croissant';
import { Magdalenas } from './components/pages/pasteleria/magdalenas/magdalenas';
import { Pastelito } from './components/pages/pastelito/pastelito';
import { Registrarse } from './components/pages/registrarse/registrarse';
import { InicioSesion } from './components/pages/inicio-sesion/inicio-sesion';
import { Cesta } from './components/pages/cesta/cesta';

//ASIGNAMOS UN NOMBRE AL PATH DE CADA COMPONENTE PARA USAR EN HTML CON ROUTERLINK
export const routes: Routes = [
    {path: 'pan', component: Pan},
    {path: 'pasteleria', component: Pasteleria},
    {path: 'integral', component: Integral},
    {path: 'blanco', component: Blanco},
    {path: 'lenia', component: Lenia},
    {path: 'pueblo', component: Pueblo},
    {path: 'bizcocho', component: Bizcocho},
    {path: 'galletas', component: Galletas},
    {path: 'croissant', component: Croissant},
    {path: 'magdalenas', component: Magdalenas},
    {path: '', component: Pastelito},
    {path: 'registrarse', component: Registrarse},
    {path: 'inicio-sesion', component: InicioSesion},
    {path: 'cesta', component: Cesta}
];
